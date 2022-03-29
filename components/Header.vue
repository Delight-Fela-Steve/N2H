<template>
  <header class="header">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <h1 class="title">N2H</h1>
         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#links" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="links">
          <ul class="navbar-nav">
            <li>
              <nuxt-link to="/">Home</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/products">Products</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/signin">Sign-In</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/register">Register</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>
<style scoped>
    li {
        margin-right: 1em;
    }
    li a {
        padding: 0.5em;
        color: black;
        text-decoration: none;
        background: #ffffff;
        border-radius: 2px;
        display:block;
        text-align: center;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    }
    li a:hover{
        text-decoration: none;
        box-shadow: 0 7px 14px rgba(0,0,0,0.25), 0 5px 5px rgba(0,0,0,0.22);
        
    }
    #links{
        margin-top: 1em;
    }
    #links.show ul li a{
        
        border-radius: 0;
        margin-bottom: 0.5em
    }


</style>
