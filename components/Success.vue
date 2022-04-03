<template>
    <div class="row mt-5">
        <div class="row">
            <p class="alert alert-success">{{action}} Successful</p>
        </div>
        <button class="btn btn-light"><nuxt-link to="/products">Go To Products</nuxt-link></button> 
    </div>
    
</template>

<style scoped>
a{
    text-decoration: none;
}

</style>
<script>
export default {
    name:"Success",
    props:['action'],
     created(){
        this.action="Your Donation to the Selected Charity Was"
    }
}
</script>