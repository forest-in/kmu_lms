import { createStore } from 'vuex';

export default createStore({
  state: {
    popups: [],
  },
  mutations: {
    openPopup(state, { id, data }) {
      state.popups.push({ id, data });
    },
    closePopup(state, id) {
      state.popups = state.popups.filter(popup => popup.id !== id);
    },
  },
  actions: {
    openPopup({ commit }, { id, data }) {
      commit('openPopup', { id, data });
    },
    closePopup({ commit }, id) {
      commit('closePopup', id);
    },
  },
  getters: {
    getPopups: state => state.popups,
    getPopupById: state => id => state.popups.find(popup => popup.id === id),
  },
});
