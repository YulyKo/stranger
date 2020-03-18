<template>
  <div class="AddingArt">
    <label for="title">Title</label>
    <input id="title" type="text" v-model="art.title">
    <label for="description">Description</label>
    <input id="description" type="text" v-model="art.description">
<!--    <div class="flex">-->
<!--      <label class="ml-2em" v-for="(tag, id) in tags" :key="id">-->
<!--        <input type="checkbox" :value="tag.name">-->
<!--        {{tag.name}}-->
<!--      </label>-->
<!--    </div>-->
<!--    <label for="file">File</label>-->
<!--    <input id="file" type="file">-->
    <button @click="addArt">Add art</button>
  </div>
</template>

<script>
  import { db } from '../../../main';
  import { mapGetters } from "vuex";

    export default {
        props: {},
        data() {
            return {
                art: {
                    author: null,
                    title: null,
                    description: null,
                    url: null,
                },
                strangerProba: [],
            //     id | author | titile | description | url
            }
        },
        computed: {
            ...mapGetters({
                tags: 'tags/TAGS',
                user: 'user/USER',
            })
        },
        methods: {
            addArt() {
                this.art.author = this.user.login;
                this.art.url = "https://www.google.com/imgres?imgurl=https%3A%2F%2Fmarketing.gaia.com%2Fwp-content%2Fuploads%2Farticle-migration-image-am-i-a-mystic-768x432.png&imgrefurl=https%3A%2F%2Fwww.gaia.com%2Farticle%2Fam-i-a-mystic-10-signs&tbnid=OCXTvgkTNZLWGM&vet=12ahUKEwiYwOObx6ToAhUKNpoKHbU-A4UQMygKegUIARDzAQ..i&docid=kP1Tw8GSVERX6M&w=768&h=432&q=mystic&ved=2ahUKEwiYwOObx6ToAhUKNpoKHbU-A4UQMygKegUIARDzAQ";
                console.log(this.art);
                if (this.art.title && this.art.description && this.art.author)
                  this.$store.dispatch('art/SET_ART_TO_API', this.art)
            },
        },
        beforeCreate() {
          this.$store.dispatch('tags/GET_TAGS_FROM_API', 'art_tag');
        },
        firestore() {
            return {
                strangerProba: db.collection('stranger-proba').orderBy('arts')
            }
        }
    };
</script>
