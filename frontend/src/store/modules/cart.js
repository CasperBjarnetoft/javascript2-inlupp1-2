export default {
    state: {
        cart: []
    },
    getters: {
        shoppingCart: state => state.cart,
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
        CartRemoveItem: state => {
            let minus = 1
            state.cart.forEach(item => {
                item.quantity -= minus
            })
            return minus
        },
        CartAddItem: state => {
            let plus = 1
            state.cart.forEach(item => {
                item.quantity += plus
            })
            return plus
        }
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
    },
    actions: {
        addToCart: ({commit}, { product, quantity }) => {
            commit('ADD_TO_CART', { product, quantity })
        }
    }
  }