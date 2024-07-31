<template>
  <div class="wrapper">
    <br />
    <v-btn outlined color="warning">Se deconnecter</v-btn>
    <br>
    <br>

    <h1>Parametres</h1>
    <br />
    <br />

    <h4>Compte</h4>
    <v-card elevation="2" class="card">
        <v-avatar
            size="40"
            color="purple"
            class="white--text font-weight-bold"
            >f</v-avatar
          >

          <div  class="center">
            <span class="text-body-1">Nom</span> <br>
            <span class="text-body-2">Adresse email Adresse email</span>
          </div>

          <v-spacer></v-spacer>

          <v-icon>mdi-pencil</v-icon>
        </v-card>

        <br>
        <br>
        <h4>Mode de paiment</h4>

        <v-card elevation="2">
            <v-card-title>Paiments</v-card-title>
            <v-card-subtitle>Vous pouvez ajouter, supprimer ou modifier des modes de paiement via Google Payments. Vos modifications seront appliquées à votre compte Google Store.</v-card-subtitle>
            <v-divider></v-divider>
            <v-card-title> Modifier mode de paiment <v-spacer></v-spacer> <v-icon>mdi-pencil</v-icon></v-card-title>
        </v-card>

        <br>
        <br>

       

  </div>
</template>

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