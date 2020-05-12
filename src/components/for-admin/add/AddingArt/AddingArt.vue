<template>
  <div class="AddingArt">
    <label for="title">Title</label>
    <input class="input" id="title" type="text" v-model="art.title">
    <label for="description">Description</label>
    <input class="input" id="description" type="text" v-model="art.description">
    <div class="flex">
      <label class="ml-2em" v-for="tag in tags" :key="tag.id">
      <input class="input" type="checkbox" v-model="art.tags" :value="tag.id">{{tag.name}}</label>
    </div>

    <label for="file">File</label>
    <input class="input" @change="onPreviewImage" id="file" type="file" accept="image/*">

    <span>Progress: {{previewImage.uploadValue.toFixed()+"%"}}
      <progress id="progress" :value="previewImage.uploadValue" max="100"></progress>
    </span>

    <div v-if="previewImage.imageData != null">
      <img class="preview" alt="no file" :src="previewImage.picture">
      <button @click="addArtToDb">Add art</button>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from "vuex";
  import firebase from 'firebase/app';

    export default {
      props: {},
      data() {
        return {
          art: {
            author: null,
            title: null,
            description: null,
            url: null,
            tags: [],
          },
          previewImage: {
            uploadValue: 0,
            picture: null,
            imageData: null,
          },
        }
      },
      computed: {
        ...mapGetters({
          tags: 'tags/TAGS',
          user: 'user/USER',
        })
      },
      methods: {
        addArtToDb() {
          this.art.author = this.user.login;
          console.log(this.art.url)
          if (this.art.title && this.art.author && this.art.url) {
            console.log('here')
            this.$store.dispatch('art/SET_ART_TO_API', this.art);
          }
        },
        onPreviewImage(event) {
          this.previewImage.imageData = event.target.files[0];
          this.onUploadArt()
        },
        onUploadArt() {
          const storageRef = firebase.storage().ref(`arts/${this.art.title}`).put(this.previewImage.imageData);
          storageRef.on('state_changed', snapshot => {
              this.previewImage.uploadValue = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            }, error => { console.log(error.message) },
            () => {
              this.previewImage.uploadValue = 100;
              storageRef.snapshot.ref.getDownloadURL().then( url => {
                this.previewImage.picture = url;
                this.art.url = url;
              });
            }
          )
        }
      },
      beforeCreate() {
        this.$store.dispatch('tags/GET_TAGS_FROM_API', 'art_tag');
      },
    };
</script>

<style scoped>
  .preview {
    width: 200px;
  }
</style>
