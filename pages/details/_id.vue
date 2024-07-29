<template>
  <div class="wrapper">
    <v-icon @click="retour">mdi-arrow-left</v-icon>
    <br />
    <br />
    <div v-if="product">
      <p class="text-h5 font-weight-bold">{{ product.name }}</p>
      <p class="text-body-1">À partir de {{ product.prix }} £</p>

      <div class="img-box">
        <transition name="fade" @before-enter="beforeEnter" @enter="enter" @leave="leave">
          <v-img
            v-if="img === 'true'"
            :src="product.url"
            height="auto"
            key="img1"
          ></v-img>
        </transition>

        <transition name="fade" @before-enter="beforeEnter" @enter="enter" @leave="leave">
          <v-img
            v-if="img_2 === 'true'"
            :src="product.url2"
            height="auto"
            key="img2"
          ></v-img>
        </transition>

        <transition name="fade" @before-enter="beforeEnter" @enter="enter" @leave="leave">
          <v-img
            v-if="img_3 === 'true'"
            :src="product.url3"
            height="auto"
            key="img3"
          ></v-img>
        </transition>
      </div>

      <div class="img-bottom">
        <div @click="img1">
          <img :src="product.url" />
        </div>
        <div @click="img2">
          <img :src="product.url2" />
        </div>
        <div @click="img3">
          <img :src="product.url3" />
        </div>
      </div>

      <p>{{ product.long_details }}</p>

      <br />
      <br />

      <v-btn large block color="primary" @click="addToCartHandler">Ajouter au panier</v-btn>

      <br />

      <span>
        <v-icon color="success">mdi-shield-lock</v-icon>
        Paiement sécurisé
      </span>
      <br />
      <br />
      <span>
        <v-icon color="success">mdi-truck-delivery-outline</v-icon>
        Livraison rapide
      </span>
      <br />
      <br />
    </div>

    <v-alert v-else type="error" dismissible>Produit non trouvé !</v-alert>
  </div>
</template>

<script>
import { mapActions } from "vuex";
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
      console.log("Produit non trouvé");
      return { product: null };
    }
  },
  data() {
    return {
      product: null,

      img: "true",
      img_2: "false",
      img_3: "false",
    };
  },
  methods: {
    ...mapActions(["addToCart"]),
    retour() {
      window.history.back();
    },
    img1() {
      this.img = "true";
      this.img_2 = "false";
      this.img_3 = "false";
    },
    img2() {
      this.img = "false";
      this.img_2 = "true";
      this.img_3 = "false";
    },
    img3() {
      this.img = "false";
      this.img_2 = "false";
      this.img_3 = "true";
    },
    addToCartHandler() {
      if (this.product) {
        this.addToCart(this.product);
      }
    },
    beforeEnter(el) {
      el.style.opacity = 0;
    },
    enter(el, done) {
      el.offsetHeight; // trigger reflow
      el.style.transition = 'opacity 0.5s ease-in-out';
      el.style.opacity = 1;
      done();
    },
    leave(el, done) {
      el.style.transition = 'opacity 0.5s ease-in-out';
      el.style.opacity = 0;
      done();
    }
  },
};
</script>


<style scoped>
.wrapper {
  padding: 15px;
}

.img-box {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 400px;
  padding: 5px;
  background-color: #f8f9fa;
  border-radius: 30px;
  position: relative;
}

.img-box #img_1 {
  position: absolute;
  z-index: 2;
}
.img-box #img_2 {
  position: absolute;
  z-index: 4;
}
.img-box #img_3 {
  position: absolute;
  z-index: 6;
}

.img-bottom {
  width: 100%;
  margin-top: 10px;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.img-bottom div {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  margin: 5px;
  border: 1px solid rgba(225, 221, 221, 0.616);
  border-radius: 20px;
}

.img-bottom div:hover {
  border: 1px solid #0091ea;
}

.img-bottom div img {
  width: 100px;
}

svg {
  width: 24px;
  height: 24px;
}
</style>

