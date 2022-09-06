import { initEntryConfig } from "@/entries/common/entryConfig.js";

import App from "@/entries/common/App.vue";
const routes = [
  {
    path: "/dashboard_rt",
    component: () =>
      import("@/views/applications/default/views/dashboard/detail/rt/index.vue")
  }
];

initEntryConfig({
  app: App,
  routes
});

require("@/entries/common/main.js");
