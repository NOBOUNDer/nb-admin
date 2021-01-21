import { $http } from "@/utils/http";

//  菜单list
export function listRoutes() {
  return $http({
    url: "/routes",
    method: "get",
  });
}

//  商标list
export function listBrand(params) {
  return $http({
    url: "/articles/listBrand",
    method: "get",
    params,
  });
}

//  工单list
export function listWorkOrder(params) {
  return $http({
    url: "/articles/listWorkOrder",
    method: "get",
    params,
  });
}
