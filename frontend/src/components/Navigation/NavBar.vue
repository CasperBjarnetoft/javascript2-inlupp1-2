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
        <form class="d-flex input-group w-auto">
            <input
            type="search"
            class="form-control"
            placeholder="Search..."
            aria-label="Search"
            />
            <button
            class="btn text-light"
            type="button"
            data-mdb-ripple-color="dark"
            >
            <i class="fa-solid fa-magnifying-glass"></i>
            </button>
        </form>
        </div>
    </div>
    </nav>
</template>

<script>
export default {

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