import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = () => new Vuex.Store({
    state: {
        isCartOpen: false,
        cart: []
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
        },
        addToCart(state, product) {
            const item = state.cart.find(item => item.id === product.id);
            if (item) {
                alert("Déjà ajouté au panier");
            } else {
                state.cart.push({ ...product, quantity: 1 });
                localStorage.setItem('cart', JSON.stringify(state.cart));

            }
        },
        loadCart(state) {
            const cart = JSON.parse(localStorage.getItem('cart'));
            if (cart) {
                state.cart = cart;
            }
        },
        removeFromCart(state, productId) {
            state.cart = state.cart.filter(item => item.id !== productId);
            localStorage.setItem('cart', JSON.stringify(state.cart));

        },
       
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
        },
        addToCart({ commit }, product) {
            commit('addToCart', product);
        },
        loadCart({ commit }) {
            commit('loadCart');
        },
        removeFromCart({ commit }, productId) {
            commit('removeFromCart', productId);
        },
        
    },
    getters: {
        isCartOpen(state) {
            return state.isCartOpen;
        },
        cartItems(state) {
            return state.cart;
        },
        cartItemCount(state) {
            return state.cart.reduce((total, item) => total + item.quantity, 0);
        }
    }
});

export default store;
