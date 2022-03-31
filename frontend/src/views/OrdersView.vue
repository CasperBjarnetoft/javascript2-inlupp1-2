<template>
<div class="container my-5 py-3 z-depth-1 rounded bg-light" v-for="order in Orders" :key="order">
    <h1>Order</h1>
    <OrderCard v-for="item in order.cart" :key="item.product._id" :item="item"/>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import OrderCard from '../components/OrderCard.vue'

export default {
  components: { OrderCard },
  methods: {
    ...mapActions(['getOrders'])
  },
  created() {
    this.getOrders()
  },
  computed: {
    ...mapGetters(['Orders'])
  }

}
</script>

<style scoped>
  body {
    height: 80vh;
  }
</style>