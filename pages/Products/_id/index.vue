<template>
    <div class="container p-5">
        <ProductDetail :product="product"/>
    </div>
</template>

<style scoped>
.container{
    height:24px;
}
</style>

<script>
import ProductDetail from '@/components/ProductDetail'
import Products from "../../../products.json"
export default {
    data(){
        return{
            product:Object
        }
        
    },
    components:{
        ProductDetail
    },
    created(){
        Products.forEach(product => {
            if(product.id==this.$route.params.id){
                this.product=product;
            }
        });
    }
}
</script>