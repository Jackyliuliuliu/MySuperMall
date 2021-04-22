import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        goods: [],

        carts: [],

    },
    mutations: {
        addGoods(state, goods) {
            state.goods = goods;
        },
        // addCarts(state,good){
        //     var item =state.carts.find(item=>item.id ===good.id)
        //     if(item != undefined){
        //         item.count++;
        //         console.log(item.count)
        //         console.log(state.carts)
        //     }else{
        //         state.carts.push(good);
        //         console.log(state.carts)

        //     }

        // }
        addCount(state, good) {
            good.count++;
        },
        addToCart(state, good) {
            state.carts.push(good);
            //this.$toast.show("添加新商品",200);
        }

    },
    actions: {
        addCarts(context, good) {
            var item = context.state.carts.find(item => item.id === good.id);
            if (item) {
                context.commit('addCount', item);
            } else {
                context.commit('addToCart', good)
            }
        }


    }
})

export default store
