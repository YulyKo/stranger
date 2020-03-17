<template>
  <div>
    <h1>Art</h1>
    <article>
      <p>{{ art.author }}</p>
      <img :src="art.url" alt="">
      <h2>{{ art.title }}</h2>
      <p>{{ art.description }}</p>
    </article>
  </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "ArtPage",
        computed: {
            ...mapGetters({ art: 'art/ART' }),
        },
        beforeCreate() {
            this.$store.dispatch('art/GET_ART_FROM_API_BY_ID', this.$route.params.id);
        }
    }
</script>

<style scoped>

</style>