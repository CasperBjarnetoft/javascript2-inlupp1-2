<template>
<div class="container"> 
  <div class="row mt-5">
    <Card v-for="product in products" :key="product._id" :product="product" />
  </div>
</div>

</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Card from '../components/Card.vue'

export default {
  components: {
    Card,
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

<style>

</style>