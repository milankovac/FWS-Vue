<template>
  <div class="container">
    <div class="form">
     <h3>Login</h3>
      <input type="text" placeholder="Username" v-model="username">
      <input type="password" placeholder="Password" v-model="password">
      <button class="login" @click="login">Login</button>
      <router-link to="/forgot">Forgot Password?</router-link>
    </div>
  </div>
</template>
<script>
import axios from '../services/axios';
export default {
    name:"Login",
    data(){
   return{
    username:'',
    password:''
    }   
    },
    methods: {
       async login()
        {
        const data={
            "username":this.username,
            "password":this.password
        };
            const response= await axios.post('jwt-auth/v1/token',data);
            console.log(response.data);
            if(response.data.success)
            {
              localStorage.setItem('currentuser',this.username);
              localStorage.setItem('token',response.data.data.token);
              this.$store.commit('LOGOUT',localStorage.getItem('token'))
              this.$router.push('/products');
            }
            else if(!response.data.success){
            
              this.$alert("Invalid username or password!😕");
            }
           
            
        }
        
    },
    
}
</script>
<style scoped>

.form{
    background-color: white;
     margin: auto;
     width: 50%;
     height: 400px;
     margin-top: 10%;
     margin-bottom: 250px;
     padding: 7%;
     border-top-left-radius: 20px;
     border-top-right-radius: 20px;
  
    
}
input[type=text], input[type=password] {
  width: 100%;
  padding: 12px 20px;
  margin: 25px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}
.login{
   width: 35%;
   margin-top: 50px;
    border: none;
    border-radius: 5px;
    background-color:#4287f5 ;
    color: white;
}

        
</style>