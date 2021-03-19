<template>
<div class="new_password">

 <input type="email" placeholder="Enter email" v-model="email">
    <button type="submit" @click="sendEmail">Send new password</button> 

</div>

</template>

<script>
import axios from '@/services/axios'
export default {
    data() {
        return {
            email:'',
           random:''
        }
    },
    
    methods:{
      async sendEmail()
       {   this.random=Math.floor(Math.random()*(1000-100+1)+100);
       localStorage.setItem('forgottoken',this.random);
           const data={"email":this.email,"random":this.random}
             const response=await axios.post('wp/v2/email_reset',data)
             if(response.data==false)
             {
                  this.$alert("Email address is invalid!😕");
             }
             
             
       }
    }
}
</script>

<style scoped>
.new_password{
background-color: white;
     margin: auto;
     height: 400px;
     margin-top: 10%;
     margin-bottom: 250px;
}
input[type=text], input[type=email] {
  width: 20%;
  padding: 12px 20px;
  margin: 25px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}
.new_password>button
{
 background-color: #4287f5;
  padding: 12px 20px;
  color: white;
  border: none;
}

</style>