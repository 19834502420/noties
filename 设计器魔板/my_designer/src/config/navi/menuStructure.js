export default [
  {
    path: "/default",
    component: () => import("@/views/samples/views/Default"),
    meta: {
      appId: "default",
      icon: "info",
      label: "Hello 元年"
    }
  },
  {
    path: "/",
    meta: {
      appId: "samples",
      icon: "pie-chart",
      label: "演示事例"
    },
    children: [
      {
        path: "/samples/DashBoard",
        component: () => import("@/views/samples/views/DashBoard"),
        meta: {
          appId: "DashBoard",
          icon: "appstore",
          label: "Dash Board"
        }
      },
      {
        path: "/samples/sample1",
        component: () => import("@/views/samples/views/Sample1"),
        meta: {
          icon: "layout",
          appId: "sample1",
          label: "插槽支持"
        }
      },
      {
        path: "/samples/sample4",
        component: () => import("@/views/samples/views/Sample4"),
        meta: {
          appId: "sample4",
          icon: "pic-left",
          label: "响应式设计1"
        }
      },
      {
        path: "/samples/sample3",
        component: () => import("@/views/samples/views/Sample3"),
        meta: {
          appId: "sample3",
          icon: "cluster",
          label: "响应式设计2"
        }
      },
      {
        path: "/samples/sample2",
        component: () => import("@/views/samples/views/Sample2"),
        meta: {
          appId: "sample2",
          icon: "cluster",
          label: "嵌套列表"
        }
      }
    ]
  },
  {
    path: "/myDashboardList",
    component: () =>
      import("@/views/applications/default/views/dashboard/dashboardList.vue"),
    meta: {
      appId: "myDashboardList",
      icon: "info",
      label: "dashboard列表"
    }
  },
  {
    path: "/dashboard_dt",
    component: () =>
      import("@/views/applications/default/views/dashboard/detail/index.vue"),
    meta: {
      appId: "dashboard_dt",
      icon: "info",
      label: "dashboard设计页",
      routerOnly: true
    }
  },
  {
    path: "/dashboard_rt",
    component: () =>
      import(
        "@/views/applications/default/views/dashboard/detail/rt/index.vue"
      ),
    meta: {
      appId: "dashboard_rt",
      icon: "info2",
      label: "dashboard运行页",
      routerOnly: true
    }
  },
  {
    path: "/dashboard_pt",
    component: () =>
      import(
        "@/views/applications/default/views/dashboard/detail/pt/index.vue"
      ),
    meta: {
      appId: "dashboard_pt",
      icon: "info2",
      label: "dashboard预览页",
      routerOnly: true
    }
  },
  {
    path: "/customComponentsList",
    component: () =>
      import("@/views/applications/default/views/customComponents/index.vue"),
    meta: {
      appId: "customComponentsList",
      icon: "info",
      label: "自定义组件列表"
    }
  },
  {
    path: "/designerResource",
    meta: {
      appId: "designerResource",
      icon: "info",
      label: "资源管理"
    },
    component: () =>
      import(
        "@/views/applications/default/views/designerResource/ResourceList.vue"
      )
  },
  {
    path: "/designerResource_code",
    meta: {
      appId: "designerResource_code",
      icon: "info",
      label: "资源代码",
      routerOnly: true
    },
    component: () =>
      import(
        "@/views/applications/default/views/designerResource/ResourceCode.vue"
      )
  },
  {
    path: "/plugins",
    meta: {
      appId: "plugins",
      icon: "info",
      label: "插件管理"
    },
    component: () =>
      import("@/views/applications/default/views/plugin/PluginList.vue")
  },
  {
    path: "/plugin_code",
    meta: {
      appId: "plugin_code",
      icon: "info",
      label: "插件代码",
      routerOnly: true
    },
    component: () =>
      import("@/views/applications/default/views/plugin/PluginCode.vue")
  },
  {
    path: "/myDesignerTemplate",
    meta: {
      appId: "myDesignerTemplate",
      icon: "info",
      label: "我的设计器模板"
    },
    component: () =>
      import(
        "@/views/applications/default/views/pageDesigner/template/myDesignerTemplate.vue"
      )
  },
  {
    path: "/designerTemplate_dt",
    meta: {
      appId: "designerTemplate_dt",
      icon: "info",
      label: "页面设计器模板",
      routerOnly: true
    },
    component: () =>
      import(
        "@/views/applications/default/views/pageDesigner/template/index.vue"
      )
  },
  {
    path: "/designerTemplate_rt",
    meta: {
      appId: "designerTemplate_rt",
      icon: "info",
      label: "页面设计器模板运行页",
      routerOnly: true
    },
    component: () =>
      import(
        "@/views/applications/default/views/pageDesigner/template/rt/index.vue"
      )
  },
  {
    path: "/designerTemplate_pt",
    meta: {
      appId: "designerTemplate_pt",
      icon: "info",
      label: "页面设计器模板预览页",
      routerOnly: true
    },
    component: () =>
      import(
        "@/views/applications/default/views/pageDesigner/template/pt/index.vue"
      )
  },
  {
    path: "/myPageDesigner",
    meta: {
      appId: "myPageDesigner",
      icon: "info",
      label: "我的基础设计器"
    },
    component: () =>
      import(
        "@/views/applications/default/views/pageDesigner/myPageDesigner.vue"
      )
  },
  {
    path: "/pageDesigner_dt",
    meta: {
      appId: "pageDesigner_dt",
      icon: "info",
      label: "页面设计器设计页",
      routerOnly: true
    },
    component: () =>
      import("@/views/applications/default/views/pageDesigner/detail/index.vue")
  },
  {
    path: "/pageDesigner_rt",
    meta: {
      appId: "pageDesigner_rt",
      icon: "info",
      label: "页面设计器运行页",
      routerOnly: true
    },
    component: () =>
      import(
        "@/views/applications/default/views/pageDesigner/detail/rt/index.vue"
      )
  },
  {
    path: "/pageDesigner_pt",
    meta: {
      appId: "pageDesigner_pt",
      icon: "info",
      label: "页面设计器预览页",
      routerOnly: true
    },
    component: () =>
      import(
        "@/views/applications/default/views/pageDesigner/detail/pt/index.vue"
      )
  },
  {
    path: "/about",
    component: () => import("@/views/platform/About"),
    meta: {
      appId: "about",
      icon: "info",
      label: "关于"
    }
  },
  {
    path: "/",
    component: () => import("@/views/samples/views/Default"),
    meta: {
      appId: "default2"
    }
  }
];
