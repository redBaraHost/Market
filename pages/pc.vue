<template>
  <div class="wrapper">
    <v-icon @click="retour">mdi-arrow-left</v-icon>

    <br />
    <br />
    <br />

    <h1 class="text-h5 text-center font-weight-bold">
      Google pexels. Les pc concu 100% par google.
    </h1>

    <br />
    <br />

    <v-img cover src="/affiche/pc_white.jpg"></v-img>

    <br />
    <br />

    <p class="text-h4">Nos ordinateurs</p>

    <br />
    <br />

    <v-card
      class="mx-auto pa-5 rounded-xl"
      elevation="0"
      v-for="item in items"
      :key="item.id"
    >
      <v-img
        src="https://lh3.googleusercontent.com/9G5VkratxCGLyYy5NLfL2-AMs-BymXE4erYP3_N7LsGGWf439j2Htj1Vf80Dr94nn-Rf4c9k9xRuAMpd0RbYGvH0zgSbU4vqkso=rw-e365-nu-w601"
      ></v-img>

      <v-card-title class="font-weight-bold">{{ item.name }}</v-card-title>

      <v-card-subtitle>{{ item.details }}</v-card-subtitle>
      <span class="body-text-2 text-decoration-line-through"
        >{{ item.last_prix }} £</span
      >
      <span class="body-text-1 font-weight-bold">{{ item.prix }} £</span>

      <br />
      <br />
      <v-card-actions>
        <v-btn color="primary" @click="addToCart(item)">Ajouter</v-btn>
      </v-card-actions>
    </v-card>

    <br />
    <br />
    <br />

    <v-card
      elevation="0"
      style="
        background-color: whitesmoke;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 20px;
        border-radius: 30px;
        height: 200px;
      "
    >
      <img
        src="https://storage.googleapis.com/mannequin/retail-qualifiers/free-shipping.svg"
        alt=""
      />
      <p class="text-body-1 font-weigth-bold text-center">
        Livraion gratuite .
      </p>
      <br />
      <v-btn text color="info">En savoir plus</v-btn>
    </v-card>
  </div>
</template>
  
  <script>
import { pc } from "../utils/data";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      items: pc,
    };
  },
  methods: {
    ...mapActions(["addToCart"]),
    addItemToCart(item) {
      this.addToCart(item);
    },
    retour() {
      window.history.back();
    },
  },
};
</script>
  
  
  <style scoped>
body {
  font-family: Google Sans, Roboto, Arial, sans-serif !important;
}
.wrapper {
  padding: 15px;
}

.v-card {
  background-color: rgba(0, 170, 255, 0.055);
  margin-bottom: 20px;
}
</style>