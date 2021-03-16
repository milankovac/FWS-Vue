
export default{
    state:{
        in_cart:[],
        total:0
  
    },
    mutations:{
        UPDATE_CART(state,data){
            state.in_cart.push(data);
        },
        UPDATE_TOTAL(state,data)
        {
            state.total=data
        }
    
    },
    actions:{

    },
    getters:{
        getIteminCart(state){
            return state.in_cart;
        },
        getTotal(state){
            return state.total;
        }
    }
}