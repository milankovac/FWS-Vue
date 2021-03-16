<template>
<div class="search">
<font-awesome-icon icon="shopping-cart" class="total_cart" />
<form>

<div class="inputContainer">
<i class="fas fa-search icon"></i>
<input class="Field" type="text" placeholder="Search"/>
</div>

</form>

</div>

</template>
<script>
export default {
    name:'Search'
    
}
</script>
<style>
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