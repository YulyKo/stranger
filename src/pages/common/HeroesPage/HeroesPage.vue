<template>
  <div>
    <article v-for="(hero, id) in heroes" :key="id">
      <img src="" alt="hero art">
      <router-link tag="h2" :to="{name: 'Hero', params: {id: hero.id}}">{{ hero.name }}</router-link>
    </article>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {},
  computed: {
      ...mapGetters({
          heroes: 'heroes_module/HEROES'
      }),
  },
  beforeCreate() {
      this.$store.dispatch('heroes_module/GET_HEROES_FROM_API');
  }
}
</script>

<style>

</style>