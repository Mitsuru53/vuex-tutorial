import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pointA: 0,
    pointB: 0,
  },
  getters: {
    totalPoints: ({ pointA, pointB }) => pointA + pointB,
  },
  mutations: {
    addOnePointToA(state) {
      state.pointA += 1;
    },
    addOnePointToB(state) {
      state.pointB += 1;
    },
  },
  actions: {
    addOnePointToA({ commit }) {
      commit('addOnePointToA');
    },
    addOnePointToB({ commit }) {
      commit('addOnePointToB');
    },
  },
});
