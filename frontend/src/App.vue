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
</style>
