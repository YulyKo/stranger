<template>
  <div class="PlotPage">
    <h2 class="text">{{ plot[0].title }}</h2>
    <h2 class="text">{{ plot[0].description }}</h2>
    <p class="text text--author">by {{ plot[0].author }}</p>
      <div v-for="(tag, id) in tags" :key="id">
        <p class="text">{{ tag.name }}</p>
      </div>
<!--      <div v-for="(heroes, id) in plot[0].heroes" :key="id">-->
<!--        <p>{{ heroes.name }}</p>-->
<!--      </div>-->
    <p class="text">{{ plot[0].text }}</p>
  </div>
</template>

<script>
  import {mapGetters} from "vuex";
  import _PlotPage from './_PlotPage.scss';

  export default {
      props: {},
      computed: {
          ...mapGetters({plot_from_store: 'plot/PLOT', tags: 'tags/TAGS'}),
          plot() {
              return this.plot_from_store;
          },
      },
      methods: {},
      beforeCreate() {
          this.$store.dispatch('tag/GET_TAG_FROM_API_BY_ID', {category: 'plot_tag', id: this.$route.params.id});
          this.$store.dispatch('plot/GET_PLOT_FROM_API_BY_ID', this.$route.params.id);
      },
      created() {},
      css: [
          _PlotPage,
      ]
  };
</script>
