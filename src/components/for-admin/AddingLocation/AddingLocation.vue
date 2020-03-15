<template>
    <form class="AddingLocation" @submit="addLocation">
      <label for="name">Name</label>
      <input v-model="location.name" id="name" type="text">
      <label for="picture">Add photo</label>
      <input @change="setPicture($event)" id="picture" type="file">
      <button>Add location</button>
    </form>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        props: {
        },
        computed: {
            ...mapGetters({
                user: 'users_module/USER',
            }),
        },
        data() {
            return {
                location: {
                    author: '',
                    name: null,
                    picture: null,
                }
            }
        },
        methods: {
            addLocation() {
                this.location.author = this.user.login;
                if (this.location.picture && this.location.name)
                  this.$store.dispatch('http_post_module/POST_LOCATION_TO_API', this.location);
                document.getElementById('form').reset();
            },
            setPicture(event) {
                this.location.picture = event.target.files[0].name;
            },
        }
    };
</script>
