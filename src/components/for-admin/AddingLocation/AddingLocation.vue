<template>
    <form class="AddingLocation" @submit="addLocation">
      <label for="name">Name</label>
      <input v-model="location.name" id="name" type="text">
      <label for="picture">Add photo</label>
      <span>Progress: {{previewImage.uploadValue.toFixed()+"%"}}
        <progress id="progress" :value="previewImage.uploadValue" max="100" ></progress>
      </span>
      <input @change="setPicture" id="picture" type="file">
      <button>Add location</button>
    </form>
</template>

<script>
    import {mapGetters} from "vuex";
    import firebase from "firebase";

    export default {
      props: {},
      computed: {
        ...mapGetters({
          user: 'user/USER',
        }),
      },
      data() {
        return {
          location: {
            author: String,
            name: '',
            photo_url: String,
          },
          previewImage: {
            uploadValue: 0,
            picture: null,
            imageData: null,
          },
        }
      },
      methods: {
        addLocation() {
          this.addLocationPictureToStore();
        },
        addLocationPictureToStore() {
          const storageRef = firebase.storage().ref(`arts/${this.previewImage.imageData.name}`).put(this.previewImage.imageData);
          storageRef.on('state_changed', snapshot => {
              this.previewImage.uploadValue = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            }, error => { console.log(error.message) },
            () => { this.complete(storageRef); }
          );
        },
          complete(storageRef) {
            this.previewImage.uploadValue = 100;
            storageRef.snapshot.ref.getDownloadURL().then( url => {
              this.previewImage.picture = url;
              this.location.photo_url = url;
              this.addLocationToDb();
            });
          },
          addLocationToDb() {
            this.location.author = this.user.login;
            if (this.location.photo_url !== undefined
                && this.location.photo_url !== null
                && this.location.photo_url !== ''
                && this.location.name)
                this.$store.dispatch('location/POST_LOCATION_TO_API', this.location);
              document.getElementById('form').reset();
          },
        setPicture(event) {
          this.previewImage.imageData = event.target.files[0];
        },
      }
    };
</script>
