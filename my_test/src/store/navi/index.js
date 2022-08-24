const state = {
  title: "元年P1",
  menuItems: []
};

const getters = {
  pageTitle: state => state.title,
  menuItems: state => state.menuItems
};

const mutations = {
  changeTitle(state, newTitle) {
    state.title = newTitle;
  },
  updateMenu(state, opt) {
    if (Array.isArray(opt.menuItems)) {
      state.menuItems = opt.menuItems;
    }
  }
};

const actions = {
  changeTitle: ({ commit }, newVal) => commit("changeTitle", newVal),
  updateMenu: ({ commit }, opt) => commit("updateMenu", opt)
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
