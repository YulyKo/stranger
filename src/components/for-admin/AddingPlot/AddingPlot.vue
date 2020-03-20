<template>
    <div class="flex AddingPlotForm">
        <label for="title">Title</label>
        <input id="title" type="text" v-model.trim="plot.title">

        <label for="descroption">Description</label>
        <textarea id="descroption" v-model="plot.description" name="description" cols="30" rows="10"></textarea>
        <div>
            <section>
                <h2>list of persons</h2>
                <div class="flex">
                  <label for="" class="m-l-2em" v-for="(hero, id) in heroes" :key="id">{{ hero.name }}
                      <input type="checkbox" :value="hero.name"
                      v-model="CHOISED_heroes">
                  </label>
                </div>
            </section>
        </div>
        <section>
            <h2>tags</h2>
            <div class="flex">
                <label for="" class="ml-2em" v-for="(tag, id) in tags" :key="id">{{ tag.name }}
                    <input type="checkbox" :value="tag.name"
                    v-model="CHOISED_tags">
                </label>
            </div>
        </section>
        <section>
            <label for="">text</label>
            <textarea v-model="plot.text" name="text" id="" cols="30" rows="10"></textarea>
        </section>
        <button @click="addPlot">Add plot</button>
    </div>
</template>

<script>
    import _AddingPlot from './_AddingPlot.scss';
    import { mapGetters } from "vuex";

    export default {
        props: {
        },
        computed: {
            ...mapGetters({
                tags: `tags/TAGS`,
                heroes: `heroes/HEROES`,
                user: 'user/USER'
            }),
        },
        data() {
            return {
                plot: {
                    //id |   title   | author | text | id_location | id_person | description
                    title: '',
                    author: null,
                    text: '',
                    id_location: 1,
                    id_person: 1,
                    description: '',
                },
                CHOISED_heroes: [],
                CHOISED_tags: [],
            }
        },
        methods: {
            addPlot() {
                this.plot.author = this.user.login;
                this.$store.dispatch(`plot/POST_PLOT_TO_API`, this.plot);
            }
        },
        beforeCreate() {
            this.$store.dispatch(`plots/GET_PLOTS_FROM_API`);
            this.$store.dispatch(`heroes/GET_HEROES_FROM_API`);
            this.$store.dispatch(`tags/GET_TAGS_FROM_API`, 'plot_tags');
        },
        css: {
            _AddingPlot,
        },
    };
</script>
