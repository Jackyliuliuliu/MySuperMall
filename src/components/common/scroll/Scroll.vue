<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'

    
    export default {
        name: "Scroll",
        data(){
            return{
                scroll:null
            }
        },
        mounted() {
            this.scroll = new BScroll(this.$refs.wrapper, {
                probeType:3,
                pullUpLoad: true,
                click:true
            })

            //监听上拉的位置，默认参数postion
            this.scroll.on('scroll', (position) => {
                this.$emit('scroll', position)
            })
            //监听上拉事件
            this.scroll.on('pullingUp',()=>{
                this.$emit("pullingUp");
        
            })
        },
        methods:{
            refresh(){
                this.scroll && this.scroll.refresh();
            },
            finishPullUp(){
                this.scroll && this.scroll.finishPullUp();
            },
            scrollTo(x, y, time = 300) {
                this.scroll && this.scroll.scrollTo &&  this.scroll.scrollTo(x, y, time)
            }
        }

    }
</script>

<style scoped>

</style>