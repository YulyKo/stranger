<template>
  <div>
    <article class="location">
      <h1 class="text text-xl">{{ location.name }}</h1>
      <img class="location__img" :src="this.location.photo_url" alt="no photo">
      <p class="text text-m text--author">{{ location.author }}</p>
    </article>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'LocationPage',
  computed: {
    ...mapGetters({ location: 'location/LOCATION' }),
  },
  beforeCreate() {
    this.$store.dispatch('location/GET_LOCATION_FROM_API_BY_ID', this.$route.params.id);
  },
};
</script>

<style lang="sass" scoped>
@import '../../../main'
.location
  background-color: $page-yellow
  &__img
    height: 36rem
    display: block
    margin: 0 auto
.text--author
  margin-top: 2.67rem
  margin-bottom: 0
  padding-bottom: 2.67em
  text-align: center
</style>
