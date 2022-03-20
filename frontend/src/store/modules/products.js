import axios from 'axios'

export default {
  state: {
      products: []
  },
  getters: {
      products: state => state.products
  },
  mutations: {
      SET_PRODUCT: (state, newProducts) => {
          state.products = newProducts
      }
  },
  actions: {
      getProducts: async ({commit}) => {
          const res = await axios.get('http://localhost:9999/api/motorcycles')
          commit('SET_PRODUCT', res.data)
      }
  },
}