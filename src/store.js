import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  // значения глобального хранилища
  state: {
    counter: 10,
    summ: 244,
  },
  mutations: {
    // функции для изменния глобального хранилища
    increment(state) {
      state.counter += 1;
    },
    addSumm(state, payload) {
      state.summ += parseInt(payload.amount);
    },
  },
  actions: {

  },
});
