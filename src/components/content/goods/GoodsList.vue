<template>
    <div class="goods-list">
        <goods-list-item v-for="(item, id) in goods" :goodsItem="item" :key="id" @click.native="goodItemClick(item)"></goods-list-item>
    </div>
</template>

<script>

    import GoodsListItem from './GoodsListItem'
    export default {
        name: "GoodsList",
        components: {
            GoodsListItem

        },

        props: {
            goods: {
                type: Array,
                default() { return [] }
            }
        },
        methods:{
            goodItemClick(item){
                this.$router.push('/detail/'+item.id)
            }
        }


    }
</script>

<style scoped>
    .goods-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        text-align: center;
    }
</style>