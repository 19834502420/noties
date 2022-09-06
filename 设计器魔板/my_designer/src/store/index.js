import Vue from "vue";
import Vuex from "vuex";
import p1 from "yn-p1-designer/libs/views/applications/p1_designer/store";
import routerState from "./navi/";
import themeState from "./theme/";
import createLogger from "vuex/dist/logger";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  namespaced: true,
  modules: { p1, routerState, themeState },
  strict: debug,
  plugins: debug ? [createLogger()] : []
});
