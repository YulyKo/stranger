<template>
  <div>
    <h1>Relationships</h1>
    <article v-for="(relationship, id) in relationships" :key="id">
      <h2>{{ relationship.id_first_hero }}</h2>
      <h2>{{ relationship.id_second_hero }}</h2>
      <p>{{ relationship.id_type_relationship }}</p>
      <router-link :to="{name: 'Relationship', params: {id: relationship.id}}"></router-link>
    </article>
  </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "RelationshipsPage",
        computed: {
            ...mapGetters({ relationships: 'relationships_module/RELATIONSHIPS' })
        },
        beforeCreate() {
            this.$store.dispatch('relationships_module/GET_RELATIONSHIPS_FROM_API');
        }
    }
</script>

<style scoped>

</style>