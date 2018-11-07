import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  // значения глобального хранилища
  state: {
    products: [],
    isShowingSearchBar: false,
    counter: 10,
    summ: 244,
  },
  mutations: {
    // функции для изменния глобального хранилища
    increment(state) {
      state.counter += 1;
    },
    addSumm(state, payload) {
      state.summ += parseInt(payload.amount, 0);
    },
    toggleSearchBarState(state) {
      state.isShowingSearchBar = !state.isShowingSearchBar;
    },
    saveProductsInStore(state, payload) {
      state.products = payload;
    },
  },
  actions: {
    async loadProducts(context) {
      const { data } = await axios.get('/api/Products');
      context.commit('saveProductsInStore', data);
    },
  },
});
