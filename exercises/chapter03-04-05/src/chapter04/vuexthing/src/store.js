import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        list: [
            {
                id: 1,
                name: 'Dispatch Note 01'
            },
        ]
    },

    mutations: {
        add(state, note) {
            state.list.push(note)
        },
        remove(state, id) {
            state.list = state.list.filter(x => x.id !== id)
        }
    }
})
