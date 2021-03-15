<template>
    <div class="allProduct">
    {{product}}
    </div>
</template>

<script>
export default {
    name:'AllProduct',
    beforeMount(){
        this.$store.dispatch('getAllproduct')
    },
    computed:{
        product(){
            return this.$store.getters.getAllProduct;
        }
    }
}
</script>

<style >

</style>