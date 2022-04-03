<template>
    <div>
        <ul>
            <li v-for="charity in charities" :key="charity.id"><nuxt-link :to="'/donate/'+charity.id">{{charity.name}}</nuxt-link></li>
        </ul>
    </div>
</template>

<style scoped>
ul{
    list-style: none;
    line-height: 3;
    margin-top: 1rem;
}
li{
    margin-bottom: 2rem;
    margin-right: 2rem;
    border-left:1.5px solid black;
    border-top: 1.5px solid black;
    border-bottom: 1.5px solid black;
    background: rgb(247, 143, 247);
    padding-left: 0.5rem;
}
li:hover{
    cursor:pointer;
    background: rgb(253, 99, 253);
}
a{
    text-decoration:none;
}
</style>

<script>
import Charities from "../../charities.json"
export default {
    data(){
        return{
            charities:[]
        } 
    },
    created(){
        const data=Charities;
        this.charities = data
  }
}
</script>