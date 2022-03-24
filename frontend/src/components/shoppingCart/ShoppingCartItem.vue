<template>
      <div class="d-flex p-3">
        <div class="d-flex">
          <div class="w-25 h-25 me-2">
            <img :src="item.product.image" class="img-fluid">
          </div>
          <div>
            <h5>{{ item.product.model }}</h5>
            <p>{{ item.product.price }} kr</p>
          </div>
        </div>
        <div class="d-flex justify-content-around">
          <button type="button" class="btn btn-primary btn-floating" @click.stop="RemoveFromeCart({product: item.product, quantity: 1})">-</button>
          <p class="m-2">{{ item.quantity }}</p>
          <button type="button" class="btn btn-primary btn-floating" @click.stop="addToCart({product: item.product, quantity: 1})">+</button>
        </div>
        <div class="ms-3">
          <button type="button" class="btn btn-danger btn-rounded" @click.stop="RemoveCartItem({product: item.product })">X</button>
        </div>
      </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    props: ['item'],
    methods: {
      ...mapActions(['addToCart', 'RemoveFromeCart', 'RemoveCartItem'])
    }
}
</script>

<style>

</style>