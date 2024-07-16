<template>
  <div class="menu">

    <v-icon @click="close">mdi-close</v-icon>
    <br>

    <v-list class="box">
      <img
        src="https://lh3.googleusercontent.com/jqf4IU7510s8OYtkVCjBaVjku1DsruhZtn9LGla7PMbmflRr4B9Mls2pskmfMLoUicTTcdTlaAa-wD6BbNbveAbzxpHN6I1h7A"
        width="50"
      />
      <span>Telephones</span>
    </v-list>
    <div class="box">
      <img
        src="https://lh3.googleusercontent.com/gb1-ZHkdOS6IO9LnFMV7liSbgbt0D5Y2c9z626Ds7phkHx0a08xrHHFiDnmY1IlGs4tj9qh0VQmPdu3REi3An2JuoJcn_sCgNfs"
        width="50"
      />
      <span>Ecouteur</span>
    </div>
    <div class="box">
      <img
        src="/article/montre.webp"
        width="50"
      />
      <span>Montres</span>
    </div>
    <div class="box">
      <img
        src="https://lh3.googleusercontent.com/gDXehJ9Qf611YfA4gj_GTEmdbxKlKq8uCWqp8spYkFiNQNdE1DKHoq8G3UAAll_1HpZ0DiiLn-jMKy6ea44vy-NGCzKd3U5zUIA"
        width="50"

      />
      <span>Accessoires</span>
    </div>
    <div class="box">
      <img
        src="https://lh3.googleusercontent.com/YN24eOCoidong7T3E1foOb7nn6irWVnKprK7TdXKooClNrLKih6GLszuAurv36z4glpTLsWZOwFYFqRtIS4flbacfA3boUMvGY8=rw-e365-nu-w601"
        width="50"
      />
      <span>Tablettes</span>
    </div>

    <br />
    <v-spacer></v-spacer>
    <v-divider></v-divider>
    <br />

    <div class="box">
        <v-icon>mdi-bag-checked</v-icon>
        <span>Commandes</span>
    </div>
    <div class="box">
        <v-icon>mdi-help-circle</v-icon>
        <span>Aide</span>
    </div>

 
    <br> <br> <br>
</div>
</template>

<style scoped>

.menu {
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 20;
  left: 0%;
  top: 55px;
  width: 0%;
  height: 100%;
  background-color: white;
  padding: 0px;
  margin-bottom: 220px;
  transition: 0.3s;
  animation: ease-in-out;
}

.menu .box{
    display: none;
    align-items: center;
    margin-bottom: 20px;
}
.box img{
    margin-right: 15px;
}
.mdi-close{
    margin-left: auto;
    display: none;
}

.mdi-bag-checked, .mdi-help-circle{
    margin-right: 20px;
}

</style>

<script>

export default ({
    data() {
        return{

        }
        
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
  },
})
</script>
