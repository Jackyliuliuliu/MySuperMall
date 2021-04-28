import Vue from 'vue'
import Vuex from 'vuex'
import Actions from './actions'
import mutations from './mutations'
import Mutations from './mutations'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        goods: [],

        carts: [],

    },

    actions: Actions,
    mutations:Mutations
})

export default store
