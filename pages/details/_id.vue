<template>
  <v-container>
    <v-card v-if="product">
      <v-img :src="product.url" height="300px"></v-img>
      <v-card-title>{{ product.name }}</v-card-title>
      <v-card-subtitle>{{ product.details }}</v-card-subtitle>
      <v-card-text>
        <v-row>
          <v-col>
            <v-chip>Prix : {{ product.prix }} €</v-chip>
          </v-col>
          <v-col>
            <v-chip>Ancien Prix : {{ product.last_prix }} €</v-chip>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary">Ajouter au Panier</v-btn>
      </v-card-actions>
    </v-card>
    <v-alert v-else type="error" dismissible>
      non trouver !
    </v-alert>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { recommander, telephones, pc, tablettes, accessoires, montres, ecouteurs } from '~/utils/data';

export default {
  async asyncData({ params }) {
    try {
      const productId = params.id;
      // Recherche dans tous les tableaux de produits
      const allProducts = [...recommander, ...telephones, ...pc, ...tablettes, ...accessoires, ...montres, ...ecouteurs];
      const product = allProducts.find(p => p.id === productId);
      
     
      return { product };
    } catch (error) {
      return console.log('produit non trouver');
    }
  },
  data() {
    return {
      product: null, // Assurez-vous que `product` est bien défini ici
    };
  },
  methods: {
    ...mapActions(['addToCart']),
    
  },
 
};
</script>

<style scoped>
/* Styles personnalisés ici */
</style>
