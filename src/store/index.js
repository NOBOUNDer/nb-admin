import React, { createContext, useReducer } from "react";
import PropTypes from "prop-types";

export const UPDATE_ROUTES = "UPDATE_ROUTES";
export const UPDATE_MENU = "UPDATE_MENU";
export const UPDATE_COLLAPSED = "UPDATE_COLLAPSED";
export const UPDATE_CURRENT_ROUTE = "UPDATE_CURRENT_ROUTE";

const initialState = {
  menu: [], // 菜单列表
  consoleRoutes: [], // 与后台返回的路由进行对比筛选后的路由配置
  collapsed: false, // 左侧菜单缩进
  currentRoute: {}, // 当前路由信息
};

export const StoreContext = createContext({});

const StoreProvider = StoreContext.Provider;

const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_ROUTES:
      return { ...state, consoleRoutes: action.routes };
    case UPDATE_MENU:
      return { ...state, menu: action.menu };
    case UPDATE_COLLAPSED:
      return { ...state, collapsed: action.value };
    case UPDATE_CURRENT_ROUTE:
      return { ...state, currentRoute: action.value };
    default:
      return state;
  }
};

export const Store = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StoreProvider value={{ state, dispatch }}>{props.children}</StoreProvider>
  );
};

Store.propTypes = {
  children: PropTypes.element,
};
