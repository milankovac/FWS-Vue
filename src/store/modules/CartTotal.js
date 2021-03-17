
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
        },
        REMOVE_TO_CART(state,data)
        {
            let data_to_delete=state.in_cart.map(item=>item.id).indexOf(data);
            state.in_cart.splice(data_to_delete,1);
        },
        CHECKOUT(state,data)
        {
          state.in_cart=data;
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