<template>
  <router-link to="/products" class="cards col-md-3 mb-5">
    <div class="card text-center h-100">
        <img :src="product.image" class="card-img-top h-100" alt="Fissure in Sandstone"/>
        <div class="card-body">
          <h5 class="card-title">{{ product.model }}</h5>
          <h5 class="card-title">{{ product.year }}</h5>
          <p class="card-text">{{product.price}}</p>
          <a href="#!" class="btn btn-primary">Buy</a>
        </div>
    </div>
  </router-link>
</template>

<script>
export default {
    name: "appCard",
    props: ['product']
}
</script>

<style scoped>
  .cards {
    color: black;
  }
</style>