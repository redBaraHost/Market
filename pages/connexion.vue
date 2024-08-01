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
        <v-form ref="form" v-model="valid">
         
          <v-text-field
           v-if="etat !== 'co'"
            v-model="nom"
            color="#10a37f"
            label="Nom"
            type="text"
            variant="underlined"
            clearable
            :rules="[v => !!v || 'Nom est requis']"
            required
          ></v-text-field>

          <v-text-field
           v-if="etat !== 'co'"
            v-model="prenom"
            color="#10a37f"
            label="Prenom"
            type="text"
            variant="underlined"
            clearable
            :rules="[v => !!v || 'Prenom est requis']"
            required
          ></v-text-field>

          <v-text-field
            v-model="email"
            color="#10a37f"
            label="Email"
            type="email"
            variant="underlined"
            clearable
            :rules="[v => !!v || 'Email est requis']"
            required
          ></v-text-field>

          <v-text-field
            v-model="password"
            color="#10a37f"
            label="Mot de passe"
            type="password"
            variant="underlined"
            :rules="[v => !!v || 'Mot de passe est requis']"
            required
          ></v-text-field>

          <v-text-field
            v-model="address"
            color="#10a37f"
            label="Adresse"
            variant="underlined"
            clearable
            :rules="[v => !!v || 'Adresse est requise']"
            v-if="etat !== 'co'"
            required
          ></v-text-field>

          <v-text-field
            v-model="phone"
            color="#10a37f"
            label="Numéro de téléphone"
            variant="underlined"
            type="tel"
            clearable
            :rules="[v => !!v || 'Numéro de téléphone est requis']"
            v-if="etat !== 'co'"
            required
          ></v-text-field>

          <v-checkbox
            v-model="terms"
            color="#10a37f"
            label="J'accepte les conditions"
            v-if="etat !== 'co'"
            :rules="[v => !!v || 'Vous devez accepter les conditions']"
            required
          ></v-checkbox>
        </v-form>
      </v-container>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn @click="signUp" :disabled="!valid" tonal comfortable block large color="#10a37f" v-if="etat !== 'co'">
          <span style="color: white;">S'inscrit</span>
          <v-icon icon="mdi-chevron-right" end></v-icon>
        </v-btn>

        <v-btn @click="signIn" :disabled="!valid" style="color: white;" tonal comfortable block large color="#10a37f" v-else>
          Se connecter
          <v-icon icon="mdi-chevron-right" end></v-icon>
        </v-btn>
      </v-card-actions>

      <v-alert type="error" v-if="error">{{ error }}</v-alert>

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
    etat: "co",
    nom: null,
    prenom: null,
    email: null,
    password: null,
    address: null,
    phone: null,
    terms: false,
    loading: false,
    error: null,
    valid: false,
  }),
  methods: {
    changeEtat() {
      this.etat = this.etat === "" ? "co" : "";
    },
    retour() {
      window.history.back();
    },
    async signUp() {
      if (!this.$refs.form.validate()) {
        return;
      }
      this.loading = true;
      this.error = null;
      try {
        await this.$store.dispatch('auth/signUp', {
          email: this.email,
          password: this.password,
          address: this.address,
          phone: this.phone,
          nom: this.nom,
          prenom: this.prenom,
        });
        this.$router.push('/');
        this.$router.go(); // Rechargera la page actuelle

      } catch (error) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },
    async signIn() {
      if (!this.$refs.form.validate()) {
        return;
      }
      this.loading = true;
      this.error = null;
      try {
        await this.$store.dispatch('auth/signIn', {
          email: this.email,
          password: this.password,
        });
        this.$router.push('/');
        this.$router.go(); // Rechargera la page actuelle
      } catch (error) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>





<style scoped>
body{

  font-family: 'Google Sans', sans-serif !important;

}
h1{
  font-family: 'Google Sans', sans-serif !important;

}
</style>