<template>
  <div class="menu">
    <v-icon @click="close">mdi-close</v-icon>
    <br />

    <v-btn @click="home" large confortable text class="box pa-5">
      <v-icon x-large color="#757575" class="ml-2 mr-4">mdi-home</v-icon>
      <span>Accueil</span>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
    </v-btn>
    <v-btn @click="telephones" large confortable text class="box pa-5">
      <img
        src="https://lh3.googleusercontent.com/jqf4IU7510s8OYtkVCjBaVjku1DsruhZtn9LGla7PMbmflRr4B9Mls2pskmfMLoUicTTcdTlaAa-wD6BbNbveAbzxpHN6I1h7A"
        width="50"
      />
      <span>Telephones</span>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
    </v-btn>
    <v-btn @click="ecouteurs" large confortable text class="box pa-5">
      <img
        src="https://lh3.googleusercontent.com/gb1-ZHkdOS6IO9LnFMV7liSbgbt0D5Y2c9z626Ds7phkHx0a08xrHHFiDnmY1IlGs4tj9qh0VQmPdu3REi3An2JuoJcn_sCgNfs"
        width="50"
      />
      <span>Ecouteur</span>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
    </v-btn>
    <v-btn @click="montres" large confortable text class="box pa-5">
      <img src="/article/montre.webp" width="50" />
      <span>Montres</span>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
    </v-btn>
    <v-btn @click="tools" large confortable text class="box pa-5">
      <img
        src="https://lh3.googleusercontent.com/gDXehJ9Qf611YfA4gj_GTEmdbxKlKq8uCWqp8spYkFiNQNdE1DKHoq8G3UAAll_1HpZ0DiiLn-jMKy6ea44vy-NGCzKd3U5zUIA"
        width="50"
      />
      <span>Accessoires</span>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
    </v-btn>
    <v-btn @click="tablettes" large confortable text class="box pa-5">
      <img
        src="https://lh3.googleusercontent.com/YN24eOCoidong7T3E1foOb7nn6irWVnKprK7TdXKooClNrLKih6GLszuAurv36z4glpTLsWZOwFYFqRtIS4flbacfA3boUMvGY8=rw-e365-nu-w601"
        width="50"
      />
      <span>Tablettes</span>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
    </v-btn>

    <v-btn @click="pc" large confortable text class="box pa-5">
      <img
        src="https://lh3.googleusercontent.com/YN24eOCoidong7T3E1foOb7nn6irWVnKprK7TdXKooClNrLKih6GLszuAurv36z4glpTLsWZOwFYFqRtIS4flbacfA3boUMvGY8=rw-e365-nu-w601"
        width="50"
      />
      <span>Ordinateurs</span>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
    </v-btn>

    <br />
    <v-divider></v-divider>
    <br />

    <v-btn large confortable text class="box pa-5">
      <v-icon>mdi-bag-checked</v-icon>
      <span>Commandes</span>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
    </v-btn>
    <v-btn large confortable text class="box pa-5">
      <v-icon>mdi-help-circle</v-icon>
      <span>Aide</span>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
    </v-btn>
  </div>
</template>

<style scoped>
.menu {
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 25;
  left: 0%;
  top: 55px;
  width: 0%;
  height: 100vh;
  background-color: white;
  padding: 0px;
  padding-bottom: 720px;
  transition: 0.3s;
  animation: ease-in-out;
}

.menu .box {
  display: none;
  align-items: center;
  margin-bottom: 20px;
}
.box img {
  margin-right: 15px;
}
.mdi-close {
  margin-left: auto;
  display: none;
}

.mdi-bag-checked,
.mdi-help-circle {
  margin-right: 20px;
}
</style>

<script>
import { tablettes } from "../utils/data";

import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {};
  },
  methods: {
    close() {
      document.querySelector(".menu").style.width = "0%";
      document.querySelector(".menu").style.padding = "0px";
      document.querySelector(".mdi-close").style.display = "none";

      const boxes = document.querySelectorAll(".box");
      boxes.forEach((box) => {
        box.style.display = "none";
      });
    },
    home() {
      this.$router.push("/");
      this.close();
      this.closeCart();
    },
    telephones() {
      this.$router.push("/telephones");
      this.close();
      this.closeCart();
    },
    montres() {
      this.$router.push("/montres");
      this.close();
      this.closeCart();
    },
    tablettes() {
      this.$router.push("/tablettes");
      this.close();
      this.closeCart();
    },
    tools() {
      this.$router.push("/accessoires");
      this.close();
      this.closeCart();
    },
    pc() {
      this.$router.push("/pc");
      this.close();
      this.closeCart();
    },
    ecouteurs() {
      this.$router.push("/ecouteurs");
      this.close();
      this.closeCart();
    },
    ...mapActions(["closeCart"]),
  },
};
</script>
