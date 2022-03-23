import { createStore } from 'vuex'
import products from './modules/products'
import product from './modules/product'
import cart from './modules/cart'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    products,
    product,
    cart
  }
})
