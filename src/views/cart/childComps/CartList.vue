<template>
    <div>
        <cart-list-item v-for="good in cartList" :item-info="good" :key="good.id"></cart-list-item>

    </div>
    
</template>

<script>
    import CartListItem from './CartListItem'
    export default {
        name: "CartList",
        components:{
            CartListItem,
        },
        props:{
            cartList:{
                type:Array,
                default(){
                    return []
                }
            }

        }
    }
</script>

<style scoped>

</style>
  