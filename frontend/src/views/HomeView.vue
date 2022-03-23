<template>
  <header>
    <div
      class="p-5 text-center bg-image"
      style="
        background-image: url('https://images.unsplash.com/photo-1558981001-1995369a39cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
        height: 400px;
      "
    >
      <div class="mask" style="background-color: rgba(0, 0, 0, 0.8);">
        <div class="d-flex justify-content-center align-items-center h-100">
          <div class="text-white">
            <h1 class="mb-3">The best dealer website for motorcycles</h1>
            <h4 class="mb-3">Click here to show full collection</h4>
            <router-link to="/products" class="btn btn-primary btn-lg" role="button"
            >Collection</router-link>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="container text-center mt-3 mb-3">
    <h1 class="text-dark">Top motorcycles</h1>
    <div class="row">
      <Card v-for="product in products.slice(0, 4)" :key="product._id" :product="product" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Card from '../components/ProductCard.vue'

export default {
  components: {
    Card
  },
    methods: {
    ...mapActions(['getProducts'])
  },
  created() {
    this.getProducts()
  },
  computed: {
    ...mapGetters(['products'])
  }
}
</script>

<style scoped>
.home {
  height: 100vh;
}
</style>