const state = {
  theme: "dark"
};

const getters = {
  currentTheme: state => state.theme
};

const mutations = {
  switchTheme(state) {
    if (state.theme === "dark") {
      state.theme = "light";
    } else if (state.theme === "light") {
      state.theme = "dark";
    }
  }
};

const actions = {
  switchTheme: ({ commit }) => commit("switchTheme")
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
