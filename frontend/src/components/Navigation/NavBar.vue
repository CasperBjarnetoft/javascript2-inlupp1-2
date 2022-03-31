<template>
    <nav class="navbar navbar-expand-lg navbar-dark">
    <div class="container">
        <button
        class="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarTogglerDemo03"
        aria-controls="navbarTogglerDemo03"
        aria-expanded="false"
        aria-label="Toggle navigation"
        >
        <i class="fas fa-bars"></i>
        </button>
        <a class="text-light fs-4 fw-bolder pe-5" href="/">Motorcycle shop</a>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul class="navbar-nav me-auto mb-1 mb-lg-0">
            <li class="nav-item">
            <router-link to="/" class="nav-link rounded active" aria-current="page">Home</router-link>
            </li>
            <li class="nav-item">
            <router-link to="/products" class="nav-link rounded active" aria-current="page">Products</router-link>
            </li>
            <li class="nav-item" v-if="loggedIn">
            <router-link to="/orders" class="nav-link rounded active" aria-current="page">Orders</router-link>
            </li>
        </ul>
        <div class="d-flex align-items-center">
            <div class="navbar-nav d-flex">
                <li class="dropdown">
                    <a
                    class="nav-link text-light dropdown-toggle hidden-arrow"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false"
                    >
                    <i class="fas fa-shopping-cart"></i>
                    <span class="badge rounded-pill badge-notification bg-danger">{{ cartItemCount }}</span>
                    </a>
                    <div
                    class="shopping-cart dropdown-menu dropdown-menu-end"
                    aria-labelledby="navbarDropdownMenuLink"
                    >
                      <ShoppingCart />
                    </div>
                </li>
                <li class="dropdown" v-if="loggedIn">
                    <a
                    class="nav-link text-light dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false"
                    >
                    <i class="fas fa-user"></i>
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                        <a class="dropdown-item" href="#">Profile</a>
                    </li>
                    <li><hr class="dropdown-divider" /></li>
                    <li>
                        <router-link class="dropdown-item" to="/login" @click="logout">Logout</router-link>
                    </li>
                    </ul>
                </li>
                <router-link to="/login" class="text-light mt-2 ms-1" v-else>Login</router-link>
            </div>
            
        </div>
      </div>
    </div>
    </nav>
</template>

<script>
import ShoppingCart from '../shoppingCart/ShoppingCart.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
    components: {
        ShoppingCart,
    },
    computed: {
        ...mapGetters(['cartItemCount', 'loggedIn'])
    },
    methods: {
        ...mapActions(['logout'])
    }

}
</script>

<style scoped>
.shopping-cart {
    min-width: 550px;
}
nav {
    background-color: #063971;
}
.nav-link:hover {
    background-color: #0b4d94;
}
</style>