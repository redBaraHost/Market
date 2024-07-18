<template>
    <div class="wrapper">
      <br> 
  
      <v-btn @click="retour" class="ml-1" plain>
        <v-icon>mdi-arrow-u-left-top</v-icon>
      </v-btn>
      
      <br><br><br>
  
      <v-card class="mx-auto" max-width="344" elevation="0">
        <h1 class="text-h4 text-center">{{ etat === 'co' ? 'Connexion' : 'Inscription' }}</h1>
  
        <v-container>
          <v-form ref="form">
            <v-text-field
              v-model="first"
              color="#5da44c"
              label="Nom"
              variant="underlined"
              v-if="etat !== 'co'"
              required
            ></v-text-field>
  
            <v-text-field
              v-model="last"
              color="#5da44c"
              label="Prénom"
              variant="underlined"
              v-if="etat !== 'co'"
            ></v-text-field>
  
            <v-text-field
              v-model="email"
              color="#5da44c"
              label="Email"
              type="email"
              variant="underlined"
              clearable
            ></v-text-field>
  
            <v-text-field
              v-model="password"
              color="#5da44c"
              label="Mot de passe"
              type="password"
              variant="underlined"
            ></v-text-field>
  
            <v-checkbox
              v-model="terms"
              color="#5da44c"
              label="J'accepte les conditions"
              v-if="etat !== 'co'"
            ></v-checkbox>
          </v-form>
        </v-container>
  
        <v-divider></v-divider>
  
        <v-card-actions>
          <v-spacer></v-spacer>
  
          <v-btn tonal comfortable block large color="#5da44c" v-if="etat !== 'co'">
            <span style="color: white;">S'inscrire</span> 
            <v-icon icon="mdi-chevron-right" end></v-icon>
          </v-btn>
          
          <v-btn style="color: white;" tonal comfortable block large color="#5da44c" v-else>
            Se connecter
            <v-icon icon="mdi-chevron-right" end></v-icon>
          </v-btn>
        </v-card-actions>
        
        <br><br>
  
        <a
          class="text-blue text-center text-decoration-none ml-2"
          href="#"
          @click.prevent="changeEtat"
        >
          {{ etat === 'co' ? "S'inscrire" : "J'ai déjà un compte. Me connecter" }}
          <v-icon>mdi-chevron-right</v-icon>
        </a>
      </v-card>
    </div>
  </template>


<script>
export default {
  data: () => ({
    etat: "",

    first: null,
    last: null,
    email: null,
    password: null,
    terms: false,
  }),
  methods: {
    changeEtat() {
      if (this.etat == "") {
        this.etat = "co";
      } else {
        this.etat = "";
      }
    },
    retour() {
      window.history.back();
    },
  },
};
</script>