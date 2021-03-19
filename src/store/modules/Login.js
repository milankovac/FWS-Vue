export default{
    state:{is_login:localStorage.getItem("token")},
    mutations:{
       
        LOGOUT(state,data)
        {
            state.is_login=data;
        },
    

    },
    getters:{
        getIsLogin(state){
          return state.is_login;
        },
       
    }
}