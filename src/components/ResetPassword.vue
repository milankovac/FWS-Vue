<template>
    <div class="container">
    <div class="form">
     <h3>Change Password</h3>
      <input type="password" placeholder="New Password" v-model="password">
      <input type="password" placeholder="Repeat New Password" v-model="confirmpassword">
      <button class="login" @click="changePassword"><i class="fa fa-check" aria-hidden="true"></i>Change </button>

    </div>
  </div>
</template>

<script>
import axios from '../services/axios'
export default {
    data() {
        return {
           password:'',
           confirmpassword:''

        }
    },
  
    methods:{
        changePassword(){
           
        
           if(this.password===this.confirmpassword&& this.password1!=="")
           {
             const data={
              new_password: this.password
            }
            
            axios.post('fws/change_password',data).then(
              (response) => {
                this.$alert("The password has been changed!😊");
                this.$router.push('/products');
                console.log(response);
              },
              (error) => {
                console.log(error);
              }
            );
           }
        
           else{
             this.$alert("Passwords do not match!😕");
           }
           
        }
    }
    
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
   width: 55%;
   margin-top: 50px;
    border: none;
    border-radius: 5px;
    background-color:#4287f5;
    color: white;
}

</style>