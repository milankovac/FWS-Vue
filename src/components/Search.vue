<template>
<div class="search">
   <input type="search" class="input-search">
   <button type="submit" class="input-search-button">Search</button>
</div>
  
</template>
<script>
export default {
    name:'Search'
    
}
</script>
<style>
.search{
background-color: #f5f1ee;
width: 100%;
height:120px;
}
.input-search{
margin-top: 45px;
width: 35%;}
.input-search-button{
background-color:#2f3f60 ;
color: white;}
</style>