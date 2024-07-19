<template>
  <v-app>
    <div>
      <v-toolbar elevation="0">
        <v-app-bar-nav-icon @click="menuO"></v-app-bar-nav-icon>

        <v-toolbar-title><nuxt-link to="/">Market</nuxt-link></v-toolbar-title>

        <v-spacer></v-spacer>

        <div class="d-flex left">
          <v-icon @click="search">mdi-magnify</v-icon>

          <v-spacer></v-spacer>

          <v-icon @click="toggleCart">mdi-cart</v-icon>

          <v-spacer></v-spacer>

          <v-avatar color="primary" size="30" v-if="state === 'true'">
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
import { mapActions, mapGetters } from 'vuex';

import menuVueVue from '../components/menuVue.vue';
import PanierVue from '../components/panierVue.vue';
import SearchVue from '../components/searchVue.vue';
import footerVue from '../components/footerVue.vue';

export default {
  components: {
    menuVueVue,
    PanierVue,
    SearchVue
  },
  data() {
    return {
      state: 'false',
    };
  },
  computed: {
    ...mapGetters({
      isCartOpen: 'isCartOpen',
    }),
  },
  async mounted() {
    await this.loadCart();
  },
  methods: {
    menuO() {
      document.querySelector('.menu').style.width = '95%';
      document.querySelector('.menu').style.padding = '20px';
      document.querySelector('.mdi-close').style.display = 'block';

      const boxes = document.querySelectorAll('.box');
      boxes.forEach((box) => {
        box.style.display = 'flex';
      });
    },
    ...mapActions({
      toggleCart: 'toggleCart',
    }),
    ...mapActions(['loadCart']),

    search() {
      document.querySelector('.search').style.height = '97%';
      document.querySelector('.mdi-close-box-outline').style.display = 'block';
      document.querySelector('.search').style.padding = '20px';
    },
  },
};
</script>


<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");

@import url("https://fonts.googleapis.com/css2?family=Fugaz+One&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
}

body {
  font-family: "Roboto", sans-serif;
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


