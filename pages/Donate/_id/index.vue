<template>
    <div class=" row align-items-md-center justify-content-center mt-5">
      <div class="col-md-6">
        <div class="h-100 p-5 bg-light border rounded-3">
          <h3 mb-5>{{charity.name}}</h3>
          <p>{{charity.description}}</p>
          <div class="d-flex card-body justify-content-between ">
            <nuxt-link :to="this.$route.params.id+'/success'"><Button name='Donate' /></nuxt-link>
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
import Charities from "../../../charities.json"
export default {
    data(){
         return{
            charity:Object
        }
    },
    name:"CharityDetail",
    components:{
      Button
    },
    created(){
        Charities.forEach(charity=> {
            if(charity.id==this.$route.params.id){
                this.charity=charity;
                console.log(this.$route)
            }
        });
    }
  
}
</script>
