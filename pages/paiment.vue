<template>
  <div class="wrapper">
    <div class="top">
      <nuxt-link to="/">Market</nuxt-link>

      <v-spacer></v-spacer>
      <v-title class="v-title">Paiment</v-title>
      <v-spacer></v-spacer>
      <v-avatar size="32" color="purple" class="white--text font-weight-bold"
        >f</v-avatar
      >
      <v-icon large>mdi-account-circle</v-icon>
    </div>
    <br />

    <div class="center">
      <div class="livraison-box">
        <p>LIVRAISON</p>
        <v-icon>mdi-pencil-outline</v-icon>

        <span class="body-1 font-weight-bold">Nom complet</span> <br />
        <span class="text-body-2">Adresse</span> <br />
        <span class="text-body-2">ville, pays</span> <br />
        <span class="text-body-2">Numero de mobile</span>
        <br />
        <br />
        <v-divider></v-divider>
        <br />
        <span class="body-1 font-weight-bold">Livraison rapide et fiable</span>
      </div>

      <br />
      <br />

      <div class="methode-box">
        <p>MODE DE PAIMENT</p>
        <v-icon>mdi-pencil-outline</v-icon>

        <div class="d-flex justify-space-between align-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
            <path
              d="M105.7 215v41.3h57.1a49.7 49.7 0 0 1 -21.1 32.6c-9.5 6.6-21.7 10.3-36 10.3-27.6 0-50.9-18.9-59.3-44.2a65.6 65.6 0 0 1 0-41l0 0c8.4-25.5 31.7-44.4 59.3-44.4a56.4 56.4 0 0 1 40.5 16.1L176.5 155a101.2 101.2 0 0 0 -70.8-27.8 105.6 105.6 0 0 0 -94.4 59.1 107.6 107.6 0 0 0 0 96.2v.2a105.4 105.4 0 0 0 94.4 59c28.5 0 52.6-9.5 70-25.9 20-18.6 31.4-46.2 31.4-78.9A133.8 133.8 0 0 0 205.4 215zm389.4-4c-10.1-9.4-23.9-14.1-41.4-14.1-22.5 0-39.3 8.3-50.5 24.9l20.9 13.3q11.5-17 31.3-17a34.1 34.1 0 0 1 22.8 8.8A28.1 28.1 0 0 1 487.8 248v5.5c-9.1-5.1-20.6-7.8-34.6-7.8-16.4 0-29.7 3.9-39.5 11.8s-14.8 18.3-14.8 31.6a39.7 39.7 0 0 0 13.9 31.3c9.3 8.3 21 12.5 34.8 12.5 16.3 0 29.2-7.3 39-21.9h1v17.7h22.6V250C510.3 233.5 505.3 220.3 495.1 211zM475.9 300.3a37.3 37.3 0 0 1 -26.6 11.2A28.6 28.6 0 0 1 431 305.2a19.4 19.4 0 0 1 -7.8-15.6c0-7 3.2-12.8 9.5-17.4s14.5-7 24.1-7C470 265 480.3 268 487.6 273.9 487.6 284.1 483.7 292.9 475.9 300.3zm-93.7-142A55.7 55.7 0 0 0 341.7 142H279.1V328.7H302.7V253.1h39c16 0 29.5-5.4 40.5-15.9 .9-.9 1.8-1.8 2.7-2.7A54.5 54.5 0 0 0 382.3 158.3zm-16.6 62.2a30.7 30.7 0 0 1 -23.3 9.7H302.7V165h39.6a32 32 0 0 1 22.6 9.2A33.2 33.2 0 0 1 365.7 220.5zM614.3 201 577.8 292.7h-.5L539.9 201H514.2L566 320.6l-29.4 64.3H561L640 201z"
            />
          </svg>

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path
              d="M111.4 295.9c-3.5 19.2-17.4 108.7-21.5 134-.3 1.8-1 2.5-3 2.5H12.3c-7.6 0-13.1-6.6-12.1-13.9L58.8 46.6c1.5-9.6 10.1-16.9 20-16.9 152.3 0 165.1-3.7 204 11.4 60.1 23.3 65.6 79.5 44 140.3-21.5 62.6-72.5 89.5-140.1 90.3-43.4 .7-69.5-7-75.3 24.2zM357.1 152c-1.8-1.3-2.5-1.8-3 1.3-2 11.4-5.1 22.5-8.8 33.6-39.9 113.8-150.5 103.9-204.5 103.9-6.1 0-10.1 3.3-10.9 9.4-22.6 140.4-27.1 169.7-27.1 169.7-1 7.1 3.5 12.9 10.6 12.9h63.5c8.6 0 15.7-6.3 17.4-14.9 .7-5.4-1.1 6.1 14.4-91.3 4.6-22 14.3-19.7 29.3-19.7 71 0 126.4-28.8 142.9-112.3 6.5-34.8 4.6-71.4-23.8-92.6z"
            />
          </svg>

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <path
              d="M64 32C28.7 32 0 60.7 0 96l0 32 576 0 0-32c0-35.3-28.7-64-64-64L64 32zM576 224L0 224 0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-192zM112 352l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm112 16c0-8.8 7.2-16 16-16l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16z"
            />
          </svg>

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
            <path
              d="M116.9 158.5c-7.5 8.9-19.5 15.9-31.5 14.9-1.5-12 4.4-24.8 11.3-32.6 7.5-9.1 20.6-15.6 31.3-16.1 1.2 12.4-3.7 24.7-11.1 33.8m10.9 17.2c-17.4-1-32.3 9.9-40.5 9.9-8.4 0-21-9.4-34.8-9.1-17.9 .3-34.5 10.4-43.6 26.5-18.8 32.3-4.9 80 13.3 106.3 8.9 13 19.5 27.3 33.5 26.8 13.3-.5 18.5-8.6 34.5-8.6 16.1 0 20.8 8.6 34.8 8.4 14.5-.3 23.6-13 32.5-26 10.1-14.8 14.3-29.1 14.5-29.9-.3-.3-28-10.9-28.3-42.9-.3-26.8 21.9-39.5 22.9-40.3-12.5-18.6-32-20.6-38.8-21.1m100.4-36.2v194.9h30.3v-66.6h41.9c38.3 0 65.1-26.3 65.1-64.3s-26.4-64-64.1-64h-73.2zm30.3 25.5h34.9c26.3 0 41.3 14 41.3 38.6s-15 38.8-41.4 38.8h-34.8V165zm162.2 170.9c19 0 36.6-9.6 44.6-24.9h.6v23.4h28v-97c0-28.1-22.5-46.3-57.1-46.3-32.1 0-55.9 18.4-56.8 43.6h27.3c2.3-12 13.4-19.9 28.6-19.9 18.5 0 28.9 8.6 28.9 24.5v10.8l-37.8 2.3c-35.1 2.1-54.1 16.5-54.1 41.5 .1 25.2 19.7 42 47.8 42zm8.2-23.1c-16.1 0-26.4-7.8-26.4-19.6 0-12.3 9.9-19.4 28.8-20.5l33.6-2.1v11c0 18.2-15.5 31.2-36 31.2zm102.5 74.6c29.5 0 43.4-11.3 55.5-45.4L640 193h-30.8l-35.6 115.1h-.6L537.4 193h-31.6L557 334.9l-2.8 8.6c-4.6 14.6-12.1 20.3-25.5 20.3-2.4 0-7-.3-8.9-.5v23.4c1.8 .4 9.3 .7 11.6 .7z"
            />
          </svg>
        </div>
      </div>
      <br />
      <br />

    <div class="panier-box">
        <p>PANIER</p>
        <v-list>
          <v-list-item v-for="item in cartItems" :key="item.id">
            <v-list-item-content>
              <v-list-item-title>{{ item.name }}</v-list-item-title>
              <v-list-item-subtitle>{{ item.prix }} £</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-btn icon @click="removeFromCart(item.id)">
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </div>
      <br> <br>
      <v-btn large block color="primary">Confirmer l'achat</v-btn>
    </div>
    <br> <br>
    <br> <br>

    <v-footer
    class="bg-indigo-lighten-1 text-center d-flex flex-column"
  >
    <div>
      <v-btn
        v-for="icon in icons"
        :key="icon"
        :icon="icon"
        class="mx-4"
        variant="text"
      ></v-btn>
    </div>

    <div class="pt-0">
        Engagement de Google Nest pour la protection de la vie privéeConditions de venteConditions d'utilisationCaractéristiques environnementales des produits.
    </div>

    <v-divider></v-divider>

    <div>
      {{ new Date().getFullYear() }} — <strong>Privat's Labs</strong>
    </div>
  </v-footer>

  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters(["cartItems"]),
  },
  methods: {
    ...mapActions(["removeFromCart"]),
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.wrapper {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0%;
  width: 100%;
  height: 100%;
  padding: 15px;
  background-color: white;
  overflow: scroll;
}

.top {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  padding: 0px;
}

.top a {
  color: #5da44c;
  font-family: "Fugaz One", sans-serif;
  font-weight: 900;
  font-style: normal;
  text-decoration: none;
}

.top .v-title {
  font-weight: bolder;
  font-size: 1.2rem;
}

.center {
  padding: 15px;
}

.center .livraison-box {
  position: relative;
  border: 1px solid rgba(128, 128, 128, 0.392);
  border-radius: 10px;
  height: auto;
  width: 100%;
  padding: 20px 15px 10px 15px;
  color: grey;
}
.livraison-box p {
  position: absolute;
  top: -10px;
  left: 20px;
  z-index: 2;
  background-color: white;
}
.livraison-box .v-icon{
  position: absolute;
  top: -14px;
  left: 270px;
  z-index: 2;
  background-color: white;

}
.center .methode-box {
  position: relative;
  border: 1px solid rgba(128, 128, 128, 0.392);
  border-radius: 10px;
  height: auto;
  padding: 20px 15px 10px 15px;
  color: grey;
}
.methode-box p {
  position: absolute;
  top: -10px;
  left: 20px;
  z-index: 2;
  background-color: white;
}

.methode-box .v-icon{
  position: absolute;
  top: -14px;
  left: 270px;
  z-index: 2;
  background-color: white;

}
.center .panier-box {
  position: relative;
  border: 1px solid rgba(128, 128, 128, 0.392);
  border-radius: 10px;
  height: auto;
  padding: 20px 15px 10px 15px;
  color: grey;
}
.panier-box p {
  position: absolute;
  top: -10px;
  left: 20px;
  z-index: 2;
  background-color: white;
}

.methode-box svg {
  height: 30px;
  color: grey;
}
</style>