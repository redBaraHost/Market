<template>
  <div class="wrapper">
    <div class="top">
      <v-icon @click="retour">mdi-arrow-left</v-icon>
<v-spacer></v-spacer>
      <nuxt-link to="/">LafyShop</nuxt-link>

      <v-spacer></v-spacer>

      <!-- <v-avatar
        @click="settings"
        v-if="isAuthenticated"
        size="25"
        color="purple"
        class="white--text font-weight-bold"
        style="display: flex; align-items: center"
      >
        <span style="text-transform: uppercase">
          {{ (userPrenom && userPrenom[0]) || "U" }}
        </span>
      </v-avatar> -->

      <!-- <nuxt-link v-if="!isAuthenticated" to="/connexion">
        <v-icon normal>mdi-account-circle</v-icon>
      </nuxt-link> -->
    </div>
    <br />
    <br />
    <br />

    <div class="center">
      <div class="livraison-box">
        <p>LIVRAISON</p>
        <v-icon>mdi-pencil-outline</v-icon>

        <span class="body-1 font-weight-bold">{{userPrenom}} {{ userNom }}</span> <br />
        <span class="text-body-2">{{userAddress}}</span> <br />
        <span class="text-body-2">{{userPhone}}</span> <br />
        <span class="text-body-2">{{userEmail}}</span>
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
          <span class="text-body-1 font-weight-bold">
            Paiemant a la livraison - mains a mains
          </span>
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
      <br />
      <br />
      <v-btn large block color="primary">Confirmer l'achat</v-btn>
    </div>
    <br />
    <br />
    <br />
    <br />

    <v-footer class="bg-indigo-lighten-1 text-center d-flex flex-column">
      <div class="pt-0">
        Engagement de LafyShop inc pour la protection de la vie privée Conditions
        de vente Conditions d'utilisation Caractéristiques environnementales des
        produits.
      </div>

      <br> <br>

      <v-divider></v-divider>

      <p>{{ new Date().getFullYear() }} — <strong>Privat's Labs</strong></p>
    </v-footer>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      userNom: "", 
      userPrenom: "", 
      userAddress: "", 
      userPhone: "", 
      userEmail: "", 
    };
  },
  computed: {
    ...mapGetters({
      cartItems: "cartItems",
      // isAuthenticated: "auth/isAuthenticated",
    }),
  },
  // async created() {
  //   try {
  //     const userProfile = await this.$store.dispatch("auth/fetchUserProfile");
  //     this.userPrenom = userProfile.prenom || "Nom non disponible";
  //     this.userNom = userProfile.nom || "Nom non disponible";
  //     this.userPhone = userProfile.phone || "Nom non disponible";
  //     this.userEmail = userProfile.email || "Nom non disponible";
  //     this.userAddress = userProfile.address || "Nom non disponible";
  //   } catch (error) {
  //     console.error(
  //       "Erreur lors de la récupération du profil utilisateur :",
  //       error
  //     );
  //   }
  // },
  methods: {
    ...mapActions(["removeFromCart"]),

    settings() {
      this.$router.push("/settings");
    },
    retour() {
      window.history.back();
    },
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
  padding: 15px;
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  width: 100%;
  background-color: white;

}

.top a {
  color: #5da44c;
  font-family: "Rubik", sans-serif;
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
.livraison-box .v-icon {
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

.methode-box .v-icon {
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