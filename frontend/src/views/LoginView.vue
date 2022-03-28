<template>
<div class="container my-5 px-0 z-depth-1">

  <section class="p-5 my-md-5 text-center">

    <form class="my-5 mx-md-5" @submit.prevent="handleSubmit">

      <div class="row">
        <div class="col-md-6 mx-auto">
          <div class="card">
            <div class="card-body">

                <h3 class="font-weight-bold my-4 pb-2 text-center dark-grey-text">Log In</h3>

                <input type="email" id="defaultSubscriptionFormPassword" class="form-control mb-4" placeholder="Email" v-model="email">

                <input type="password" id="defaultSubscriptionFormEmail" class="form-control" placeholder="Password" v-model="password">

                <div class="text-center">
                  <button class="btn btn-primary mt-3">Login</button>
                </div>
  
            </div>
          </div>
        </div>
      </div>

    </form>

  </section>
  <!--Section: Content-->

</div>
  
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(['login']),
    async handleSubmit() {
      if(this.email.trim() === '' || this.password.trim() === '') {
        return
      }
      let user = {
        email: this.email,
        password: this.password
      }

      let route = this.$route.query.redirect
      this.login({user, route})
    }
  }
}
</script>

<style scoped>
    .container {
        height: 80vh;
    }
</style>