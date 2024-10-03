// store/auth.js
// import firebase from '@/plugins/firebase';

// export const state = () => ({
//   user: null,
// });

// export const mutations = {
//   SET_USER(state, user) {
//     state.user = user;
//   },
//   CLEAR_USER(state) {
//     state.user = null;
//   },
// };

// export const actions = {
//   initAuth({ commit }) {
//     return new Promise((resolve) => {
//       firebase.auth().onAuthStateChanged(user => {
//         if (user) {
//           commit('SET_USER', user);
//         } else {
//           commit('CLEAR_USER');
//         }
//         resolve(user);
//       });
//     });
//   },
  // async fetchUserProfile({ commit }) {
  //   const user = firebase.auth().currentUser;
  //   if (user) {
  //     const userDoc = await firebase.firestore().collection('users').doc(user.uid).get();
  //     if (userDoc.exists) {
  //       return userDoc.data();
  //     }
  //   }
  //   return {};
  // },
  // async signUp({ commit }, { email, password, address, phone, nom, prenom }) {
  //   try {
  //     const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
  //     const user = userCredential.user;

  //     // Save additional user info in Firestore
  //     await firebase.firestore().collection('users').doc(user.uid).set({
  //       email,
  //       address,
  //       phone,
  //       nom,
  //       prenom,
  //     });

  //     commit('SET_USER', user);
  //   } catch (error) {
  //     throw new Error(error.message);
  //   }
  // },
  // async signIn({ commit }, { email, password }) {
  //   try {
  //     const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
  //     commit('SET_USER', userCredential.user);
  //   } catch (error) {
  //     throw new Error(error.message);
  //   }
  // },
  // async signOut({ commit }) {
  //   try {
  //     await firebase.auth().signOut();
  //     commit('CLEAR_USER');
  //   } catch (error) {
  //     throw new Error(error.message);
  //   }
  // },
//};

// export const getters = {
//   isAuthenticated(state) {
//     return !!state.user;
//   },
//   getUser(state) {
//     return state.user;
//   },
//};
