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
        </ul>
        </div>
        <div class="d-flex align-items-center">
            <ul class="navbar-nav d-flex flex-row">
                <li class="nav-item me-3 me-lg-0 dropdown">
                    <a
                    class="nav-link text-light dropdown-toggle hidden-arrow"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false"
                    >
                    <i class="fas fa-shopping-cart"></i>
                    <span class="badge rounded-pill badge-notification bg-danger">0</span>
                    </a>
                    <div
                    class="dropdown-menu dropdown-menu-end shopping-cart"
                    aria-labelledby="navbarDropdownMenuLink"
                    >
                      <ShoppingCart />
                    </div>
                </li>
                <li class="nav-item me-3 me-lg-0 dropdown">
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
                        <a class="dropdown-item" href="#">Logout</a>
                    </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
    </nav>
</template>

<script>
import ShoppingCart from '../shoppingCart/ShoppingCart.vue'

export default {
    components: {
        ShoppingCart,
    }

}
</script>

<style scoped>
nav {
    background-color: #063971;
}
.btn {
    background-color: #0a54a3;
}
.btn:hover {
    background-color: #0f60b6;
}
.nav-link:hover {
    background-color: #0b4d94;
}

</style>