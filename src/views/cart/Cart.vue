<template>
    <div >
        <cart-list :cart-list="cartList"></cart-list>
        <bottom-bar></bottom-bar>
    </div>
</template>

<script>
    import CartList from './childComps/CartList'
    import BottomBar from './childComps/BottomBar'
    export default {
        name: "Cart",
        components: {
            CartList,
            BottomBar
        },
        computed: {
            cartList() {
                return this.$store.state.carts;
            }
        }
    }
</script>

<style scoped>

</style>