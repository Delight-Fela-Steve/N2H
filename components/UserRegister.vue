<template>
    <div class="container">
        <div class="card">
            <h5 class="card-title m-1">User Registration</h5>
            <div class="card-body">
                <form action="">
                    <div class="row mb-3">
                        <label class="mb-2" for="first">First Name</label>
                        <div class="col-sm-9"><input type="text" class="form-control"  id="first" placeholder="First name" v-model="first" aria-label="First name"/>    </div>
                    </div>
                    <div class="row mb-3">
                        <label class="mb-2" for="last" >Last Name</label>
                        <div class="col-sm-9"><input type="text" class="form-control" id="last"  placeholder="Last name" v-model="last" aria-label="Last name"/></div>
                    </div>
                    <div class="row mb-3">
                        <label class="mb-2" for="email" >Email</label>
                        <div class="col-sm-9"><input type="email" class="form-control" id="email" placeholder="johndoe@example.com" v-model="email" aria-label="Email"></div>
                    </div>
                    <div class="row mb-3">
                        <label class="mb-2" for="password" >Password</label>
                        <div class="col-sm-9"><input type="password" class="form-control" id="password" placeholder="************" v-model="password" aria-label="Password"></div>
                    </div>
                    <div class="row mb-3">
                        <label class="mb-2" for="password" >Confirm Password</label>
                        <div class="col-sm-9"><input type="password" class="form-control" id="password" placeholder="************" v-model="confirm_password" aria-label="Confirm password"></div>
                    </div>
                    <div class="row">
                        <button class="btn btn-dark" type="submit" @click.prevent="register">Register</button>
                    </div>
                </form>
            </div>
        </div>
    
    </div>
</template>


<script>
    export default{
        name:"UserRegister",
        data(){
            return{
                first:"",
                last:"",
                email:"",
                password:"",
                confirm_password:""
            }
        },
        methods:{
            register(){
                const user={
                    first:this.first,
                    last:this.last,
                    email:this.email,
                    password:this.password,
                }
                this.$store.dispatch('signUpAction',user)
            }
        }
    }
</script>


<style scoped>
.card-title{
    text-align: center;
}
.card{
    margin: 0.1rem auto;
    max-width: 30rem;
    padding: 1rem;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    font-size: 15px;
    line-height: 1;
}
.form-control{
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}
.form-control:focus{
    border-color: #e25bee;
}
.form-control:hover{
      box-shadow: 0 7px 14px rgba(0,0,0,0.25), 0 5px 5px rgba(0,0,0,0.22);
}
.btn:hover{
    color: #e25bee;
}
</style>