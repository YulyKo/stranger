<template>
    <div class="page">
        <h1 class="text text-xl">Plots</h1>
      <div class="flex flex__page">
          <section class="page__card"
                   v-for="(plot, index) in plots" :id="plot.data.id" :key="index">
            <h2 class="text text-l">{{ plot.data.title }}</h2>
            <h3 class="text text-m">{{ plot.data.description }}</h3>
            <ul class="tags">
              <li class="text-m tag tag--card" v-for="(tag, index) in plot.tags" :key="index"
                v-bind:style="{
                  backgroundColor: tag.bg_color,
                  color: tag.text_color
                }">{{ tag.name }}</li>
            </ul>
            <ul class="tags">
              <li v-for="(person, index) in plot.persons"
                  class="text-s tag tag--card" :key="index">{{ person.name }}</li>
            </ul>
            <div class="flex">
              <div v-if="isAdmin">
                <button class="text-m button--del" @click="deletePlot(plot.data.id)">Delete</button>
              </div>
              <div class="flex like__container">
                <button class="like__container_button"
                        @click="likePlot(plots[index])">
                  <img class="like__container_icon"
                       src="https://firebasestorage.googleapis.com/v0/b/stranger-proba.appspot.com/o/res%2Fhard_icon.svg?alt=media&token=19fdcdea-ad05-4f01-b978-4852b67e1bba"
                       alt="like icon">
                  <p class="text text-sm">{{plot.data.likes}}</p>
                </button>
              </div>
              <router-link class="text-m link"
                           tag="a"
                           :to="{
                              name: 'Plot', params: {id: plot.data.id}
                            }">Read more</router-link>
            </div>
          </section>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import mainStyles from '@/main.sass';

export default {
  computed: {
    ...mapGetters({
      plots: 'plots/PLOTS',
      isAdmin: 'user/IS_ADMIN',
      user: 'user/USER',
    }),
  },
  beforeCreate() {
    this.$store.dispatch('plots/GET_PLOTS_FROM_API');
  },
  methods: {
    deletePlot(id) {
      document.getElementById(id).style.backgroundColor = '#e12a1e';
      this.$store.dispatch('plots/DELETE_PLOT_FROM_API_BY_ID', +id);
    },
    likePlot(plot) {
      if (plot.users_likes.includes(this.user.login)) {
        this.setDislike(plot);
      } else if (!plot.users_likes.includes(this.user.login)) {
        this.setLike(plot);
      }
    },
    setLike(plot) {
      this.setLikeToBD(plot);
      plot.users_likes.push(this.user.login);
      plot.data.likes += 1;
    },
    setLikeToBD(plot) {
      const data = {
        dataForPut: {
          id: plot.data.id,
          likes: +plot.data.likes + 1,
          login: this.user.login,
        },
        dataForPost: {
          id: plot.data.id,
          login: this.user.login,
        },
      };
      this.$store.dispatch('plots/POST_LIKE_IN_PLOT_BY_ID', data.dataForPost);
      this.$store.dispatch('plots/PUT_LIKES_IN_PLOT_BY_ID', data.dataForPut);
    },
    setDislike(plot) {
      this.setDislikeToBD(plot);
      plot.users_likes.forEach((login, index) => {
        if (login === this.user.login) {
          plot.users_likes.splice(index, 1);
        }
      });
      plot.data.likes -= 1;
    },
    setDislikeToBD(plot) {
      const data = {
        dataForPut: {
          id: plot.data.id,
          likes: +plot.data.likes - 1,
          login: this.user.login,
        },
        dataForDelete: {
          id: plot.data.id,
        },
      };
      this.$store.dispatch('plots/PUT_DISLIKE_IN_PLOT_BY_ID', data.dataForPut);
      this.$store.dispatch('plots/DELETE_DISLIKE_IN_PLOT_BY_ID', data.dataForDelete);
    },
  },
  css: {
    mainStyles,
  },
};
</script>
<style lang="sass" scoped>
@import "../../../main"

.tags
  margin-bottom: .6rem
  margin-top: 0
  padding: 0

.tag--card
  box-sizing: border-box
  list-style: none
  cursor: none

.text
  color: $page-red

.like__container
  height: 4vh
  width: 10vh
  justify-content: center
  p
    margin: 0
    color: #d44040
  &_icon
    width: 1.5rem
  &_button
    background: none
    border: none
</style>
