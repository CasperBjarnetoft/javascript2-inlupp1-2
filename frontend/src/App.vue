<template>
  <Navbar />
  <router-view/>
  <Footer />
</template>

<script>
import Navbar from './components/Navigation/NavBar.vue'
import Footer from './components/Navigation/Footer.vue'

export default {
  components: {
    Navbar,
    Footer,
  }
}
</script>

<style>
  body {
    background-color: lightgray;
  }
  .btn-primary {
    background-color: #0a54a3;
  }
  .btn-primary:hover {
      background-color: #0f60b6;
  }
</style>
