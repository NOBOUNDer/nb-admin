import React, { useState, useEffect, useContext } from "react";
import { StoreContext } from "@/store";
import { Layout, Menu } from "antd";
import PropTypes from "prop-types";
import { withRouter, useLocation } from "react-router-dom";
import "./index.less";
import { SettingOutlined, QuestionCircleOutlined } from "@ant-design/icons";

// import logoSrc from "@/img/logo.png";

const prefix = "sider-container";

function Siders(props) {
  const { Sider } = Layout;
  const { SubMenu } = Menu;

  const {
    state: { consoleRoutes, menu, collapsed },
  } = useContext(StoreContext);

  const [selectedKeys, setSelectedKeys] = useState([]);
  const [openKeys, setOpenKeys] = useState([]);

  const { pathname } = useLocation();

  const bottomOperate = [
    {
      title: "设置",
      content: <SettingOutlined />,
    },
    {
      title: "联系我们",
      content: <QuestionCircleOutlined />,
    },
  ];

  // 匹配高亮菜单
  const currentMenu = () => {
    function findParent(route) {
      return route.parent && !route.parent.root
        ? findParent(route.parent)
        : route;
    }

    function findOpenKeys(route) {
      return route.parent
        ? findOpenKeys(route.parent)
        : route.root
        ? [route.path]
        : [];
    }

    consoleRoutes.forEach((item) => {
      if (item.path === pathname) {
        const { path } = findParent(item);
        console.log(findOpenKeys(item));
        setOpenKeys(findOpenKeys(item));
        setSelectedKeys([path]);
      }
    });
  };

  // 设置展开菜单
  const onOpenChange = (openKeys) => {
    setOpenKeys(openKeys);
  };

  // 监听路由变化
  useEffect(() => {
    currentMenu();
  }, [pathname, consoleRoutes, menu]);

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      className={prefix}
      style={{
        overflow: "auto",
        height: "100vh",
        position: "fixed",
        left: 0,
      }}
    >
      <div className="logo">
        {/*<img src={logoSrc} alt="" />*/}
        {/*<h1>中顺云设备管理后台</h1>*/}
      </div>
      <Menu
        className={`${prefix}-menu`}
        theme="dark"
        mode="inline"
        selectedKeys={selectedKeys}
        openKeys={openKeys}
        onOpenChange={onOpenChange}
      >
        {menu.map((route) => {
          return route.children && route.root ? (
            <SubMenu
              key={route.path}
              icon={route.icon ? <route.icon /> : null}
              title={route.title}
            >
              {route.children.map((children) => {
                return (
                  <Menu.Item
                    key={children.path}
                    onClick={(p) => props.history.push(p.key)}
                  >
                    {children.title}
                  </Menu.Item>
                );
              })}
            </SubMenu>
          ) : (
            <Menu.Item
              key={route.path}
              icon={route.icon ? <route.icon /> : null}
              onClick={(p) => props.history.push(p.key)}
            >
              {route.title}
            </Menu.Item>
          );
        })}
      </Menu>
      <div className={`${prefix}-bottom`}>
        {bottomOperate.map((o, i) => {
          return (
            <div key={i} className={`${prefix}-bottom-item`}>
              {o.content}
              {!collapsed && <h2>{o.title}</h2>}
            </div>
          );
        })}
      </div>
    </Sider>
  );
}

Siders.propTypes = {
  history: PropTypes.object,
  consoleRoutes: PropTypes.array,
};

export default withRouter(Siders);
