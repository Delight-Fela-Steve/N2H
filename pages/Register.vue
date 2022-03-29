<template>
    <div>
        <UserRegister />
        <CompanyRegister />
    </div>
</template>

<script>
import UserRegister from "@/components/UserRegister";
import CompanyRegister from "@/components/CompanyRegister";

export default {
    components:{
        UserRegister,
        CompanyRegister
    }
}
</script>
