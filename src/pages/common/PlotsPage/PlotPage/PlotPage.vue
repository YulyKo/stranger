<template>
    <div class="PlotPage">
        <h1 class="text">{{ plot.title }}</h1>
        <h2 class="text">{{ plot.description }}</h2>
      <div v-for="(tag, id) in plot.tags" :key="id">
        <p class="text">{{ tag.name }}</p>
      </div>
      <div v-for="(heroes, id) in plot.heroes" :key="id">
        <p>{{ heroes.name }}</p>
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
            ...mapGetters({plot: 'http_get_module/PLOT'}),
        },
        methods: {
        },
        beforeCreate() {
            this.$store.dispatch('http_get_module/GET_PLOT_FROM_API_BY_ID', this.$route.params.id);
        },
        created() {
            console.log(this.plot);
        },
        css: [
            _PlotPage,
        ]
    };
</script>
