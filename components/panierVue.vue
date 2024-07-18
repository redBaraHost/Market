
<template>
  <div class="panier">
    <v-app-bar class="elevation-0">
      <nuxt-link to="/">Market</nuxt-link>

      <v-spacer></v-spacer>

      <span class="text-h5">Panier</span>

      <v-spacer></v-spacer>

      <nuxt-link to="/connexion">
        <v-icon>mdi-account-circle</v-icon>
      </nuxt-link>
    </v-app-bar>

    <div class="center">
      <div class="panier-vide">
        <p class="text-h4 text-center">Votre panier est vide</p>
        <br />

        <v-btn outlined block>Voir boutique</v-btn>
      </div>
    </div>


  </div>
</template>

<style scoped>
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
  justify-content: center;
  height: 100vh;
}

.panier a {
  color: #5da44c;
  font-family: "Fugaz One", sans-serif;
  font-weight: 900;
  font-style: normal;
  text-decoration: none;
}

.panier .panier-vide {
  height: 300px;
  padding: 30px;
}
</style>