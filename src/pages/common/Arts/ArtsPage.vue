<template>
<!--
  __ = block
  _  = element
  -- = modifier
-->
  <div class="arts-page">
    <h1 class="arts-page_title">Arts</h1>
    <article class="arts-page__card" v-for="art in arts"  :id="art.data.id" :key="art.data.id">
      <img class="arts-page__card_image" :src="art.data.url" alt="problem in 14">
      <h2 class="arts-page__card_title">{{ art.data.title }}</h2>
      <div v-if="isAdmin">
        <button class="btn" @click="deleteArt(art.data.title, art.data.id)">Delete</button>
        <hr>
      </div>
      <router-link class="arts-page__card_link" :to="{name: 'Art', params: {id: art.data.id}}">Read more</router-link>
    </article>
  </div>
</template>

<script>
  import {mapGetters} from "vuex";
  export default {
    name: "ArtsPage",
    computed: {
      ...mapGetters({
        arts: 'arts/ARTS',
        isAdmin: 'users/IS_ADMIN',
      })
    },
    methods: {
      deleteArt(fileName, id) {
        document.getElementById(id).style.backgroundColor = '#e12a1e';
        console.log(typeof fileName)
        console.log(fileName)
        this.$store.dispatch('arts/DELETE_ART_IMAGE_FROM_FIREBASE', fileName);
        this.$store.dispatch('arts/DELETE_ART_FROM_API_BY_ID', id);
      },
    },
    beforeCreate() {
      this.$store.dispatch('arts/GET_ARTS_FROM_API');
    }
  }
</script>

<style lang="scss" scoped>
  .arts-page__card_image {
    height: 20rem;
  }
</style>