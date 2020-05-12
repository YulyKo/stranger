<template>
  <div class="main">
    <article v-for="hero in heroes" :id="hero.id" :key="hero.id">
      <router-link class="link" tag="a" :to="{name: 'Hero', params: {id: hero.id}}">{{ hero.name }}</router-link>
      <div v-if="isAdmin">
        <button class="btn" @click="deletePlot(hero.id)">Delete</button>
        <hr>
      </div>
    </article>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {},
  computed: {
      ...mapGetters({
          heroes: 'heroes/HEROES',
        isAdmin: 'users/IS_ADMIN',
      }),
  },
  beforeCreate() {
      this.$store.dispatch('heroes/GET_HEROES_FROM_API');
  },
  methods: {
    deletePlot(id) {
      document.getElementById(id).style.backgroundColor = '#e12a1e';
      this.$store.dispatch('heroes/DELETE_HERO_FROM_API_BY_ID', id)
    },
  },
}
</script>

<style>

</style>