<template>
    <div class="slider">
      <div class="card" v-for="item in items" :key="item.name">
        <div class="img-box">
          <img :src="item.url" width="150">
        </div>
        <div class="info-box">
          <p><strong>{{ item.name }}</strong></p>
          <p>A partir de <span>{{ item.prix }}</span> £</p>
          <span class="last-price">{{ item.last_prix }} £</span>
        </div>
        <br><br>
        
        <v-btn @click="addToCart(item)" text block color="primary">Ajouter
            <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </div>
    </div>
  </template>
  
  <script>
  import { mapActions } from 'vuex';
import { telephones } from '../utils/data';
  
  export default {
    methods: {
    ...mapActions(['addToCart']),
    addItemToCart(item) {
      this.addToCart(item);
    }
  },
    data() {
      return {
        items: telephones
      };
    }
  };
  </script>
  


<style scoped>

.slider{
    display: flex;
    padding: 20px;
    overflow: auto;
}

.slider .card{
    min-width: 160px;
    padding: 10px;
    margin: 0px 10px 0px ;
}

.card .img-box{
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    background-color: #F8F9FA;
    padding: 25px;
    margin-bottom: 15px;
    height: 150px;
}

.card .info-box p{
    font-size: 0.9rem;
}

.info-box .last-price{
    text-decoration: line-through;
}

.card .bottom{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 85px;
}

.bottom svg{
    width: 18px;
    color: rgb(6, 122, 200);

}
.bottom span{
    font-weight: 600;
    color: rgb(6, 122, 200);
}



</style>