<template>
    <div class="flex form">
        <label for="title">Title</label>
        <input class="input" id="title" type="text" v-model.trim="plot.title">

        <label for="description">Description</label>
        <textarea class="textarea form__textarea" id="description" v-model="plot.description" name="description" cols="30" rows="10"></textarea>
        <div>
            <section>
                <h2>list of persons</h2>
                <div class="flex">
                  <label for="" class="m-l-2em" v-for="(hero, id) in heroes" :key="id">{{ hero.name }}
                      <input class="input" type="checkbox" :value="hero.id"
                      v-model="plot.id_persons">
                  </label>
                </div>
            </section>
            <section>
                <h2>list of locations</h2>
                <div class="flex">
                    <label for="" class="m-l-2em" v-for="location in locations" :key="location.id">{{ location.name }}
                        <input class="input" type="checkbox" :value="+location.id"
                               v-model="plot.id_locations">
                    </label>
                </div>
            </section>
        </div>
        <section>
            <h2>tags</h2>
            <div class="flex">
                <label for="" class="ml-2em" v-for="tag in tags" :key="tag.id">{{ tag.name }}
                    <input class="input" type="checkbox" :value="+tag.id"
                    v-model="plot.id_tags">
                </label>
            </div>
        </section>
        <section>
            <label for="">text</label>
            <textarea class="textarea form__textarea" v-model="plot.text" name="text" id="" cols="30" rows="10"></textarea>
        </section>
        <button class="form__button" @click="addPlot">
            <span>Add plot</span>
            <svg>
                <polyline class="o1" points="0 0, 150 0, 150 55, 0 55, 0 0"></polyline>
                <polyline class="o2" points="0 0, 150 0, 150 55, 0 55, 0 0"></polyline>
            </svg>
        </button>
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
                user: 'user/USER',
                locations: 'locations/LOCATIONS',
            }),
        },
        data() {
            return {
                plot: {
                    title: '',
                    author: null,
                    text: '',
                    id_locations: [],
                    id_persons: [],
                    id_tags: [],
                    description: '',
                },
            }
        },
        methods: {
            addPlot() {
                this.plot.author = this.user.login;
                this.$store.dispatch(`plot/POST_PLOT_TO_API`, this.plot);
                console.log(this.plot);
            }
        },
        beforeCreate() {
            this.$store.dispatch(`plots/GET_PLOTS_FROM_API`);
            this.$store.dispatch(`heroes/GET_HEROES_FROM_API`);
            this.$store.dispatch('locations/GET_LOCATIONS_FROM_API')
            this.$store.dispatch(`tags/GET_TAGS_FROM_API`, 'plot_tags');
        },
        css: {
            _AddingPlot,
        },
    };
</script>
