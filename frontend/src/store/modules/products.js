import axios from 'axios'

export default {
  state: {
      products: []
  },
  getters: {
      products: state => state.products
  },
  mutations: {
      SET_PRODUCTS: (state, products) => {
          state.products = products
      }
  },
  actions: {
      getProducts: async ({commit}) => {
          const res = await axios.get('http://localhost:9999/api/motorcycles')
          commit('SET_PRODUCTS', res.data)
      }
  },
}