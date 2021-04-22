<template>
    <div class="command">
        <div v-for="item in banners" class="recommand-item">
            <img :src="item.image">
            <div>{{item.title}}</div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "RecommendView",

        data() {
            return {
                banners: []
            }
        },
        created() {
            this.banners.push({ title: 'man', image: require('assets/img/profile/avatar.svg') });
            this.banners.push({ title: 'women', image: require('assets/img/profile/avatar.svg') });
            this.banners.push({ title: 'children', image: require('assets/img/profile/avatar.svg') });
            this.banners.push({ title: 'young', image: require('assets/img/profile/avatar.svg') });
        }
    }
</script>

<style scoped>
    .command{
        display: flex;
        text-align: center;
    }
    .recommand-item{
        flex: 1;
    }
    .recommand-item img{
        width: 60px;
    }

</style>