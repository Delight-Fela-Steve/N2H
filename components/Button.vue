<template>
    <button class="btn btn-dark" type="button">{{name}}</button>
</template>

<style scoped>
.btn:hover{
    color:#e25bee;
}
</style>
<script>
export default {
    name:"Button",
    props:['name']
}
</script>