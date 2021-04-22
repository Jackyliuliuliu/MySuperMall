<template>
    <div class="bottom-menu">
        <div class="bottom-menu">
            <check-button class="select-all" v-model="isSeceltAll" @checkBtnClick="selectAllClick"></check-button>
            <span>全选</span>
            <span class="total-price">合计: ¥</span>
            <span class="buy-product">去计算()</span>
        </div>
    </div>
</template>

<script>
    import CheckButton from './CheckButton'

    export default {
        name: "BottomBar",
        components: {
            CheckButton,
        },
        computed: {
            isSeceltAll() {
                return this.$store.state.carts.every(item => item.isChecked)
            }
        },
        methods: {
            selectAllClick() {
                this.$store.state.carts.forEach(item => {
                    item.isChecked = !temp
                });
            }
        }

    }
</script>

<style scoped>
    .bottom-menu {
        position: fixed;
        width: 100%;
        height: 44px;
        background-color: #eee;
        bottom: 50px;
        left: 0;
        box-shadow: 0 -2px 3px rgba(0, 0, 0, .2);
        font-size: 14px;
        color: #888;
        line-height: 44px;
        padding-left: 35px;
        box-sizing: border-box;
    }

    .select-all {
        position: absolute;
        line-height: 0;
        left: 12px;
        top: 13px;
    }
</style>