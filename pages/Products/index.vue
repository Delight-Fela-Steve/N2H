<template>
  <div class="container">
    <div class="cards-container">
      <Card v-for="product in products" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card"
import Products from "../../products.json"
export default {
  data(){
    return {
      products:[]
    };
  },
  created(){
    const data=Products;
    this.products = data
  },
  name: 'IndexPage',
  components:{
    Card
  }
}
</script>

<style scoped>
.cards-container{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top:20px;
}
</style>
