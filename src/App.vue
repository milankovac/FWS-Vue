<template>
  <div id="app">
   <Nav></Nav>
   <all-product :product="product" :total="total" ></all-product>
  </div>
</template>
<script>
import Nav from './components/Nav'
import AllProduct from '@/components/AllProduct'
export default {
  components:{
    Nav:Nav,
    AllProduct:AllProduct
  },
  computed:{
        product(){
            return this.$store.getters.getAllProduct;
        },
        total(){
          return this.$store.getters.getTotal;
        },
    
    },
   
  
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>
