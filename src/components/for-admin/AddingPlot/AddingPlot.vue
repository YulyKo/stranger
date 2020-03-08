<template>
    <div class="flex AddingPlotForm">
        <label for="title">Title</label>
        <input id="title" type="text" v-model.trim="plot.title">

        <label for="descroption">Descroption</label>
        <textarea id="descroption" v-model="plot.description" name="description" cols="30" rows="10"></textarea>
        <div>
            <section>
                <h2>list of persons</h2>
                <div class="flex">
                  <label for="" class="m-l-2em" v-for="(hero, id) in heroes" :key="id">{{ hero.name }}
                      <input type="checkbox" :value="hero.name"
                      v-model="plot.heroes">
                  </label>
                </div>
            </section>
        </div>
        <section>
            <h2>tags</h2>
            <div class="flex">
                <label for="" class="ml-2em" v-for="(tag, id) in tags" :key="id">{{ tag.name }}
                    <input type="checkbox" :value="tag.name"
                    v-model="plot.tags">
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

    const NAME_MODULE = 'http_get_module';
    const NAME_POST_MODULE = 'http_post_module';
    const NAME_TAG_MODULE = 'http_tag_module';

    export default {
        props: {
        },
        computed: {
            ...mapGetters({
                tags: `${NAME_TAG_MODULE}/TAGS`,
                heroes: `${NAME_MODULE}/HEROES`,
            }),
        },
        data() {
            return {
                plot: {
                    title: '',
                    description: '',
                    heroes: [],
                    tags: [],
                    text: '',
                },
            }
        },
        methods: {
            addPlot() {
                this.$store.dispatch(`${NAME_POST_MODULE}/POST_PLOT_TO_API`, this.plot);
            }
        },
        beforeCreate() {
            this.$store.dispatch(`${NAME_MODULE}/GET_PLOTS_FROM_API`);
            this.$store.dispatch(`${NAME_MODULE}/GET_HEROES_FROM_API`);
            this.$store.dispatch(`${NAME_TAG_MODULE}/GET_TAGS_FROM_API`, 'plot_tags');
        },
        css: {
            _AddingPlot,
        },
    };
</script>
