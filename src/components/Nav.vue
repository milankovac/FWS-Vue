<template>
<nav class="navbar navbar-light bg-light">
  <div class="container-fluid ">
      <img src="../../public\Orient_Watch_Logo_220px.png" height="80px" alt=""  class="d-inline-block align-top">
      <div class="login_button">
      <router-link v-if="!isLogin" to="/login" class="btn btn-success"><i class="fa fa-user" aria-hidden="true"> </i>Login</router-link>
      <a v-if="isLogin" class="btn btn-danger" @click="logout"><i class="fa fa-user-times" aria-hidden="true">  Logout</i></a>
      <router-link v-if="isLogin" to="/reset" class="btn btn-primary"><i class="fa fa-cog" aria-hidden="true"></i> Change password</router-link>
      </div>
  </div>
</nav>
</template>

<script>
export default {
    name:'Nav',
    
    methods:
    {
      logout(){
        localStorage.removeItem("token")
        localStorage.removeItem('currentuser');
        this.$store.commit('LOGOUT',localStorage.getItem('token'))
        this.$router.push('/');
      }
    },
    computed:{
        isLogin(){
          return this.$store.getters.getIsLogin;
        },
        
    }
    
}
</script>
<style>
.navbar{
  background-color: white !important;
}
.login_button{
  margin: auto;
}

</style>