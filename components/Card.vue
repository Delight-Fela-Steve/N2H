<template>
    <div class="card">
        <img src="" alt="">
        <div class="card-body">
            <h5 class="card-title">{{product.name}}</h5>
            <p class="card-text">{{product.description}}</p>
            <p class="card-text">Price: ${{product.price}}</p>
        </div>
        <div class="d-flex card-body justify-content-between ">
            <nuxt-link to="/donate"><Button name='Donate' /></nuxt-link>
            <nuxt-link to="/buy"><Button name='Buy' /></nuxt-link>
        </div>
    </div>
</template>

<script>
import Button from '@/components/Button'
export default {
  name:"Card",
  props:{
      product:Object
  },
  components:{
      Button
  }
}
</script>
<style scoped>
.card{
    width: 18rem;
    margin: 20px 20px;
}
</style>