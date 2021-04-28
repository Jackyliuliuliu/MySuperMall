export default {
    addCarts(context, good) {
        var item = context.state.carts.find(item => item.id === good.id);
        if (item) {
            context.commit('addCount', item);
        } else {
            context.commit('addToCart', good)
        }
    }


}