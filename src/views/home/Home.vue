<template>
    <div id="home" class="wrapper">
        <nav-bar class="home-nav">
            <div slot="center">购物街</div>
        </nav-bar>
        
        <tab-control  class="tab-control" :titles="['流行','新款','精选']"  @tabClick="tabClick" v-show="isTabFixed" ref="tabcontrol2"></tab-control>
        <scroll class="content" @scroll="contentScroll" @pullingUp="pullingUpMore" ref='scroll'>
            <home-swiper />
            <!-- <my-swiper></my-swiper> -->
            <recommend-view />
            <tab-control class="tab-control" :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabcontrol1"></tab-control>
            <goods-list :goods="showGoods"></goods-list>
            
        </scroll>
        <back-top v-show="isShowBackTop" @click.native="backTopClick"></back-top>

    </div>

</template>

<script>

    import HomeSwiper from './childcomps/HomeSwiper'
    import RecommendView from './childcomps/RecommendView'
    import MySwiper from './childcomps/MySwiper'

    import NavBar from 'components/common/navbar/NavBar'
    import GoodsList from 'components/content/goods/GoodsList'
    import TabControl from 'components/content/tabcontrol/TabControl'
    import Scroll from 'components/common/scroll/Scroll'
    import BackTop from 'components/content/backtop/BackTop'
    export default {
        name: "Home",
        components: {
            HomeSwiper,
            RecommendView,
            MySwiper,

            NavBar,
            GoodsList,
            TabControl,
            Scroll,
            BackTop

        },
        data() {
            return {
                goodsList: {
                    'pop': { page: 0, list: [] },
                    'new': { page: 0, list: [] },
                    'sell': { page: 0, list: [] }
                },
                currentType: 'pop',
                isShowBackTop: false,
                tabOffsetTop: 0,
                isTabFixed: false
            }
        },
        created() {
            this.getHomeGoods('pop');
            this.getHomeGoods('new');
            this.getHomeGoods('sell');
            this.$store.commit('addGoods',this.goodsList);
        },
        mounted(){
            this.$bus.$on("itemImageLoad",()=>{
                
   
                var func = this.$refs.scroll && this.$refs.scroll.refresh();
                this.debounce(func,0)
            })
            //拿组件里元素的需要用到$el
            this.tabOffsetTop = this.$refs.tabcontrol1.$el.offsetTop;

            // console.log(this.$refs.tabcontrol1.$el.offsetTop)
        },
        computed: {
            showGoods() {
                return this.goodsList[this.currentType].list
            },
            // isShowBackTop(){
            //     return false;
            // }
            

        },
        methods: {
            getHomeGoods(type) {
                for (let index = 0 + this.goodsList[type].page * 30; index < 30 + this.goodsList[type].page * 30; index++) {
                    var item = {
                        imgSrc: require('assets/img/profile/avatar.svg'),
                        title: type + index,
                        id:index,
                        count:1,
                        isChecked:false
                    }
                    this.goodsList[type].list.push(item);
                }
                this.goodsList[type].page++;
                this.$refs.scroll && this.$refs.scroll.finishPullUp();
            },
            tabClick(index) {
                switch (index) {
                    case 0:
                        this.currentType = 'pop';
                        break;
                    case 1:
                        this.currentType = 'new';
                        break;
                    case 2:
                        this.currentType = "sell";
                        break
                }
                //修复两个tabcontrol 导致选中项不一致问题
                this.$refs.tabcontrol1.currentIndex = index;
                this.$refs.tabcontrol2.currentIndex = index;
            },

            contentScroll(position){
                this.isShowBackTop = (-position.y) > 1000;
                this.isTabFixed = (-position.y) > this.tabOffsetTop;
            },
            debounce(func, delay) {
                let timer = null;
                return function (...args) {
                    if (timer) {
                        clearTimeout(timer)
                    }
                    timer = setTimeout(() => {
                        func.apply(this, args);
                        
                    }, delay);
                }
            },
            pullingUpMore(){
                this.getHomeGoods(this.currentType)
            },
            backTopClick(){
                this.$refs.scroll.scrollTo(0,0)
            }
        }
    }
</script>

<style scoped>
    #home {
        position: relative;
        height: 100vh;
   
    }

    .home-nav {
        background-color: var(--color-tint);
        color: black;

        /* position: fixed;
        left: 0;
        right: 0;
        top: 0;
        z-index: 9; */
    }

    .tab-control {
        /* position: sticky; */
        position: relative;
        /* //top: 44px; */
        z-index: 9;
        background: white;
    }
    .content {
        overflow: hidden;
        position: absolute;
        top: 44px;
        bottom: 49px;
        left: 0;
        right: 0;   
    }
    /* .fixed{
        position: fixed;
        top:44px;
        left: 0;
        right: 4px;
    } */
    /* .content{
        height: calc(100% - 93px);
        overflow: hidden;
        margin-top: 44px;
        background-color: red;
    } */

    
</style>

<!-- 
    tabcontrol的吸顶效果
        必须知道滚动到多少时，开始有吸顶效果，这个时候获取tabcontrol的offsetTop
        但是，如果直接mounted中获取tabControl的offsetTop，那么值是不正确的
    如何获取正确的值了 ？
        监听HomeSwiper中img的加载完成
        加载完成后，发出事件，在Home.vue中，获取正确的值
        为了不让HomeSwiper多次发出事件
        可是使用isLoad的变量进行状态的记录
    监听滚动，动态的改变tabcontrol的样式
        问题：动态的改变tabcontrol的样式时，会出现两个问题
            问题一：下面的商品内容会突然上移
            问题二：tabcontrol虽然设置了fixed，但是也随着Better-Scroll一起滚出去了
        其他方案：
            在最上面，多复制了一份PlaceHolderTabControl组件，利用它来实现停留效果
            当用户滚动到一定位置时，PlaceHolderTabControl显示出来
            当用户滚动没有达到一定位置时，PlaceHolderTabControl隐藏起来
 -->

 <!-- 
    当在浏览首页时，滚动到一定位置，切换到其他tab，再切回来时滚动条需要停留在上一次滚动的位置
        keep-alive可以实现
        keepalive是vue内置组件，会缓存不活动的组件实例，防止重复渲染DOM
        Vue的缓存机制并不是直接存储Dom结构，而是将DOM节点抽象成了一个个VNode节点。因此，Vue的keep-alive缓存也是基于VNode节点而不是直接存储DOM节点
 -->