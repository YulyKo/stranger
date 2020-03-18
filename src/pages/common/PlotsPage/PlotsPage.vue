<template>
    <div class="PlotsPage">
        <h1>plots page</h1>
        <div class="">
          <section class="m-3rem" v-for="(plot, id) in plots" :key="id">
            <h2>{{ plot.title }}</h2>
            <h3>{{ plot.description }}</h3>
<!--            <ul>-->
<!--              <li v-for="(tag, id) in plot.tags" :key="id">{{ tag }}</li>-->
<!--            </ul>-->
            <router-link tag="a" :to="{name: 'Plot', params: {id: plot.id}}">Read more {{ plot.id }}</router-link>
          </section>
        </div>
    </div>
</template>

<script>
  import { mapGetters} from "vuex";
  import _PlotsPage from './_PlotsPage.scss'

  export default {
    props: {
    },
    computed: {
      ...mapGetters({
        plots: 'plots/PLOTS',
      }),
    },
    beforeCreate() {
      this.$store.dispatch('plots/GET_PLOTS_FROM_API');
    },
    css: {
      _PlotsPage,
    },
  };
</script>
