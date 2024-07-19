
<template>
  <div class="panier">
    <v-app-bar class="elevation-0">
      <nuxt-link to="/">Market</nuxt-link>

      <v-spacer></v-spacer>

      <span class="text-h5 mr-3">Panier</span>

      <v-avatar color="primary" size="30" v-if="state == 'true'">
        <span
          style="
            color: white !important;
            font-weight: bolder;
            font-size: 0.8rem;
          "
          >P</span
        >
      </v-avatar>

      <nuxt-link to="/connexion">
        <v-icon>mdi-account-circle</v-icon>
      </nuxt-link>
      <v-spacer></v-spacer>
      <v-icon @click="closeCart">mdi-close</v-icon>
    </v-app-bar>

    <div class="center">
      <div class="panier-vide">
        <img src="/cart.png" width="150" />
        <br />
        <br />
        <p class="text-h4 text-center">Votre panier est vide</p>
        <br />

        <v-btn outlined block color="success">Voir boutique</v-btn>

        <br />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions  } from 'vuex';

export default {
  data() {
    return {
      state: "",
    };
  },

  
  methods:{
    ...mapActions(['closeCart']),

  }
};
</script>

<style scoped>
.v-toolbar {
  background-color: white !important;
}
.panier {
  position: fixed;
  z-index: 25;
  height: 100vh;
  width: 100%;
  background-color: white;
}

.panier .center {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #f8f8f8;
}

.panier a {
  color: #5da44c;
  font-family: "Fugaz One", sans-serif;
  font-weight: 900;
  font-style: normal;
  text-decoration: none;
}

.panier .panier-vide {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  height: 300px;
  padding: 30px;
}
</style>


