import { createStore as vuexCreateStore } from 'vuex';

export function createVuexStore() {
  return vuexCreateStore({
    state() {
      return {
        isCartOpen: false
      };
    },
    mutations: {
      toggleCart(state) {
        state.isCartOpen = !state.isCartOpen;
      },
      closeCart(state) {
        state.isCartOpen = false;
      },
      openCart(state) {
        state.isCartOpen = true;
      }
    },
    actions: {
      toggleCart({ commit }) {
        commit('toggleCart');
      },
      closeCart({ commit }) {
        commit('closeCart');
      },
      openCart({ commit }) {
        commit('openCart');
      }
    },
    getters: {
      isCartOpen(state) {
        return state.isCartOpen;
      }
    }
  });
}
