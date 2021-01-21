import React, { useContext } from "react";
import { Layout, Avatar, Badge, Space, Dropdown, Menu } from "antd";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import "./index.less";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  BellOutlined,
} from "@ant-design/icons";
import { UPDATE_COLLAPSED, StoreContext } from "@/store";
import Breadcrumbs from "@/components/BreadCrumb";

const prefix = "header-container";

function Headers(props) {
  const { Header } = Layout;
  const {
    state: { collapsed, currentRoute },
    dispatch,
  } = useContext(StoreContext);

  const menu = (
    <Menu>
      <h1 style={{ padding: "0 10px" }}>Bruce Lu</h1>
      <Menu.Divider />
      <Menu.Item key="0" onClick={() => props.history.push("/admin/userInfo")}>
        个人信息
      </Menu.Item>
      <Menu.Item key="1">公司信息</Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">退出</Menu.Item>
    </Menu>
  );

  return (
    <Header className={prefix} style={{ left: collapsed ? "80px" : "200px" }}>
      <div className={`${prefix}-left`}>
        <Space>
          <span
            onClick={() =>
              dispatch({
                type: UPDATE_COLLAPSED,
                value: !collapsed,
              })
            }
          >
            {collapsed ? (
              <MenuUnfoldOutlined className="trigger" />
            ) : (
              <MenuFoldOutlined className="trigger" />
            )}
          </span>
          {<Breadcrumbs route={currentRoute} />}
        </Space>
      </div>
      <div className={`${prefix}-right`}>
        <div className={`${prefix}-right-inform`}>
          <Badge dot>
            <BellOutlined className={`${prefix}-right-inform-icon`} />
          </Badge>
        </div>
        <div className={`${prefix}-right-user`}>
          <Dropdown overlay={menu} trigger={["hover"]}>
            <Avatar icon={<UserOutlined />} />
          </Dropdown>
        </div>
      </div>
    </Header>
  );
}

Headers.propTypes = {
  history: PropTypes.object,
  consoleRoutes: PropTypes.array,
};

export default withRouter(Headers);
