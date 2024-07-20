<template>
  <div class="panier">
    <v-app-bar class="elevation-0">
      <nuxt-link to="/">Market</nuxt-link>
      <v-spacer></v-spacer>
      <span class="text-body-1 mr-3">Panier ({{ cartItemCount }} article)</span>
      <v-spacer></v-spacer>
      <v-icon @click="closeCart">mdi-close</v-icon>
    </v-app-bar>

    <div class="center">
      <div v-if="cartItems.length === 0" class="panier-vide">
        <img src="/cart.png" width="150" />
        <p class="text-h4 text-center">Votre panier est vide</p>
        <v-btn outlined block color="teal" @click="menuO">Voir boutique</v-btn>
      </div>
      <div
        style="
          width: 100%;
          padding: 10px;
          margin-top: 20px;
          margin-bottom: 150px;
          overflow: auto;
        "
        v-else
      >
        <div class="card elevation-1" v-for="item in cartItems" :key="item.id">
          <img :src="item.url" width="90" />
          <div class="infos">
            <span class="text-body-1">{{ item.name }}</span> <br />
            <span class="text-body-2">{{ item.details }}</span> <br />
            <span style="text-decoration: line-through" class="text-body-2"
              >{{ item.last_prix }} £</span
            >
            <br />
            <span class="text-body-1 font-weight-bold">{{ item.prix }} £</span>
          </div>
          <v-spacer></v-spacer>

          <div
            style="
              min-height: 100%;
              width: 40px;
              display: flex;
              flex-direction: column;
            "
          >
            <v-icon @click="removeFromCart(item.id)">mdi-delete</v-icon> <br />

            <v-spacer></v-spacer>
            <v-spacer></v-spacer>

            <select @change="changeQuantity(item)" v-model="item.quantity">
              <option v-for="n in 10" :value="n" :key="n">{{ n }}</option>
            </select>
          </div>
        </div>

        <div class="bottom elevation-3">
          <div style="display: flex">
            <p class="font-weight-bold">Total estimé</p>
            <v-spacer></v-spacer>
            <p class="total">{{ calculateTotal() }} £</p>
          </div>
          <v-btn large block color="primary">Procéder au paiement</v-btn>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters(["cartItems", "cartItemCount"]),
  },
  methods: {
    ...mapActions(["closeCart", "removeFromCart", "updateCartItem"]),

    calculateTotal() {
      return this.cartItems.reduce(
        (total, item) => total + item.prix * item.quantity,
        0
      );
    },
    changeQuantity(item) {
      // Trouver l'index de l'article dans cartItems
      const index = this.cartItems.findIndex(cartItem => cartItem.id === item.id);

      // Mettre à jour la quantité de l'article dans cartItems
      this.cartItems[index].quantity = item.quantity;

      // Mettre à jour localStorage avec la nouvelle valeur de cartItems
      localStorage.setItem('cart', JSON.stringify(this.cartItems));
    },
    menuO() {
      document.querySelector('.menu').style.width = '95%';
      document.querySelector('.menu').style.padding = '20px';
      document.querySelector('.mdi-close').style.display = 'block';

      const boxes = document.querySelectorAll('.box');
      boxes.forEach((box) => {
        box.style.display = 'flex';
      });
    },
  

   


  },
};
</script>
  

<style scoped>
.v-toolbar {
  background-color: white !important;
}
.panier {
  position: fixed;
  z-index: 20;
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

.card {
  display: flex;
  width: 100% !important;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  background-color: white;
}

.bottom {
  background-color: white;
  padding: 20px;
  position: absolute;
  z-index: 30;
  bottom: 0;
  left: 0;
  width: 100%;
}

select {
  border: 1px solid rgba(128, 128, 128, 0.355);
  border-radius: 5px;
}

select:focus {
  outline: none;
}

select option {
  text-align: center;
}
</style>


