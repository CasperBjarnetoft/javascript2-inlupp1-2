<template>
  <div class="details">
    <div class="d-flex justify-content-center">
      <div class="mt-5 mb-5 bg-light w-25 shadow-5-strong rounded">
        <div class="text-center mb-3">
            <img :src="product.image" class="h-50 w-100 img-fluid"/>
            <div class="p-1">
                <h5>{{ product.model }}</h5>
                <h5>{{ product.year }}</h5>
                <p>{{ product.price}} Kr</p>
                <p>{{ product.description}}</p>
            </div>
            <button @click="addToCart({ product, quantity })" class="btn btn-primary"><i class="fa-solid fa-cart-arrow-down"></i> Add to cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    props: ['id'],
    data() {
        return {
            quantity: 1
        }
    },
    methods: {
        ...mapActions(['getProduct', 'addToCart'])
    },
    created() {
        this.getProduct(this.id)
    },
    computed: {
        ...mapGetters(['product'])
    }
}
</script>

<style scoped>
    .details {
        height: 85vh;
    }
</style>