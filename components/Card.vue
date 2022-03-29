<template>
    <div class="card">
        <img src="" alt="">
        <div class="card-body">
            <h5 class="card-title">Title</h5>
            <p class="card-text">some text</p>
            <p class="card-text">Price: $5</p>
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
  components:{
      Button
  }
}
</script>
<style scoped>
.card{
    width: 18rem;
}
</style>