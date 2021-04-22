<template>
    <div class="goods-item">
        <img :src="goodsItem.imgSrc" alt="" @load="imageLoad">
        <div>
            <span>{{goodsItem.title}}</span>
            <span></span>
        </div>

    </div>
</template>

<script>
    export default {
        name: "GoodsListItem",
        props: {
            goodsItem: {
                type: Object,
                default() {
                    return {}
                }
            },

        },
        methods:{
            imageLoad(){
                this.$bus.$emit("itemImageLoad");
            }
        }


    }
</script>

<style scoped>
    .goods-item{
        width: 48%;
    }


</style>