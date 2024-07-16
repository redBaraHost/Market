<template>
  <v-app>
    <div>
      <v-toolbar elevation="0">
        <v-app-bar-nav-icon @click="menuO"></v-app-bar-nav-icon>

        <v-toolbar-title>Market</v-toolbar-title>

        <v-spacer></v-spacer>

        <div class="d-flex left">
          <v-icon>mdi-magnify</v-icon>

          <v-spacer></v-spacer>

          <v-icon>mdi-cart</v-icon>

          <v-spacer></v-spacer>

          <v-icon>mdi-account-circle</v-icon>
        </div>
      </v-toolbar>
    </div>
    <br />
    <br />

    <menu-vue />

    <Nuxt />
  </v-app>
</template>


<script>
import menuVueVue from "../components/menuVue.vue";

export default {
  data() {
    return {};
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
  },
};
</script>



<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

@import url("https://fonts.googleapis.com/css2?family=Rubik+Glitch+Pop&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  font-style: normal;
}

body {
  font-family: "Poppins", sans-serif;
  font-style: normal;
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

.v-toolbar__title {
  color: yellowgreen;
  font-family: "Rubik Glitch Pop", system-ui;
  font-weight: 900;
  font-style: normal;
}

.left {
  width: 100px;
}
</style>


