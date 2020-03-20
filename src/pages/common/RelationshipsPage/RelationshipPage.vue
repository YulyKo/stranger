<template>
  <div>
    <h1>RELATIONSHIP {{this.$route.params.id}}</h1>
    <article>
      <h2>data about first hero*</h2>
    </article>
    <article>
      <h2>data about second hero*</h2>
    </article>
    <article>
      <p></p>
    </article>
  </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "RelationshipPage",
        computed: {
            ...mapGetters({relationship: 'relationship/RELATIONSHIP'})
        },
        beforeCreate() {
            this.$store.dispatch('relationship/GET_RELATIONSHIP_FROM_API_BY_ID', this.$route.params.id);
        }
    }
</script>

<style scoped>

</style>