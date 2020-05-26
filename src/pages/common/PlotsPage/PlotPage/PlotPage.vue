<template>
  <div class="PlotPage">
    {{plot.data.title}}
    <h2 class="text">{{ plot.data.title }}</h2>
    <h2 class="text">{{ plot.data.description }}</h2>
    <p class="text text--author">by {{ plot.data.author }}</p>
    <div v-for="tag in plot.tags" :key="tag.id">
      <p class="text">{{ tag.name }}</p>
    </div>
     <div v-for="hero in plot.heroes" :key="hero.id">
       <p>{{ hero.name }}</p>
     </div>
     <div v-for="location in plot.locations" :key="location.id">
       <p>{{ location.name }}</p>
     </div>
    <p class="text">{{ plot.text }}</p>
  </div>
</template>

<script>
  import {mapGetters} from "vuex";
  import _PlotPage from './_PlotPage.scss';

  export default {
      props: {},
      computed: {
        ...mapGetters({
          plot: 'plot/PLOT'
          }),
      },
      methods: {},
      beforeCreate() {
          this.$store.dispatch('plot/GET_PLOT_FROM_API_BY_ID', this.$route.params.id);
      },
      created() {},
      css: [
          _PlotPage,
      ]
  };
</script>
<style scoped>
  @import "_PlotPage.scss";
</style>
