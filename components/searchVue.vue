<template>
  <div class="search elevation-2">

    <div style="height: 40px;" @mousedown="close">
      <v-icon @click="close">mdi-close-box-outline</v-icon>
    </div>

    <v-text-field
      :loading="loading"
      prepend-inner-icon="mdi-magnify"
      density="compact"
      label="Recherche ici...."
      outlined
      hide-details
      clearable
      color="teal"
      single-line
      @click:append-inner="onClick"
    ></v-text-field>
  </div>
</template>

<style scoped>
.search {
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 25;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0%;
  background-color: white;
  padding: 0px;
  transition: 0.4s;
  animation: ease-in-out;
}

.mdi-close-box-outline {
  margin-left: auto;
  display: none;
}
</style>


<script>
export default {
  data: () => ({
    loaded: false,
    loading: false,
  }),

  methods: {
    onClick() {
      this.loading = true;

      setTimeout(() => {
        this.loading = false;
        this.loaded = true;
      }, 2000);
    },
    close() {
      document.querySelector(".search").style.height = "0%";

      document.querySelector(".mdi-close-box-outline").style.display = "noe";

      document.querySelector(".search").style.padding = "0px";
    },
  },
};
</script>