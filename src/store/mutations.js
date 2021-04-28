export default {
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
    }

}