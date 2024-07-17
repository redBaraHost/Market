<template>
    <div class="wrapper">

        <br> <br> <br>

  <v-card
    class="mx-auto"
    max-width="344"
    elevation="0"
  >
  <h1 class="text-h4 text-center" v-if="etat=='co'">Connexion</h1>
  <h1 class="text-h4 text-center" v-else>Inscription</h1>
    <v-container>
      <v-text-field
        v-model="first"
        color="primary"
        label="Nom"
        variant="underlined"
        v-if="etat==''"
      ></v-text-field>

      <v-text-field
        v-model="last"
        color="primary"
        label="Prenom"
        variant="underlined"
        v-if="etat==''"
      ></v-text-field>

      <v-text-field
        v-model="email"
        color="primary"
        label="Email"
        variant="underlined"
        clearable
      ></v-text-field>

      <v-text-field
        v-model="password"
        color="primary"
        label="Mot de passe"
        variant="underlined"
      ></v-text-field>

      <v-checkbox
        v-model="terms"
        color="secondary"
        label="I agree to site terms and conditions"
        v-if="etat==''"
      ></v-checkbox>
    </v-container>

    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn tonal comfortable block large color="success" v-if="etat==''">
        S'inscrire

        <v-icon icon="mdi-chevron-right" end></v-icon>
      </v-btn>
      <v-btn tonal comfortable block large color="success" v-else>
        Se connecter

        <v-icon icon="mdi-chevron-right" end></v-icon>
      </v-btn>
      <br> <br>
    </v-card-actions>
    <br> <br>
    <a
        class="text-blue text-center text-decoration-none"
        href="#"
        v-if="etat==''"
        @click="changeEtat"
      >
       J'ai deja un compte Me connecter <v-icon>mdi-chevron-right</v-icon>
      </a>
    <a
        class="text-blue text-center text-decoration-none"
        href="#"
        v-else
        @click="changeEtat"
      >
       S'inscrire <v-icon>mdi-chevron-right</v-icon>
      </a>
  </v-card>

    </div>
</template>


<script>
  export default {
    data: () => ({

      etat: '',
      
      first: null,
      last: null,
      email: null,
      password: null,
      terms: false,
    }),
    methods:{
        changeEtat(){
            if(this.etat==''){
                this.etat='co'
            }else{
                this.etat=''
            }
        }
    }
  }
</script>