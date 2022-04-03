<template>
    <div class="container">
        <Success :action="action" />
    </div>
</template>

<script>
import Success from "@/components/Success"
export default {
    props:["action"],
    components:{
        Success
    },
}
</script>