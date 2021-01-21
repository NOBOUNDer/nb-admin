import React, { useEffect, useContext } from "react";
import { StoreContext, UPDATE_ROUTES, UPDATE_MENU } from "@/store";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import { adminRoutes } from "./routes";
import Frame from "@/layout/Frame/frame";
import { isLogined } from "@/utils/auth";
import PropTypes from "prop-types";
import PageItem from "@/components/PageItem";
import "@/utils/global";
import { listRoutes } from "./api";
import { generateRoutes } from "@/utils/utils";

// 展平后的本地路由配置
const localRoutes = generateRoutes(adminRoutes);

function App(props) {
  const { pathname } = useLocation();

  const {
    state: { consoleRoutes },
    dispatch,
  } = useContext(StoreContext);

  // 计算菜单配置
  const computeMenu = (asyncRoutes) => {
    const newMenu = [];
    let result = [];

    if (asyncRoutes === "*") {
      // 所有菜单权限
      result = adminRoutes.filter((item) => item.isShow);
    } else {
      // 将后台拿到的当前用户的路由信息与本来路由配置进行比对 筛选掉不在菜单展示的路由
      localRoutes.forEach((local) => {
        asyncRoutes.forEach((async) => {
          if (local.path === async.path && local.isShow) {
            const obj = async;
            if (local.root) obj.root = local.root;
            if (local.icon) obj.icon = local.icon;
            newMenu.push(obj);
          }
        });
      });

      // 将一维数组转为树结构
      result = newMenu.reduce(function (prev, item) {
        prev[item.pid] ? prev[item.pid].push(item) : (prev[item.pid] = [item]);
        return prev;
      }, {});

      for (let prop in result) {
        result[prop].forEach(function (item) {
          result[item.id] ? (item.children = result[item.id]) : "";
        });
      }

      result = result[0];
    }

    // 更新 context中的 menu
    dispatch({ type: UPDATE_MENU, menu: result });
  };

  // 计算路由配置
  const computeRoutes = (asyncRoutes) => {
    const newRoutes = [];

    if (asyncRoutes === "*") {
      // 所有路由权限
      localRoutes.forEach((app) => {
        if (!app.root) newRoutes.push(app);
      });
    } else {
      // 将后台拿到的当前用户的路由信息与本地路由配置进行比对 在本地配置中筛选出需要的配置进行路由渲染
      localRoutes.forEach((app) => {
        asyncRoutes.forEach((async) => {
          if (app.path === async.path && !app.root) newRoutes.push(app);
        });
      });
    }

    // 更新 context中的 consoleRoutes
    dispatch({ type: UPDATE_ROUTES, routes: newRoutes });
  };

  // 获取路由配置
  const getRoutes = async () => {
    const res = await listRoutes();
    const asyncRoutes = (res.data && res.data.records) || [];
    console.log(asyncRoutes);
    computeMenu("*");
    computeRoutes("*");
  };

  useEffect(() => {
    console.log("debug");
    getRoutes();
  }, []);

  // 动态修改网站标题
  useEffect(() => {
    consoleRoutes.forEach((item) => {
      if (item.path === pathname) document.title = "设备管理 - " + item.title;
    });
  }, [pathname, consoleRoutes]);

  return isLogined() ? (
    <Frame>
      <div>
        {consoleRoutes.length > 0 ? (
          <Switch>
            {consoleRoutes.map((route) =>
              route.path ? (
                <Route key={route.path} path={route.path} exact={route.exact}>
                  <PageItem route={route} {...props} />
                </Route>
              ) : null
            )}
            {/*访问首页时重定向到工作台*/}
            <Redirect to={adminRoutes[0].path} exact from="/" />
            {/*匹配不到路径时重定向404*/}
            <Redirect to="/404" />
          </Switch>
        ) : null}
      </div>
    </Frame>
  ) : (
    <Redirect to="/login" />
  );
}

App.propTypes = {
  history: PropTypes.object,
};

export default App;
