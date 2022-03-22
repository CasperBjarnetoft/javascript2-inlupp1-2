<template>
    <div class="d-flex justify-content-center">
      <div class="mt-5 mb-5 bg-light w-25 shadow-5-strong rounded">
        <div class="text-center mb-3">
            <img :src="product.image" class="h-50 w-100 img-fluid"/>
            <div class="p-1">
                <h5>{{ product.model }}</h5>
                <h5>{{ product.year }}</h5>
                <p>{{ product.price}}</p>
                <p>{{ product.description}}</p>
            </div>
            <a href="#!" class="btn btn-primary"><i class="fa-solid fa-cart-arrow-down"></i> Add to cart</a>
        </div>
      </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    props: ['id'],
    methods: {
        ...mapActions(['getProduct'])
    },
    created() {
        this.getProduct(this.id)
    },
    computed: {
        ...mapGetters(['product'])
    }
}
</script>

<style>

</style>