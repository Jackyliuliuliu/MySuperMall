<template>
    <div id="shop-item">
        <div class="item-selector">
            <check-button @checkBtnClick="checkBtnClick" v-model="itemInfo.isChecked"></check-button>
        </div>
        <div class="item-img">
            <img :src="itemInfo.imgSrc" alt="商品图片">
        </div>
        <div class="item-info">
            <div class="item-title">{{itemInfo.title}}</div>
            <!-- <div class="item-desc">商品描述: {{itemInfo.desc}}</div> -->
            <div class="info-bottom">
                <!-- <div class="item-price left">¥{{itemInfo.newPrice}}</div> -->
                <div class="item-count right">x{{itemInfo.count}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    import CheckButton from './CheckButton'
    export default {
        name: "CartListItem",
        props: {
            itemInfo: Object
        },
        components: {
            CheckButton
        },
        methods:{
            checkBtnClick(){
                this.itemInfo.isChecked = !this.itemInfo.isChecked;
            }
        }
    }
</script>

<style scoped>
    #shop-item {
        width: 100%;
        display: flex;
        font-size: 0;
        padding: 5px;
        border-bottom: 1px solid #ccc;
    }

    .item-selector {
        width: 14%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .item-info {
        font-size: 17px;
        color: #333;
        padding: 5px 10px;
        position: relative;
        overflow: hidden;
    }

    .item-title {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .item-img {
        padding: 5px;
        /*border: 1px solid #ccc;*/
    }

    .info-bottom {
        margin-top: 10px;
        position: absolute;
        bottom: 10px;
        left: 10px;
        right: 10px;
    }
</style>