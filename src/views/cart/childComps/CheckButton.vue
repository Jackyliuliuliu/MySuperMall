<template>
    <div>
        <img class="icon-selector" :class="{'selector-active': isChecked}" src="~/assets/img/cart/tick.svg"
            @click="selectItem" alt="">
    </div>
</template>

<script>

    export default {
        name: "CheckButton",
        methods: {
            selectItem() {
                this.$emit('checkBtnClick');
            }
        },
        props: {
            value: {
                type: Boolean,
                default: true
            }
        },
        data: function () {
            return {
                isChecked: this.value
            }
        },
        watch: {
            value: function (newValue) {
                this.isChecked = newValue;
            }
        }

    }
</script>

<style scoped>
    .icon-selector {
        position: relative;
        margin: 0;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        border: 2px solid #ccc;
        cursor: pointer;
    }

    .selector-active {
        background-color: #ff8198;
        border-color: #ff8198;
    }
</style>