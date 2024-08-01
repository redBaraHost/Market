<template>
  <v-app>
    <div>
      <v-toolbar class="p-5" elevation="0">
        <v-app-bar-nav-icon @click="menuO"></v-app-bar-nav-icon>

        <v-toolbar-title><nuxt-link to="/">Market</nuxt-link></v-toolbar-title>

        <v-spacer></v-spacer>

        <div class="d-flex left">
          <v-icon @click="search">mdi-magnify</v-icon>

          <v-spacer></v-spacer>

          <v-badge
            v-if="cartItemCount > 0"
            color="info"
            :content="cartItemCount"
          >
            <v-icon @click="toggleCart">mdi-cart</v-icon>
          </v-badge>

          <v-spacer></v-spacer>

          <!-- Avatar avec initiale du prénom utilisateur -->
          <v-avatar
            @click="settings"
            v-if="isAuthenticated"
            size="25"
            color="purple"
            class="white--text font-weight-bold"
            style="display: flex; align-items: center"
          >
          <span style="text-transform: uppercase;">{{ userPrenom[0] || 'U' }}</span>
          </v-avatar>

          <nuxt-link v-else to="/connexion">
            <v-icon size="25">mdi-account-circle</v-icon>
          </nuxt-link>
        </div>
      </v-toolbar>
    </div>
    <br />
    <br />

    <menu-vue />
    <SearchVue />
    <panierVue v-if="isCartOpen" />

    <Nuxt />

    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <footerVue />
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import menuVueVue from "../components/menuVue.vue";
import PanierVue from "../components/panierVue.vue";
import SearchVue from "../components/searchVue.vue";
import footerVue from "../components/footerVue.vue";

export default {
  components: {
    menuVueVue,
    PanierVue,
    SearchVue,
    footerVue,
  },
  data() {
    return {
      userPrenom: '',

    };
  },
  async created() {
      try {
        const userProfile = await this.$store.dispatch('auth/fetchUserProfile');
        this.userPrenom = userProfile.prenom || 'Nom non disponible';
      } catch (error) {
        console.error('Erreur lors de la récupération du profil utilisateur :', error);
      }
    },
  computed: {
    ...mapGetters({
      isCartOpen: "isCartOpen",
      cartItemCount: "cartItemCount",
      isAuthenticated: "auth/isAuthenticated",
      user: "auth/getUser"
    }),
   
  },
  async mounted() {
    await this.loadCart();
  },
  methods: {
    menuO() {
      document.querySelector(".menu").style.width = "95%";
      document.querySelector(".menu").style.padding = "20px";
      document.querySelector(".mdi-close").style.display = "block";

      const boxes = document.querySelectorAll(".box");
      boxes.forEach((box) => {
        box.style.display = "flex";
      });
    },
    ...mapActions({
      toggleCart: "toggleCart",
    }),
    ...mapActions(["loadCart"]),

    search() {
      document.querySelector(".search").style.height = "97%";
      document.querySelector(".mdi-close-box-outline").style.display = "block";
      document.querySelector(".search").style.padding = "0px 20px 20px 20px";
    },
    settings() {
      this.$router.push('/settings');
    }
  },
};
</script>



<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Fugaz+One&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Google Sans", sans-serif;
}

body {
  font-family: "Google Sans", sans-serif !important;
  font-size: 14px;
  line-height: 1.29;
  margin-top: 75px;
}

.v-toolbar {
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  width: 100%;
}

.v-toolbar__title a {
  color: #5da44c;
  font-family: "Fugaz One", sans-serif;
  font-weight: 900;
  font-style: normal;
  text-decoration: none;
}

.left {
  width: 100px;
}
</style>


