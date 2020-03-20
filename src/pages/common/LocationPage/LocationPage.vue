<template>
  <div>
    <article>
      <h1>{{ location[0].name }}</h1>
      <img :src="this.location[0].photo_url" alt="no photo">
      <p>{{ location[0].author }}</p>
    </article>
  </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "LocationPage",
        computed: {
            ...mapGetters({location: 'location/LOCATION'})
        },
        beforeCreate() {
            this.$store.dispatch('location/GET_LOCATION_FROM_API_BY_ID',  this.$route.params.id)
        }
    }
</script>

<style scoped>

</style>