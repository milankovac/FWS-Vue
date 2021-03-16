import AllProduct from '../../services/AllProduct/AllProduct'
export default{
    state: {
        product:[]
    },
    mutations: {
        SET_PRODUCT(state,data){
           state.product=data;
        }
    },
    actions: {
        getAllproduct({commit}){
            AllProduct.getAllproduct().then(response=>{
                commit('SET_PRODUCT',response.data);
            });
        }
    },
    getters:{
        getAllProduct(state)
        {
            return state.product;
        }
    }
}