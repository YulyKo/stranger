<template>
  <button class="btn" @click="deletePlot()">Delete</button>
</template>

<script>

  import {mapGetters} from "vuex";

  export default {
    name: "DeletePlot",
    computed: {
      ...mapGetters({
        idPlot: 'plot/PLOT_ID'
      })
    },
    methods: {
      deletePlot() {
        this.$store.dispatch('plots/DELETE_PLOT_FROM_API_BY_ID', +this.idPlot)
        document.getElementById('form').reset();
      }
    }
  }
</script>

<style scoped>

</style>