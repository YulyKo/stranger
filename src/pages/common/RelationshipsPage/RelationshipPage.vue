<template>
  <div>
    <h1>RELATIONSHIP {{this.$route.params.id}}</h1>
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
            this.$store.dispatch('relationship/GET_RELATIONSHIP_FROM_API_BY_ID', this.$route.params.id)
        }
    }
</script>

<style scoped>

</style>