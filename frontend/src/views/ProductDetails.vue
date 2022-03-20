<template>
    <div>
        <h1>hej</h1>
    </div>
</template>

<script>
import{ mapActions, mapGetters } from 'vuex'

export default {
    props: ['_id'],
    methods: {
        ...mapActions(['getProduct', 'clearPost'])
    },
    created() {
        this.getProduct(this.id)
    },
    computed: {
        ...mapGetters(['product'])
    },
    unmounted() {
        this.clearPost()
    }

}
</script>

<style>

</style>