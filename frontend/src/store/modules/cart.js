import axios from 'axios'

export default {
    state: {
        cart: [],
        orders: null,
    },
    getters: {
        shoppingCart: state => state.cart,
        Orders: state => state.orders,
        cartItemCount: state => {
            let items = 0
            state.cart.forEach(item => {
                items += item.quantity
            });
            return items
        },
        ShoppingCartTotal: state => {
            let total = 0
            if(state.cart.length !== 0) {
                state.cart.forEach(item => {
                    total += item.product.price * item.quantity
                })
            }
            return total
        },
    },
    mutations: {
        ADD_TO_CART: (state, { product, quantity }) => {
            let exist = state.cart.find(item => item.product._id == product._id)
            if(exist) {
                exist.quantity += quantity
                return
            }
            state.cart.push({ product, quantity })
        },
        REMOVE_FROME_CART: (state, { product, quantity }) => {
            let exist = state.cart.find(item => item.product._id == product._id)
            if(exist.quantity > 1) {
                exist.quantity -= quantity
                return
            }        
            else {
                state.cart = state.cart.filter(item => item.product._id !== product._id ) 
            }
        },
        REMOVE_CART_ITEM: (state, { product }) => {
            state.cart = state.cart.filter(item => item.product._id !== product._id ) 
        },
        SET_ORDERS: (state, orders) => {
            state.orders = orders
        }
        
    },
    actions: {
        addToCart: ({commit}, { product, quantity }) => {
            commit('ADD_TO_CART', { product, quantity })
        },
        RemoveFromeCart: ({commit}, { product, quantity }) => {
            commit('REMOVE_FROME_CART', { product, quantity })
        },
        RemoveCartItem: ({commit}, { product }) => {
            commit('REMOVE_CART_ITEM', { product })
        },
        postOrder: async (context, order) => {
                console.log(order)
                let token = localStorage.getItem('token')
                const config = {
                    headers: { Authorization: `Bearer ${token}` }
                }
                const res = await axios.post('http://localhost:9999/api/cart', order, config)
                console.log(res.data)
        },
        getOrders: async({commit}) => {             
                let token = localStorage.getItem('token')
                const config = {
                    headers: { Authorization: `Bearer ${token}` }
                }
                const res = await axios.get('http://localhost:9999/api/cart/orders', config)
                commit('SET_ORDERS', res.data)

        }
    }
  }