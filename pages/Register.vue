<template>
    <div>
        <div class="choice-container">
            <div class="choices">
                <button class="charity">Charity</button>
                <button class="user">Individual</button>
                <button class="company">Company</button>
            </div>    
        </div>
        <UserRegister />
        <CompanyRegister />
    </div>
</template>

<script>
import UserRegister from "@/components/UserRegister";
import CompanyRegister from "@/components/CompanyRegister";

export default {
    data:()=>{
        
    },

    components:{
        UserRegister,
        CompanyRegister
    }
}
</script>
<style scoped>
  .choice-container{
    width: 100%;
    display:flex;
    justify-content: center;
  }
  .choices{
    display:flex;
    text-align: center;
    flex-direction: column;
    margin-top: 2rem;
  }
    button{
      width: 10rem;
      margin-bottom: 2rem;
      padding: 1rem 10rem;
      padding-right:12rem;
      background:#5d0070;
      color:#e0e5f1;
      border:none;
      box-shadow: 0 7px 14px rgba(0,0,0,0.25), 0 5px 5px rgba(0,0,0,0.22);
    }
    button:hover{
      color:#607ba5;
      box-shadow: 0 3.5px 7px rgba(0,0,0,0.25), 0 2.5px 2.5px rgba(0,0,0,0.22);
    }
</style>