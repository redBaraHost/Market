import firebase from '@/plugins/firebase';

export const state = () => ({
  user: null,
});

export const mutations = {
  SET_USER(state, user) {
    state.user = user;
  },
  CLEAR_USER(state) {
    state.user = null;
  },
};

export const actions = {
  async signUp({ commit }, { email, password }) {
    try {
      const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
      commit('SET_USER', userCredential.user);
    } catch (error) {
      throw new Error(error.message);
    }
  },
  async signIn({ commit }, { email, password }) {
    try {
      const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
      commit('SET_USER', userCredential.user);
    } catch (error) {
      throw new Error(error.message);
    }
  },
  async signOut({ commit }) {
    try {
      await firebase.auth().signOut();
      commit('CLEAR_USER');
    } catch (error) {
      throw new Error(error.message);
    }
  },
};

export const getters = {
  isAuthenticated(state) {
    return !!state.user;
  },
  getUser(state) {
    return state.user;
  },
};
