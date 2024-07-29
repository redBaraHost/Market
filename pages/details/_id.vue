<template>
  <div class="wrapper">
    <v-icon  @click="retour">mdi-arrow-left</v-icon>
    <br> <br>
    <div v-if="product">
      <p class="text-h5 font-weight-bold">{{ product.name }}</p>
      <p class="text-body-1">A parti de {{ product.prix }} £</p> 

      <div class="img-box">
        <v-img :src="product.url" height="auto"></v-img>
      </div>

      <div class="img-bottom">

        <div>
          <img src="https://lh3.googleusercontent.com/nmEhRFxfeeA7QnMo3QHspIQU5DN0f8eSdUD6uyFtDVWB7cW59LyAg8HdfhXVYDP2sgDZkXefidnekyjh_fmOh5LXxanqfhf1Kns=s1400-w1400-e365-rw-v1">
        </div>
        <div>
          <img src="https://lh3.googleusercontent.com/nmEhRFxfeeA7QnMo3QHspIQU5DN0f8eSdUD6uyFtDVWB7cW59LyAg8HdfhXVYDP2sgDZkXefidnekyjh_fmOh5LXxanqfhf1Kns=s1400-w1400-e365-rw-v1">
        </div>
        <div>
          <img src="https://lh3.googleusercontent.com/nmEhRFxfeeA7QnMo3QHspIQU5DN0f8eSdUD6uyFtDVWB7cW59LyAg8HdfhXVYDP2sgDZkXefidnekyjh_fmOh5LXxanqfhf1Kns=s1400-w1400-e365-rw-v1">
        </div>

      </div>

      <p>{{ product.long_details }}</p>

      <br> <br>


      <v-btn large block color="primary">Ajouter au panier</v-btn>

      <br>

      <span>
        <v-icon color="success">mdi-shield-lock</v-icon>
        paiment securiser
      </span>
      <br>
      <br>
      <span>
        <v-icon color="success">mdi-truck-delivery-outline</v-icon>
        Livraison rapide
      </span>
      <br>
      <br>
      

    </div>

    <v-alert v-else type="error" dismissible> non trouver ! </v-alert>
  </div>
</template>

<style scoped>
.wrapper{
  padding: 15px;
}

.img-box{
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto;
  padding: 5px;
  background-color: #f8f9fa;
  border-radius: 30px;
}

.img-bottom{
  width: 100%;
  margin-top: 10px;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.img-bottom div{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  margin: 5px;
  border: 1px solid rgba(225, 221, 221, 0.616);
  border-radius: 20px;
}

.img-bottom div img{
  width: 100px;
}

svg{
  width: 24px;
  height: 24px;
}

</style>

<script>
import { mapActions, mapGetters } from "vuex";
import {
  recommander,
  telephones,
  pc,
  tablettes,
  accessoires,
  montres,
  ecouteurs,
} from "~/utils/data";

export default {
  async asyncData({ params }) {
    try {
      const productId = params.id;
      // Recherche dans tous les tableaux de produits
      const allProducts = [
        ...recommander,
        ...telephones,
        ...pc,
        ...tablettes,
        ...accessoires,
        ...montres,
        ...ecouteurs,
      ];
      const product = allProducts.find((p) => p.id === productId);

      return { product };
    } catch (error) {
      return console.log("produit non trouver");
    }
  },
  data() {
    return {
      product: null, // Assurez-vous que `product` est bien défini ici
    };
  },
  methods: {
    ...mapActions(["addToCart"]),
    retour() {
      window.history.back();
    },
  },
};
</script>

