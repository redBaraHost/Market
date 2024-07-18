<template>
  <div class="wrapper">

  <!-- <v-container class="top">
    <br> <br>
    <p>Promos d'ete</p>
    
    <h2>L'ete arrive, nos offres aussi !</h2>
    <br />

    <p>
      Faites encore plus d'economies sur les appareils Pixel avec nos nouvelles
      offres pour ete.
    </p>

    <br />

    <v-btn outlined> Voir les offres </v-btn>

  </v-container> -->

  <!-- <br> <br> -->

   <!-- affiche 1 -->

   <Affiche1Vue/>


   <!-- affiche 1 -->

  <!-- affiche 2 -->

  <Affiche2Vue />

  <!-- affiche 2 -->

  <!-- affiche 3 -->

  <Affiche3Vue />


  <!-- affiche 3 -->


  <!-- slider recommander  -->

  <br> <br>
  <h2>Populaires chez nous.</h2>

  <SliderVue />

  <!-- slider recommander  -->

  <div class="notif">

    <p>Le savais-tu ?</p>
    <h4>Vous pouvez refuser l'article a la livraison si elle n'est pas comme vous le pensiez.</h4>

  </div>

  <!-- slider telepone  -->

  <br> <br>
  <h2>Nos telephones.</h2>

  <SliderTelVue />

  <!-- slider telepone  -->

  <br> <br>

  <!-- affiche 4 -->

   <Affiche4Vue />
  <!-- affiche 4 -->

  <br> <br> <br>

  <h2>Nos ordinateurs.</h2>


  <SliderTelVue />

  <br> <br> <br>

  <h2>Nos montres.</h2>


  <SliderTelVue />

  <br> <br> <br>

  <!-- affiche 5 -->
   <Affiche5Vue></Affiche5Vue>
  <!-- affiche 5 -->







  

</div>

</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Edu+AU+VIC+WA+NT+Hand:wght@400..700&display=swap');

.top{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.top p,h2{
  text-align: center;
  font-weight: 500;

}
.top p{
  font-weight: 400;
}

.notif{
  margin: 50px 0px 50px 0px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #EEE9E3;
  height: 200px;
}
.notif p,h4{
  text-align: center;
  font-family: "Edu AU VIC WA NT Hand", cursive;

}







</style>

<script>
import Affiche1Vue from '../components/affiche1Vue.vue';
import Affiche2Vue from '../components/affiche2Vue.vue';
import Affiche3Vue from '../components/affiche3Vue.vue';
import SliderVue from '../components/sliderVue.vue';
import SliderTelVue from '../components/sliderTelVue.vue';
import Affiche4Vue from '../components/affiche4Vue.vue';
import Affiche5Vue from '../components/affiche5Vue.vue';

export default {
  name: "IndexPage",
};
</script>
