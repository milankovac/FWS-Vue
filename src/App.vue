<template>
  <div id="app">
   <Nav></Nav>
   <Search></Search>
   <all-product></all-product>
  </div>
</template>
<script>
import Nav from './components/Nav'
import Search from '@/components/Search'
import AllProduct from '@/components/AllProduct'
export default {
  components:{
    Nav:Nav,
    Search:Search,
    AllProduct:AllProduct
  }
  
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
