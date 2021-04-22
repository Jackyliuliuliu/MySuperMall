<template>
    <div class="detail">
        <detail-nav-bar @detailItemClick="titleClick" class="detailNav" :currentIndex="currentIndex"></detail-nav-bar>
          <!-- <h1>{{id}}</h1> -->
        <scroll class="content" ref="scroll" @scroll="detailScroll">
            <home-swiper />
            <detail-shop-info ref="shop" />
            <detail-param-info ref="para" />
            <detail-comment-info ref="comment" />
            <detail-recommand-info ref="recommand" />
        </scroll>
        <detail-bottom-bar></detail-bottom-bar>


      
    </div>

</template>

<script>
    import DetailNavBar from './childComps/DetailNavBar'
    import HomeSwiper from 'views/home/childcomps/HomeSwiper'
    import DetailShopInfo from './childComps/DetailShopInfo'
    import DetailParamInfo from './childComps/DetailParamInfo'
    import DetailCommentInfo from './childComps/DetailCommentInfo'
    import DetailRecommandInfo from './childComps/DetailRecommandInfo'
    import DetailBottomBar from './childComps/DetailBottomBar'

    import Scroll from 'components/common/scroll/Scroll'
    export default {
        name: "Detail",
        components: {
            DetailNavBar,
            HomeSwiper,
            DetailShopInfo,
            DetailParamInfo,
            DetailCommentInfo,
            DetailRecommandInfo,
            DetailBottomBar,

            Scroll

        },
        data() {
            return {
                themeTops: [],
                currentIndex:0,
            }
        },
        created() {
            this.id = this.$route.params.id;

        },
        mounted() {
            this.getThemeTops();
        },
        methods: {
            getThemeTops() {
                this.themeTops = [];
                this.themeTops.push(0);
                this.themeTops.push(this.$refs.para.$el.offsetTop);
                this.themeTops.push(this.$refs.comment.$el.offsetTop);
                this.themeTops.push(this.$refs.recommand.$el.offsetTop);
                this.themeTops.push(Number.MAX_VALUE)
               
            },
            titleClick(index) {
                console.log(this.themeTops[index]);
                this.currentIndex = index;
                this.$refs.scroll.scrollTo(0, -this.themeTops[index], 300);
            },
            detailScroll(position) {
                var scrollY = -position.y;
                for (let i = 0; i < this.themeTops.length; i++) {
                    let iPos = this.themeTops[i];
                    if (scrollY >= iPos && scrollY < this.themeTops[i + 1]) {
                        if (this.currentIndex !== i) {
                            this.currentIndex = i;
                        }
                        break;
                    }
                }


            }

        }
    }
</script>

<style scoped>
    .detail {
        height: 100vh;
        position: relative;
        z-index: 1;
        background-color: #fff;
    }

    /* .detailNav {
        background: white;
    } */

    .content {
        position: absolute;
        top: 44px;
        bottom: 50px;
        /* left: 0px;
        right: 0px; */
        overflow: hidden;
    }
</style>