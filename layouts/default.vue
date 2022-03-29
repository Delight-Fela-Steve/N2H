<template>
  <div>
    <Header />
    <Nuxt />
  </div>  
</template>

<script>
import Header from "@/components/Header"
export default {
  components:{
    Header
  }
}
</script>
<style>
body{
      height: 100vh;
    background-image: linear-gradient(to left bottom, #5d0070, #6e4b9c, #8680c0, #abb4dd, #dee6f6);
}
</style>