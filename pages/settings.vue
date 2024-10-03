<template>
    <div class="wrapper">
      <br />
      <v-btn @click="handleSignOut" outlined color="warning">Se déconnecter</v-btn>
      <br>
      <br>
  
      <h1>Paramètres</h1>
      <br />
      <br />
  
      <h4>Compte</h4>
      <v-card elevation="2" class="card">
          <v-avatar
              size="40"
              color="purple"
              class="white--text font-weight-bold"
              >
              <span class="text-center" style="text-transform: uppercase;">{{ userPrenom[0] || 'U' }}</span>
              </v-avatar
            >
  
            <div class="center">
              <span class="text-body-1">{{ userPrenom }} {{ userName }}</span> <br>
              <span class="text-body-2">{{ userEmail }}</span>
            </div>
  
            <v-spacer></v-spacer>
  
            <v-icon>mdi-pencil</v-icon>
          </v-card>
  
          <br>
          <br>
          <h4>Mode de paiement</h4>
  
          <v-card elevation="2">
              <v-card-title>Paiements</v-card-title>
              <v-card-subtitle>Vous pouvez ajouter, supprimer ou modifier des modes de paiement via Google Payments. Vos modifications seront appliquées à votre compte Google Store.</v-card-subtitle>
              <v-divider></v-divider>
              <v-card-title>Modifier mode de paiement <v-spacer></v-spacer> <v-icon>mdi-pencil</v-icon></v-card-title>
          </v-card>
  
          <br>
          <br>
    </div>
  </template>
  
  <script>
  import { mapGetters, mapActions } from "vuex";
  
  export default {
    middleware: 'auth',
    data() {
      return {
        userName: '',
        userPrenom: '',
        userEmail: ''
      };
    },
    // async created() {
    //   try {
    //     const userProfile = await this.$store.dispatch('auth/fetchUserProfile');
    //     this.userName = userProfile.nom || 'Nom non disponible';
    //     this.userPrenom = userProfile.prenom || 'Nom non disponible';
    //     this.userEmail = userProfile.email || 'Email non disponible';
    //   } catch (error) {
    //     console.error('Erreur lors de la récupération du profil utilisateur :', error);
    //   }
    // },
    methods: {
      // ...mapActions({
      //   signOut: 'auth/signOut', 
      // }),
      // async handleSignOut() {
      //   try {
      //     await this.signOut(); // Appelle l'action signOut
      //     this.$router.push('/connexion'); // Redirige vers la page de login après déconnexion
      //   } catch (error) {
      //     console.error("Erreur lors de la déconnexion : ", error);
      //     // Tu peux ajouter ici une gestion des erreurs si nécessaire
      //   }
      // }
    }
  };
  </script>
  

<style scoped>
.wrapper {
  padding: 15px;
}

.card{
    display: flex;
    align-items: center;
    width: 100%;
    height: 80px;
    padding: 0px 15px ;
}

.card .center{
    height: 50px;
    margin-left: 10px;
}
</style>

