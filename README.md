# equipment_admin

> 中顺云设备后台管理系统

## 目录结构
```
├── src
|  ├── api 请求接口
|  ├── components
|  |  ├── BreadCrumb 导航面包屑
|  |  ├── Button 通用按钮
|  |  ├── Chart 图标
|  |  ├── hComponents 自定义组件
|  |  ├── NotFound 404 页面
|  |  ├── PageItem 子页面包裹组件
|  |  ├── Paginations 分页
|  |  └── SearchForm 搜索表单
|  ├── hooks 自定义 hook
|  |  └── list.js 列表页
|  ├── img 
|  ├── index.js 入口
|  ├── App.js 主应用文件
|  ├── layout 布局
|  |  ├── Footer 底部
|  |  ├── Frame 内容区域
|  |  └── Header 头部导航
|  ├── pages
|  |  ├── dashboard 工作台
|  |  ├── analysis-company 公司商标分析
|  |  |  ├── company-overview 公司商标概况
|  |  |  └── trademark-query 商标综合查询
|  |  ├── dimension-brand 品牌商标分析
|  |  ├── list-brand 商标列表
|  |  └── login 登录
|  ├── store
|  |  └── index.js 状态管理
|  ├── routes 
|  |  └── index.js 路由配置
|  ├── setupProxy.js 代理配置
|  ├── styles
|  |  ├── common.less 公共样式
|  |  ├── index.less
|  |  ├── lib.less 简写class样式
|  |  └── variable.less 样式变量
|  └── utils
|     ├── auth.js 权限token
|     ├── config.js api 请求前缀
|     ├── global.js 全局变量、方法
|     ├── http.js 封装 NProgress(进度条) 的 request
|     ├── request.js axios 二次封装
|     └── utils.js 工具类方法
├── craco.config.js 自定义webpack配置
├── package.json
└── README.md
