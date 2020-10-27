<template>
  <div>
    <article class="art">
      <h2 class="text text-xl">{{ art.title }}</h2>
      <p class="text text-m text--author">{{ art.author }}</p>
      <img class="art__img" :src="art.url" alt="image">
      <p class="text text-m">{{ art.description }}</p>
      <div class="ta-center mt-2rem">Tags<br/>
      <span class="text text-s tag mt-2rem" v-for="tag in art.tags" :key="tag.id"
      v-bind:style="{ backgroundColor: tag.bg_color, color: tag.text_color }">{{ tag.name }}</span>
    </div>
    </article>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ArtPage',
  computed: {
    ...mapGetters({ art: 'art/ART' }),
  },
  beforeCreate() {
    this.$store.dispatch('art/GET_ART_FROM_API_BY_ID', this.$route.params.id);
  },
};
</script>
<style lang="sass" scoped>
@import '@/main'
.art
  background-color: $page-yellow
  &__img
    height: 36rem
    display: block
    margin: 0 auto
.text--author
  margin-top: 2.67rem
  margin-bottom: 0
  padding-bottom: 2.67em
  text-align: center
.tag
  margin-bottom: 3.67rem
</style>
