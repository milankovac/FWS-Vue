
import axios from '../../services/AllProduct/MakeOrders'
export default{
    state: {
        orders:[],
        total:''
    },
    mutations: {
       SET_ORDERS(state,data){
            state.orders=data; 
       },
       SET_TOTAL(state,data)
       {
            state.total=data
       }
    },
    actions: {
       async  makeOrder()
        {
          const response=await axios.makeOrder(this.getters.getAllOrders,this.getters.getTotalOrder);
         
          console.log(response);
        
        }
        
    },
    getters:{
        getAllOrders(state)
        {
            return state.orders;
        },
        getTotalOrder(state)
        {
            return state.total;
        }
    }
}