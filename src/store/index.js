import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        quantity: 3,
        treasure: 1,
    },
    getters: {
        quantity(state) {
            return state.quantity
        },
        treasure(state) {
            return state.treasure
        },
        
    },
    mutations: {
        setQuantity(state, value) {
            state.quantity = value
        },
        setTreasure(state, value) {
            state.treasure = value
        },
    },
    actions: {
        setQuantity({ commit }, value) {
            commit('setQuantity', value)
        },
        setTreasure({ commit }, value) {
            commit('setTreasure', value)
        },
    },
    modules: {
    }
})
