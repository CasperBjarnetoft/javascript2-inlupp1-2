<template>
      <div class="p-3">
        <div class="d-flex">
          <div class="w-25 h-25 me-2">
            <img :src="item.product.image" class="img-fluid">
          </div>
          <div>
            <h5>{{ item.product.model }}</h5>
            <p>{{ item.product.price }} kr</p>
          </div>
        </div>
      </div>
      <li><hr class="dropdown-divider" /></li>
</template>

<script>
export default {
    props: ['item']

}
</script>

<style scoped>
    li {
        list-style: none;
    }

</style>