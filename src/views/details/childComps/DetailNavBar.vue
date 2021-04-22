<template>
    <nav-bar class="nav-bar">
        <div slot="left" class="left">
            <img src="~assets/img/common/back.svg" alt="" @click="backClick">
        </div>
        <div slot="center" class="title">
            <div v-for="(title,index) in titles" class="title-item" @click="detailTitleItemClick(index)"
                :class="{active: index === currentIndex}" :key="index">{{title}}</div>
        </div>
    </nav-bar>
</template>

<script>
    import NavBar from 'components/common/navbar/NavBar'
    export default {
        name: "DetailNavBar",
        components: {
            NavBar,
        },
        data() {
            return {
                id: null,
                titles: ['商品', '参数', '评论', '推荐'],
            }
        },
        props:{
            currentIndex:{
                type:Number,
                default:0
            }
        },
        methods: {
            detailTitleItemClick(index) {
                this.$emit("detailItemClick", index)
            },
            backClick() {
                this.$router.back();
                //this.$router.go(-1)
            }
        }
    }
</script>

<style scoped>
    .nav-bar {
        background: white;
        padding: 0 20px;
        font-size: 14px;
    }

    .title {
        display: flex;
    }

    .title-item {
        flex: 1
    }

    .active {
        color: red;
    }
</style>