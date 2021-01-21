import Login from "@/pages/login";
import Dashboard from "@/pages/dashboard";
import NotFound from "@/components/NotFound";
import PreventiveMaintenance from "@/pages/preventive-maintenance";
import TriggerEdit from "@/pages/preventive-maintenance/edit";
import WorkOrders from "@/pages/work-orders";
import Equipment from "@/pages/equipment";
import EquipmentEdit from "@/pages/equipment/edit";
import Location from "@/pages/location";
import Analytics from "@/pages/analytics";
import User from "@/pages/user";

// 组件示例
import componentsDemo from "@/components/hComponents";

// icon
import { DashboardOutlined, ProjectOutlined } from "@ant-design/icons";

export const mainRoutes = [
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/404",
    component: NotFound,
  },
  {
    path: "/components-demo",
    component: componentsDemo,
  },
];

export const adminRoutes = [
  {
    path: "/admin/dashboard",
    title: "Dashboard",
    isShow: true,
    exact: true,
    component: Dashboard,
    icon: DashboardOutlined,
  },
  {
    path: "/admin/workOrders",
    title: "Work Orders",
    isShow: true,
    exact: true,
    component: WorkOrders,
    icon: DashboardOutlined,
  },
  {
    path: "/admin/preventiveMaintenance",
    title: "Preventive Maintenance",
    isShow: true,
    exact: true,
    component: PreventiveMaintenance,
    icon: ProjectOutlined,
    children: [
      {
        title: "Trigger Add",
        path: "/admin/preventiveMaintenance/triggerAdd",
        isShow: false,
        exact: true,
        component: TriggerEdit,
      },
    ],
  },
  {
    path: "/admin/analytics",
    title: "Analytics",
    isShow: true,
    exact: true,
    component: Analytics,
    icon: ProjectOutlined,
  },
  {
    path: "/admin/location",
    title: "Location",
    isShow: true,
    exact: true,
    component: Location,
    icon: DashboardOutlined,
  },
  {
    path: "/admin/equipment",
    title: "Equipment",
    isShow: true,
    exact: true,
    component: Equipment,
    icon: DashboardOutlined,
    children: [
      {
        title: "Equipment Add",
        path: "/admin/equipment/equipmentAdd",
        isShow: false,
        exact: true,
        component: EquipmentEdit,
      },
    ],
  },
  {
    path: "/admin/userInfo",
    title: "UserInfo",
    isShow: false,
    exact: true,
    component: User,
    icon: DashboardOutlined,
  },
  // {
  //   path: "/admin/company",
  //   title: "公司商标分析",
  //   root: true,
  //   isShow: true,
  //   icon: ProjectOutlined,
  //   children: [
  //     {
  //       title: "公司商标概况",
  //       path: "/admin/company/overview",
  //       isShow: true,
  //       exact: true,
  //       component: CompanyOverview,
  //       children: [
  //         {
  //           title: "商标列表",
  //           path: "/admin/company/brandList",
  //           isShow: false,
  //           exact: true,
  //           component: ListBrand,
  //         },
  //       ],
  //     },
  //     {
  //       title: "商标综合查询",
  //       path: "/admin/company/trademarkQuery",
  //       isShow: true,
  //       exact: true,
  //       component: TrademarkQuery,
  //     },
  //   ],
  // },
];
