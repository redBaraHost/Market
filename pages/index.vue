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




  

</div>

</template>

<style scoped>

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






</style>

<script>
import Affiche1Vue from '../components/affiche1Vue.vue';
import Affiche2Vue from '../components/affiche2Vue.vue';
import Affiche3Vue from '../components/affiche3Vue.vue';
import SliderVue from '../components/sliderVue.vue';

export default {
  name: "IndexPage",
};
</script>
