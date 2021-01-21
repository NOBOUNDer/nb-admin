import _ from "loadsh";

// 节流
export function throttle(func, wait) {
  let context, args;
  let old = 0; // 时间戳
  return function () {
    context = this;
    args = arguments;
    // 获取当前时间戳
    let now = new Date().valueOf();
    if (now - old > wait) {
      func.apply(context, args);
      old = now;
    }
  };
}

// 深拷贝
export function deepCopy(data) {
  const t = typeOf(data);
  let o;
  if (t === "array") {
    o = [];
  } else if (t === "object") {
    o = {};
  } else {
    return data;
  }
  if (t === "array") {
    for (let i = 0; i < data.length; i++) {
      o.push(deepCopy(data[i]));
    }
  } else if (t === "object") {
    for (const i in data) {
      o[i] = deepCopy(data[i]);
    }
  }
  return o;
}

export function typeOf(data) {
  const toString = Object.prototype.toString;
  const map = {
    "[object Boolean]": "boolean",
    "[object Number]": "number",
    "[object String]": "string",
    "[object Function]": "function",
    "[object Array]": "array",
    "[object Date]": "date",
    "[object RegExp]": "regExp",
    "[object Undefined]": "undefined",
    "[object Null]": "null",
    "[object Object]": "object",
  };
  return map[toString.call(data)];
}

// 展平路由多维数组
export const flattenRoutes = (routes) =>
  _.flattenDeep(
    routes.map((route) => [
      route.children ? flattenRoutes(route.children) : [],
      route,
    ])
  );

// 设置每个路由的parent
export const setupParents = (routes, parentRoute = null) =>
  routes.map((route) => {
    const withParent = {
      ...route,
      ...(parentRoute && { parent: parentRoute }),
    };

    return {
      ...withParent,
      ...(withParent.children && {
        children: setupParents(withParent.children, withParent),
      }),
    };
  });

// 返回展平后的路由配置
export const generateRoutes = (routes) => {
  console.log(flattenRoutes(setupParents(routes)));
  return flattenRoutes(setupParents(routes));
};

// 导航面包屑
export const pathTo = (route) => {
  if (!route.parent) {
    return [route];
  }

  return [...pathTo(route.parent), route];
};
