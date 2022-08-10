import { initEntryConfig } from "@/entries/common/entryConfig.js";

const routes = [];

import App from "@/entries/default/App.vue";

initEntryConfig({
  app: App,
  routes
});

require("@/entries/common/main.js");
