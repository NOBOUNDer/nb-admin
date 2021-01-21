import React from "react";
import ReactDOM from "react-dom";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { mainRoutes } from "./routes";
import "@/styles/index.less";
import "nprogress/nprogress.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from "antd/lib/locale/zh_CN";
import { ConfigProvider } from "antd";
import { Store } from "./store";

ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <Router>
      <Switch>
        <Route
          path="/admin"
          render={(routeProps) => (
            <Store>
              <App {...routeProps} />
            </Store>
          )}
        />
        {mainRoutes.map((route) => {
          return <Route key={route.path} {...route} />;
        })}
        {/*组件示例*/}
        <Redirect to="/components-demo" from="/components-demo" />
        {/*访问首页时重定向到工作台*/}
        <Redirect to="/admin/dashboard" exact from="/" />
        {/*匹配不到页面时重定向404*/}
        <Redirect to="/404" />
      </Switch>
    </Router>
  </ConfigProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
