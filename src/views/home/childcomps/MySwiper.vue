<template>
    <div class="hyslide">
        <div class="slidedd">
            <div class="simg">
                <img src="~assets/img/profile/avatar.svg" alt="">
            </div>
            <div class="simg">
                <img src="~assets/img/profile/avatar.svg" alt="">
            </div>
            <div class="simg">
                <img src="~assets/img/profile/avatar.svg" alt="">
            </div>
            <div class="simg">
                <img src="~assets/img/profile/avatar.svg" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MySwiper",
        data: function () {
            return {
                currentIndex: 1,
                totalWidth: 0,
                swiperStyle: {},
                interval: 3000

            }

        },

        mounted() {
            setTimeout(() => {
            // 1.获取要操作的元素
            let swiperEl = document.querySelector('.slidedd');
            if(!swiperEl){
                return;
            }
            let slidesEls = swiperEl && swiperEl.getElementsByClassName('simg');

            // 2.保存个数
            this.slideCount = slidesEls.length;
            // 3.如果大于1个, 那么在前后分别添加一个slide
            if (this.slideCount > 1) {
                let cloneFirst = slidesEls[0].cloneNode(true);
                let cloneLast = slidesEls[this.slideCount - 1].cloneNode(true);
                swiperEl.insertBefore(cloneLast, slidesEls[0]);
                swiperEl.appendChild(cloneFirst);
                this.totalWidth = swiperEl.offsetWidth;
                this.swiperStyle = swiperEl.style;
            }

            //4.让swiper元素, 显示第一个(目前是显示前面添加的最后一个元素)


            window.setInterval(() => {
                this.currentIndex = this.currentIndex + 1;
 
                this.swiperStyle.transition = 'transform ' + 300 + 'ms';
                this.setTransform(-this.currentIndex * this.totalWidth);

                this.checkPosition();

            }, this.interval);

            }, 3000)

        },
        methods:{
            setTransform(position) {
                this.swiperStyle.transform = `translate3d(${position}px, 0, 0)`;
                this.swiperStyle['-webkit-transform'] = `translate3d(${position}px), 0, 0`;
                this.swiperStyle['-ms-transform'] = `translate3d(${position}px), 0, 0`;
            },
            checkPosition() {
                window.setTimeout(() => {
                    this.swiperStyle.transition = '0ms';//如果不设置为0ms话，会导致闪一下
                    if (this.currentIndex >= this.slideCount + 1) {
                        this.currentIndex = 1;
                        this.setTransform(-this.currentIndex * this.totalWidth)
                    }
                }, 300)
            }

        }

    }
</script>
<style scoped>
    .hyslide{
        overflow: hidden;
        /* 当元素超过设定得宽度和高度时，超出部分得内容会被隐藏 */
        position: relative;
    }
    .slidedd {
        display: flex;
    }

    .simg {
        width: 100%;
        flex-shrink: 0;
        /* flex-shrink的默认值为1，当父元素的宽度小于所有子元素的宽度的和时，子元素的宽度会减小。值越大，减小的越厉害。如果值为0，表示不减小。 */
    }

    .simg img {
        width: 100%;
        height: 60px;
    }

    .simg span {
        width: 100%;
        text-align: center;
    }
</style>