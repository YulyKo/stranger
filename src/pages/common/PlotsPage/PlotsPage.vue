<template>
    <div class="PlotsPage">
        <h1>plots page</h1>
      <section class="horizontal-scroll-wrapper">
        <div class="text-s tag--card">name</div>
      </section>
      <div class="flex flex__page">
          <section class="card" v-for="plot in plots" :id="plot.data.id" :key="plot.id">
            <h2 class="text text-l">{{ plot.data.title }}</h2>
            <h3 class="text text-m">{{ plot.data.description }}</h3>
            <ul class="horizontal-scroll-wrapper">
              <li class="text-s tag--card" v-for="tag in plot.tags" :key="tag.id"
                  v-bind:style="{ backgroundColor: tag.bg_color, color: tag.text_color }">{{ tag.name }}</li>
            </ul>
            <ul>
              <li v-for="person in plot.persons" class="tag" :key="person.id">{{ person.name }}</li>
            </ul>
            <div class="flex">
              <div v-if="isAdmin">
                <button class="button--del" @click="deletePlot(plot.data.id)">Delete</button>
              </div>
              <router-link tag="a" :to="{name: 'Plot', params: {id: plot.data.id}}">Read more {{ plot.data.id }}</router-link>
            </div>
          </section>
        </div>
    </div>
</template>

<script>
  import { mapGetters} from "vuex";
  import mainStyles from '../../../main.sass';

  export default {
    computed: {
      ...mapGetters({
        plots: 'plots/PLOTS',
        tags: 'tags/TAGS',
        isAdmin: 'users/IS_ADMIN',
        idPlot: 'plot/PLOT_ID'
      }),
    },
    beforeCreate() {
      this.$store.dispatch('plots/GET_PLOTS_FROM_API');
      this.$store.dispatch('tags/GET_TAGS_FROM_API', 'plot_tag');
    },
    methods: {
      deletePlot(id) {
        document.getElementById(id).style.backgroundColor = '#e12a1e';
        this.$store.dispatch('plots/DELETE_PLOT_FROM_API_BY_ID', +id)
      },
    },
    css: {
      mainStyles
    },
  };
</script>
<style lang="sass" scoped>
@import "../../../main"

$finalHeight: 10vh
$finalWidth:  2 * #{$finalHeight}
$scrollBarHeight: 1px

.card
  padding: 2rem
  margin-bottom: 1rem
  border-radius: 35px
  background-color: #444444
  @media (max-width: 551.98px)
    width: 100vh
  @media (min-width: 552px)
    width: 40vw
  @media (min-width: 1440px)
    width: 30vw

::-webkit-scrollbar 
  width: $scrollBarHeight
  height: $scrollBarHeight

::-webkit-scrollbar-button
  width: $scrollBarHeight
  height: $scrollBarHeight

.tag--card
  box-sizing: border-box

.horizontal-scroll-wrapper
  display: block
  margin-bottom: -64vh
  top: 0
  left: 0
  width: calc(#{$finalHeight} + #{$scrollBarHeight} + 10%)
  margin: 0
  padding: $finalHeight 0 0 0
  overflow-y: auto
  overflow-x: hidden
  transform: rotate(-90deg) translateY(-$finalHeight * 2.5)
  transform-origin: right top
  .tag--card
    display: block
    margin-bottom: .5rem
    margin-right: .5rem
    padding: .5rem .4rem
    border-radius: 50px
    color: $form-green
    background-color: $form-dark-grey
    transform: rotate(90deg)
    transform-origin: right top
    margin: calc(.5rem + .5rem + #{$finalHeight}) 0
</style>