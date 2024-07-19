<template>
  <div class="panier">
    <v-app-bar class="elevation-0">
      <nuxt-link to="/">Market</nuxt-link>

      <v-spacer></v-spacer>

      <span class="text-body-1 mr-3"
        >Panier ({{ cartItemCount }} article)
      </span>

      <v-spacer></v-spacer>
      <v-icon @click="closeCart">mdi-close</v-icon>
    </v-app-bar>

    <div class="center">
      <div v-if="cartItems.length === 0" class="panier-vide">
        <img src="/cart.png" width="150" />
        <br />
        <br />
        <p class="text-h4 text-center">Votre panier est vide</p>
        <br />

        <v-btn outlined block color="success">Voir boutique</v-btn>

        <br />
      </div>
      <div style="width: 100%; padding: 20px; margin-top: 20px; margin-bottom: 150px; overflow: auto;" v-else>

        <div class="card elavation-1" v-for="item in cartItems" :key="item.id">
            <img :src="item.url" width="90" />

            <div class="infos">
                <span class="text-body-1">{{ item.name }}</span> <br>
                <span class="text-body-2">{{ item.details }}</span> <br>
                <span style="text-decoration: line-through;" class="text-body-2">{{ item.last_prix }} £</span> <br>

                <span class="text-body-1 font-weight-bold">{{ item.prix }} £ x {{ item.quantity }}</span>
            </div>

            <v-spacer></v-spacer>

            <v-icon @click="removeFromCart(item.id)">mdi-delete</v-icon>

        

        </div>

        <div class="bottom elevation-3">
            <div style="display: flex;">

                <p class="font-weight-bold">Total estimé
                </p>
                <v-spacer></v-spacer>
                <p class="total">779 £</p>
            </div>

            <v-btn block color="primary">Proceder au paiment</v-btn>

        </div>


       
      </div>
    </div>
  </div>
</template>
  
  <script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      state: "",
    };
  },
  computed: {
    ...mapGetters(["cartItems", "cartItemCount"]),
  },
  methods: {
    ...mapActions(["closeCart", "removeFromCart"]),
  },
};
</script>
  

<style scoped>
.v-toolbar {
  background-color: white !important;
}
.panier {
  position: fixed;
  z-index: 25;
  height: 100vh;
  width: 100%;
  background-color: white;
}

.panier .center {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: #f8f8f8;
}

.panier a {
  color: #5da44c;
  font-family: "Fugaz One", sans-serif;
  font-weight: 900;
  font-style: normal;
  text-decoration: none;
}

.panier .panier-vide {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  height: 300px;
  padding: 30px;
}

.card{
    display: flex;
    width: 100% !important;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
    background-color: white;

}

.bottom{
    background-color: white;
    padding: 20px;
    position: absolute;
    z-index: 30;
    bottom: 0;
    left: 0;
    width: 100%;
}

</style>


