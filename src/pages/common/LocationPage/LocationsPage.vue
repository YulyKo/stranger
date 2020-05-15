<template>
  <div>
    <article v-for="location in locations" :key="location.id">
      <img :src="location.photo_url" alt="no photo">
      <h1>{{ location.name }}</h1>
      <p>{{ location.id }}</p>
      <router-link class="menu__hero_link-container" tag="a" :to="{name: 'Location', params: {id: location.id}}"></router-link>
    </article>
      
  </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "LocationsPage",
        data() {
            return {}
        },
        computed: {
            ...mapGetters({locations: 'locations/LOCATIONS'})
        },
        beforeCreate() {
            this.$store.dispatch('locations/GET_LOCATIONS_FROM_API')
        },
    }
</script>

<style scoped>
  .menu__hero_link-container {
    display: block;
    height: 41px;
    width: 41px;
    background: url("https://image.flaticon.com/icons/svg/598/598494.svg") no-repeat;
  }
</style>