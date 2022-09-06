import { OPERATION } from "@/config/custom/";
export default [
  /* 以下为示例代码 */
  // {
  //   custom: {
  //     operation: OPERATION.DELETE,
  //     target: "yn-heading",
  //     type: "component"
  //   }
  // },
  // 本地自定义组件
  {
    custom: {
      operation: OPERATION.INSERT_AFTER,
      target: "yn-message-board",
      type: "component"
    },
    name: "yn-handsontable"
  }
  // 在线自定义组件
  // {
  //   custom: {
  //     operation: OPERATION.INSERT_AFTER,
  //     target: "yn-label-input",
  //     type: "component"
  //   },
  //   appId: "mddengine",
  //   componentId: "fly"
  // }
  // {
  //   custom: {
  //     operation: OPERATION.REPLACE,
  //     target: "yn-dashboard-textarea",
  //     type: "component"
  //   },
  //   appId: "mddsuntest",
  //   instanceId: "test1",
  //   componentId: "default-icon"
  // },
  // {
  //   custom: {
  //     operation: OPERATION.REPLACE,
  //     target: "test",
  //     type: "category"
  //   },
  //   categoryId: "testCategory",
  //   categoryLabel: "测试分组",
  //   components: [
  //     {
  //       appId: "mddsuntest",
  //       instanceId: "test1",
  //       componentId: "eye"
  //     },
  //     {
  //       name: "yn-local-custom-test"
  //     }
  //   ]
  // }
];
