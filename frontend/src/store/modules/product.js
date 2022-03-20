import axios from "axios"

export default {
    state: {
        product: null
    },
    getters: {
        product: state => state.product
    },
    mutations: {
        SET_PRODUCT: (state, product) => {
            state.product = product
        },
        CLEAR_PRODUCT: state => {
            state.product = null
        }
    },
    actions: {
        getPost: async ({commit}, _id) => {
            const res = await axios.get('http://localhost:9999/api/motorcycles/' + _id)
            commit('SET_POST', res.data)
        },
        clearProduct: ({commit}) => {
            commit('CLEAR_PRODUCT')
        }
    },
    modules: {

    }
  }