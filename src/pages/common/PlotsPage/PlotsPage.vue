<template>
    <div class="PlotsPage">
        <h1>plots page</h1>
      <div class="">
          <section class="m-3rem" v-for="plot in plots" :id="plot.data.id" :key="plot.id">
            <h2>{{ plot.data.title }}</h2>
            <h3>{{ plot.data.description }}</h3>
            <ul>
              <li v-for="tag in plot.tags" :key="tag.id" class="tag"
                  v-bind:style="{ backgroundColor: tag.bg_color, color: tag.text_color }">{{ tag.name }}</li>
            </ul>
            <span>--------</span>
            <ul>
              <li v-for="person in plot.persons" class="tag" :key="person.id">{{ person.name }}</li>
            </ul>
            <div v-if="isAdmin">
              <button class="btn" @click="deletePlot(plot.data.id)">Delete</button>
              <hr>
            </div>
            <router-link tag="a" :to="{name: 'Plot', params: {id: plot.data.id}}">Read more {{ plot.data.id }}</router-link>
          </section>
        </div>
    </div>
</template>

<script>
  import { mapGetters} from "vuex";
  import _PlotsPage from "./_PlotsPage.scss";

  export default {
    computed: {
      ...mapGetters({
        plots: 'plots/PLOTS',
        isAdmin: 'users/IS_ADMIN',
        idPlot: 'plot/PLOT_ID'
      }),
    },
    beforeCreate() {
      this.$store.dispatch('plots/GET_PLOTS_FROM_API');
    },
    methods: {
      deletePlot(id) {
        // this.$store.commit('plot/SET_PLOT_ID_STATE', id)
        document.getElementById(id).style.backgroundColor = '#e12a1e';
        this.$store.dispatch('plots/DELETE_PLOT_FROM_API_BY_ID', +id)
        document.getElementById('form').reset();
      },
    },
    css: {
      _PlotsPage,
    },
  };
</script>