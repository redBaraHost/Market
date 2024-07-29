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
        <v-btn @click="handleAddToCart" color="primary">Ajouter au Panier</v-btn>
      </v-card-actions>
    </v-card>
    <v-alert v-if="errorMessage" type="error" dismissible>
      {{ errorMessage }}
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
      
      if (!product) {
        return { errorMessage: 'Produit non trouvé' };
      }
      return { product };
    } catch (error) {
      return { errorMessage: 'Une erreur est survenue' };
    }
  },
  data() {
    return {
      product: null // Initialise product ici pour éviter les erreurs de réactivité
    };
  },
  methods: {
    ...mapActions(['addToCart', 'setError']),
    async handleAddToCart() {
      if (this.product) {
        try {
          await this.addToCart(this.product);
          this.$toast.success('Produit ajouté au panier !');
        } catch (error) {
          this.$toast.error('Erreur lors de l\'ajout au panier.');
          this.setError('Erreur lors de l\'ajout au panier.'); // Stockage de l'erreur dans le store
        }
      }
    }
  },
  computed: {
  }
};
</script>

<style scoped>
/* Styles personnalisés ici */
</style>
