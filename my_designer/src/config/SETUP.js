export const LOG = {
  LEVEL: process.env.VUE_APP_LOG_LEVEL
    ? Number(process.env.VUE_APP_LOG_LEVEL)
    : 1 // 0: NONE, 1: Error, 2: Warn, 3: Info, 4: Log
};
export const APPS = {
  NAME: "YN",
  LANGUAGE: "" // empty means use default language. English language code is en.
};
export const BACKEND = {
  BASE_URL: process.env.VUE_APP_BASE_URL,
  BASE_URL_INIT: process.env.VUE_APP_BASE_URL_INIT,
  MOCK_BASE_URL: process.env.VUE_APP_MOCK_BASE_URL,
  MDD_BASE_URL: process.env.VUE_APP_MDD_BASE_URL,
  MR_BASE_URL: process.env.VUE_APP_MR_BASE_URL,
  DASHBOARD_BASE_URL: process.env.VUE_APP_DASHBOARD_BASE_URL || "",
  DASHBOARD_ATTACHMENT: process.env.VUE_APP_DASHBOARD_ATTACHMENT, //图片上传接口
  PLUGIN_BASE_URL:
    process.env.VUE_APP_PLUGIN_BASE_URL || process.env.VUE_APP_BASE_URL,
  CUSTOM_COMPONENTS_BASE_URL:
    process.env.VUE_APP_CUSTOM_COMPONENTS_BASE_URL ||
    process.env.VUE_APP_BASE_URL
};

// VUE_APP_BASE_URL = "http://192.168.2.172/ecs/";
// VUE_APP_BASE_URL_INIT = "http://192.168.2.172/ecs/";
// VUE_APP_MOCK_BASE_URL = "https://localhost:3001/p1_platform/";
// VUE_APP_MDD_BASE_URL = "http://192.168.12.61:8282/mdd";
// VUE_APP_MR_BASE_URL = "http://192.168.12.61:8181/mr";
// VUE_APP_DASHBOARD_BASE_URL = "";
// VUE_APP_DASHBOARD_ATTACHMENT = "http://192.168.2.172/ecs/";
// VUE_APP_PLUGIN_BASE_URL = "";
// VUE_APP_YNAI_BASE_URL = "http://192.168.2.90:28383/";
// VUE_APP_LOG_LEVEL = 4;
// VUE_APP_CUSTOM_COMPONENTS_BASE_URL = "";
