<template>
  <div>
    <h1>{{ hero.name }}</h1>
    <h2>{{ hero.shot_description }}</h2>
    <p>Age: {{ hero.age }}</p>
    <p>{{ hero.sex }}</p>
    <p>{{ hero.story_of_life }}</p>
  </div>
</template>

<script>
  import { mapGetters } from "vuex";

  export default {
    props: {},
    computed: {
      ...mapGetters({
          hero_from_store: 'heroes/HERO'
      }),
      hero() {
        return this.hero_from_store[0];
      },
    },
    beforeCreate() {
      this.$store.dispatch('heroes/GET_HERO_FROM_API_BY_ID', this.$route.params.id);
    },
  };
</script>

<style>

</style>