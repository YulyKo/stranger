<template>
    <div class="PlotsPage">
        <h1>plots page</h1>
      <div class="">
        <span>{{plots[0].data.title}}</span>
        <span>{{plots[0].data.description}}</span>
          <section class="m-3rem" v-for="plot in plots" :key="plot.id">
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
            <router-link tag="a" :to="{name: 'Plot', params: {id: plot.data.id}}">Read more {{ plot.data.id }}</router-link>
          </section>
        </div>
    </div>
</template>

<script>
  import { mapGetters} from "vuex";
  import _PlotsPage from "./_PlotsPage.scss";

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