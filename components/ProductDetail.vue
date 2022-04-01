<template>
    <div class=" row align-items-md-center">
      <div class="col-md-6">
        <div class="h-100 p-5 rounded-3">
          <img :src="product.image" :alt="`image of ${product.name}`">
        </div>
      </div>
      <div class="col-md-6">
        <div class="h-100 p-5 bg-light border rounded-3">
          <h3 mb-5>{{product.name}}</h3>
          <p>Product: {{product.description}}</p>
          <p>Price: N{{product.price}}</p>
          <p>Quantity: {{product.quantity}}</p>
          <p>Company: {{product.company}}</p>
          <p>Expiry Date: {{product.expiry_date}}</p>
          <div class="d-flex card-body justify-content-between ">
            <nuxt-link to="/donate"><Button name='Donate' /></nuxt-link>
            <nuxt-link to="/buy"><Button name='Buy' /></nuxt-link>
          </div>
        </div>
             
      </div>
    </div>
</template>

<style scoped>
img{
  width: 100%;
  height: 100%;
}
</style>

<script>
import Button from "@/components/Button"
export default {
    name:"ProductDetail",
    props:["product"],
    components:{
      Button
    }
  
}
</script>