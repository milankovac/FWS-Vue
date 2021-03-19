<template>
    <div>
    <h4>Restart Password</h4>
    <input type="email" placeholder="Your email" v-model="email"/>
    <input type="password" placeholder="New Password" v-model="newpassword"/>
    <input type="password" placeholder="Confirm Password " v-model=" confirmpassword"/><br><br>
    <button class="btn btn-success" @click="chnagePassword">Change</button>
    </div>
</template>

<script>
import axios from '@/services/axios'
export default {
    data() {
        return {
            email:'',
            newpassword:'',
            confirmpassword:''
        }
    },
    methods:{
        async chnagePassword(){
            if(this.newpassword===this.confirmpassword&&this.newpassword!=="")
            {
                const data={"email":this.email,"password":this.newpassword};
              const response=await axios.post('wp/v2/password_reset',data)
              if(response.data===1)
              {
                this.$alert("You have successfully changed your password!😎");
                localStorage.removeItem('forgottoken');
                this.$router.push('/login');
              }else
              {
                this.$alert("You missed the email!😕");
              }
            }
            else{
               this.$alert("Passwords do not match!😕");
            }

        }
    }
}
</script>
<style scoped>

</style>