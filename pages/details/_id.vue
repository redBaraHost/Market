<template>
    <div class="wrapper">
        <h1>detail views</h1>

       


    </div>
</template>

<script>
import { pc } from '../../utils/data';


export default ({
    data() {
    return {
      item: null,
      items: pc, // Utilisez le tableau pc ici
    };
  },

  created() {
    const itemId = parseInt(this.$route.params.id);
    this.item = this.items.find((item) => item.id === itemId); // Utilisez items ou newItems selon vos besoins
  },
})
</script>
