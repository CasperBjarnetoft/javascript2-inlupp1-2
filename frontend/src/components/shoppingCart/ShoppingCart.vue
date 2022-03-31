<template>
  <div class="container">
      <div class="d-flex justify-content-between">
        <header class="text-center m-2 fs-3 fw-bolder">Cart</header>
        <router-link to="/" class="text-dark m-2 text-decoration-underline" @click.prevent="handleSubmit" v-if="loggedIn">Save cart</router-link>
      </div>
      <li><hr class="dropdown-divider" /></li>
      <div v-if="shoppingCart.length < 1" class="text-center m-3">
        <h4>No products</h4>
      </div>
      <ShoppingCartItem v-for="item in shoppingCart" :key="item.product._id" :item="item"/>
      <div class="mb-3 mt-2">
        <li><hr class="dropdown-divider" /></li>
        <div class="d-flex justify-content-between">
          <h4>Total cost: {{ ShoppingCartTotal }} Kr</h4>
          <button type="button" class="btn btn-primary">checkout</button>
        </div>
      </div>
  </div>
</template>

<script>
import {  mapActions, mapGetters } from 'vuex'
import ShoppingCartItem from './ShoppingCartItem.vue'

export default {
  components: { ShoppingCartItem },
  computed: {
    ...mapGetters([ 'shoppingCart', 'ShoppingCartTotal', 'loggedIn', 'userid'])
  },
  methods: {
      ...mapActions(['postOrder']),
      handleSubmit () {
        this.postOrder({cart: this.shoppingCart})
      }
  },
}

</script>

<style scoped>
</style>