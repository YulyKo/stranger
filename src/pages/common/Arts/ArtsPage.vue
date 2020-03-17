<template>
  <div>
    <h1>Arts</h1>
    <article v-for="(art, id) in arts" :key="id">
      <img :src="art.url" alt="problem in 14">
      <h2>{{ art.title }}</h2>
      <router-link :to="{name: 'Art', params: {id: art.id}}">Read more</router-link>
    </article>
  </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "ArtsPage",
        computed: {
            ...mapGetters({ arts: 'arts/ARTS'})
        },
        beforeCreate() {
            this.$store.dispatch('arts/GET_ARTS_FROM_API');
        }
    }
</script>

<style scoped>

</style>