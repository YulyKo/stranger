<template>
  <div class="AddingArt">
<!--    <label for="title">Title</label>-->
<!--    <input id="title" type="text" v-model="art.title">-->
<!--    <label for="description">Description</label>-->
<!--    <input id="description" type="text" v-model="art.description">-->
<!--    <div class="flex">-->
<!--      <label class="ml-2em" v-for="(tag, id) in tags" :key="id">-->
<!--        <input type="checkbox" :value="tag.name">-->
<!--        {{tag.name}}-->
<!--      </label>-->
<!--    </div>-->
    <div>
      <p>Progress: {{previewImage.uploadValue.toFixed()+"%"}}
        <progress id="progress" :value="previewImage.uploadValue" max="100" ></progress>  </p>
    </div>
    <div v-if="previewImage.imageData!=null">
      <img alt="" class="preview" :src="previewImage.picture">
    </div>
    <label for="file">File</label>
    <input @change="setFile" id="file" type="file" accept="image/*">
    <button @click="addArt">Add art</button>
  </div>
</template>

<script>
  import { mapGetters } from "vuex";
  import firebase from "firebase";

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
        addArt() {
            this.uploadImage();
          // this.image = event.target.files[0];
          // console.log(this.image);
          // this.art.author = this.user.login;
          // if (this.art.title && this.art.description && this.art.author)
          //   this.$store.dispatch('art/SET_ART_TO_API', this.art)
        },
        setFile(event) {
          console.log(event.target.files[0]);
          this.previewImage.imageData = event.target.files[0];
          // this.previewImage.uploadValue = 0;
        },
        uploadImage() {
          const storageRef = firebase.storage().ref(`arts/${this.previewImage.imageData.name}`).put(this.previewImage.imageData);
          storageRef.on('state_changed', snapshot => {
              this.previewImage.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
          }, error => {console.log(error.message)},
            () => {
              this.previewImage.uploadValue = 100;
              storageRef.snapshot.ref.getDownloadURL().then( url => {
                this.previewImage.picture = url;
              });
            }
          )
        },
      },
        beforeCreate() {
          this.$store.dispatch('tags/GET_TAGS_FROM_API', 'art_tag');
        },

        // onUpload() {
        //     const storeRef = firebase.storage().ref(`${this.image.name}`
        // },
    };
</script>
