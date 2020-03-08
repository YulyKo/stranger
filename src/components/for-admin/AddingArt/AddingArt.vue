<template>
  <div class="AddingArt">
    <label for="title">Title</label>
    <input id="title" type="text" v-model="art.title">
    <label for="description">Description</label>
    <input id="description" type="text" v-model="art.description">
    <div class="flex">
      <label class="ml-2em" v-for="(tag, id) in tags" :key="id">
        <input type="checkbox" v-model="art.tags" :value="tag.name">
        {{tag.name}}
      </label>
    </div>
    <label for="file">File</label>
    <input id="file" type="file" @change="setFile($event)">
    <button @click="addArt">Add art</button>
  </div>
</template>

<script>
  import { db } from '../../../main';
  import { mapGetters } from "vuex";

    export default {
        props: {
        },
        data() {
            return {
                art: {
                    author: null,
                    title: null,
                    description: null,
                    file: null,
                    tags: [],
                },
                strangerProba: [],
            }
        },
        computed: {
            ...mapGetters({
                tags: 'http_tag_module/TAGS',
            })
        },
        methods: {
            addArt() {
                if (this.$route.path === '/admin/add-hero') this.art.author = 666;
                if (this.art.title && this.art.description && this.art.file && this.art.author)
                this.$store.dispatch('http_post_module/POST_ART_TO_API', this.art)
            },
            setFile(event) {
                console.log(event.target.files[0]);
                console.log(this.strangerProba);
                this.art.file = event.target.files[0].name
            },
        },
        beforeCreate() {
          this.$store.dispatch('http_tag_module/GET_TAGS_FROM_API', 'art_tags');
        },
        firestore() {
            return {
                strangerProba: db.collection('stranger-proba').orderBy('arts')
            }
        }
    };
</script>
