<template>
<div class="allProduct">
<div class="search">
<button data-toggle="modal"  data-target="#exampleModal" class="total_cart">View <font-awesome-icon icon="shopping-cart"  /></button>

<form>
<div class="inputContainer">
<i class="fas fa-search icon"></i>

<input class="Field" type="text" placeholder="Search" v-model="search"/>
</div>
</form>
</div>
    <table class="table table-hover">
        <thead>
            <tr>
            <th scope="col"></th>
            <th scope="col">Image</th>
            <th scope="col">Brand</th>
            <th scope="col">Item No.</th>
            <th scope="col">Listing</th>
            <th scope="col">Wholesale</th>
            <th scope="col">QRY</th>
            <th scope="col"></th>
            </tr>
        </thead>
        <tbody>

            <tr v-for="p in searchProduct" :key="p.id">
            
            <th scope="row"><i class="fa fa-star star" aria-hidden="true"></i></th>
            <td><img class="main_image" v-bind:src="p.main_image"></td>
            <td>{{p.title}}</td>
            <td>{{p.sku}}</td>
            <td v-if="p.regular_price">${{p.regular_price}}</td>
            <td v-else>-</td>
            <td v-if="p.sale_price">${{p.sale_price}}</td>
            <td v-else>-</td>
            <td ><input :id="p.id" class="number" type="number" value="0" min="0" v-model="p.qty" ></td>
            <td @click="addToCart(p)"><button class="add_cart">ADD <font-awesome-icon icon="shopping-cart" /></button></td>
            </tr>
         
        </tbody>
    </table>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Cart</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <table class="table table-hover">
           <tbody v-if="getIteminCart">
            <tr  v-for="item in getIteminCart" :key="item.id">
            <td><img class="main_image" v-bind:src="item.main_image"></td>
            <td>{{item.title}}</td>
            <td>$ {{(item.regular_price*item.qty).toFixed(2)}}</td>
             <td ><input :id="item.id" class="number" type="number" value="0" min="0" v-model="item.qty" ></td>
            </tr>
           
          </tbody>

      </table>
     <h3 v-if="!getIteminCart.length">There is nothing in cart</h3>
      </div>
      <div class="modal-footer">
        <p  v-if="getIteminCart.length!==0" class="pay">Total for pay :<span> ${{total}}</span> </p>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
 
      </div>
    </div>
  </div>
</div>
</div>

</template>

<script>

export default {
    name:'AllProduct',
    props:['product'],
    data:function(){return{search:'',itemInCart:[],total_for_pay:0}},
    beforeMount(){
        this.$store.dispatch('getAllproduct')
    },
    computed:{
        searchProduct(){
          return this.product.filter(product=>{
              return product.title.toLowerCase().includes(this.search.toLowerCase()) || product.sku.toLowerCase().includes(this.search.toLowerCase()) ;
          })
        },
        getIteminCart(){
            return this.$store.getters.getIteminCart;
        },
        total(){
         let total=0;
          this.getIteminCart.forEach(item=>{
              total+=(item.regular_price*item.qty)
          });
          return total.toFixed(2);
        },
        getTotal()
        {
            return this.$store.getters.getTotal;
        }   
    },
    methods:{
        addToCart(itemtoAdd){
          this.itemInCart=itemtoAdd;
          let isItemInCart=this.itemInCart.length>0;
          if(isItemInCart==true)
          {
              this.itemInCart[0].qty += this.itemToAdd.qty;
          }
        this.$store.commit('UPDATE_CART',this.itemInCart)
       
          
        }
    },
  
    
}
</script>

<style >
.pay{
    position: absolute;
    left: 0;
}
.pay>span{
    color: red;
}
.modal-content{
    width:200%!important;
  
}
.main_image{
    width: 50px;
    height: 50px;
}
.table
{
    width: 80% !important;
    margin: auto;
}
.add_cart, .total_cart{
    background-color:#2e3e5f ;
    color: white;
    width: 120px;
    padding: 5px;
    font-size: 14px;
    border: none;
    border-radius: 5px;
    
}
.number{
    width: 50px;
}
.star{
    color: white;
  text-shadow: -1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000;
}
.star:hover{
color: black;
}
.th{
    color: red;
}
.search{
    background-color:  #f5f1ee;
    height: 80px;
}
form {
   max-width:80%;
   padding: 25px;
   margin: auto;
   
}
.inputContainer i {
   position: absolute;
  
}
.inputContainer {
   width: 100%;
   background-color: #f5f1ee;
}
.icon {
   padding: 15px;
   color: black;
   width: 70px;
   text-align: left;
}
.Field {
   width: 100%;
   padding: 5px;
   text-align: center;
   font-size: 20px;
   font-weight: 500;
   border: none;
   border-radius: 5px;
}
.total_cart{
position: absolute;
    left: 92%;
    top: 19%;
 
}
</style>