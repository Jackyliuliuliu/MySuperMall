<template>
    <div>
        <swiper>
            <swiper-item v-for="(item, id) in banners" :key="id">
                <!-- <div>{{item.image}}</div> -->
                <!-- <img src="~assets/img/profile/avatar.svg"> -->
                <img :src="item.image" :key="id">
            </swiper-item>
        </swiper>
    </div>


</template>

<script>
    import { Swiper, SwiperItem } from 'components/common/swiper/index'

    export default {
        name: "HomeSwiper",
        data() {
            return {
                banners: [],

            }
        },
        created() {
            this.banners.push({ image: require('assets/img/profile/pointer.svg')});
            this.banners.push({ image: require('assets/img/profile/cart.svg') });
            this.banners.push({ image: require('assets/img/profile/message.svg') });
            this.banners.push({ image: require('assets/img/profile/vip.svg') });

        },
        props: {

        },
        components: {
            Swiper,
            SwiperItem
        }
    }
</script>

<style scoped>


</style>