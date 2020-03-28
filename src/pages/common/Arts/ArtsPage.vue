<template>
<!--
  __ = block
  _  = element
  -- = modifier
-->
  <div class="arts-page">
    <h1 class="arts-page_title">Arts</h1>
    <article class="arts-page__card" v-for="(art, id) in arts" :key="id">
      <img class="arts-page__card_image" :src="art.url" alt="problem in 14">
      <h2 class="arts-page__card_title">{{ art.title }}</h2>
      <router-link class="arts-page__card_link" :to="{name: 'Art', params: {id: art.id}}">Read more</router-link>
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

<style lang="scss" scoped>
  .arts-page__card_image {
    height: 20rem;
  }
</style>