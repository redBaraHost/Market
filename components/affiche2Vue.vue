<template>
    <div class="affiche-2">
    <img src="/affiche/montre-black.jpg" width="100%">

    <div>

      <h2>Toutes les nouveautes</h2>
  
      <p>Va de l avant et boost ta routine avec Charge 6.</p> <br>
  
      <nuxt-link to="/telephones">Decouvrir <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></nuxt-link>

    </div>
    </div>
</template>

<style scoped>
.affiche-2{
  position: relative;
  background-color: #3F5644;
}

.affiche-2 div{
  color: white !important;
  position: absolute;
  bottom: 80px;
  padding: 20px;
}

.affiche-2 a{
  text-align: start !important;
  text-decoration: none;
  color: white;
  font-size: 1.5rem;

}
.affiche-2 p{
  color: white;
  font-weight: 200;

}
</style>