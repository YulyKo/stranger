<template>
  <div>
    <h1 class="text text-l">{{ hero.name }}</h1>
    <h2 class="text text-m">{{ hero.shot_description }}</h2>
    <hr>
    <p class="text text-s">Age: {{ hero.age }}</p>
    <hr>
    <p class="text text-s">{{ hero.sex }}</p>
    <hr>
    <p class="text text-s">{{ hero.story_of_life }}</p>
  </div>
</template>

<script>
  import { mapGetters } from "vuex";

  export default {
    props: {},
    computed: {
      ...mapGetters({
          hero: 'heroes/HERO'
      }),
    },
    beforeCreate() {
      this.$store.dispatch('heroes/GET_HERO_FROM_API_BY_ID', this.$route.params.id);
    },
  };
</script>

<style>

</style>