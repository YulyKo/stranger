<template>
    <form class="AddingHero" id="form" @submit="addHero">
        <label for="name">Name</label>
        <input class="input" id="name" type="text" v-model="hero.name">
        <label for="age">Age</label>
        <input class="input" id="age" type="number" v-model="hero.age">
        <label for="sex">Sex</label>
        <input class="input" id="sex" type="text" v-model="hero.sex">
        <label for="description">Shot description</label>
        <textarea class="textarea" id="description" v-model="hero.shot_description" name="" cols="30" rows="10"></textarea>
        <label for="story">Story of life</label>
        <textarea class="textarea" id="story" v-model="hero.story_of_life" cols="50" rows="15"></textarea>
        <button @click="cleanForm">Add hero</button>
    </form>
</template>

<script>
    import _addingHero from './_AddingHero.scss'
    import {mapGetters} from "vuex";
    export default {
        props: {
        },
        data() {
            return {
                // id | author | name | age | sex  | shot_description |  story_of_life
                hero: {
                    author: null,
                    name: null,
                    age: null,
                    sex: 'none',
                    shot_description: null,
                    story_of_life: null,
                },
            }
        },
        computed: {
            ...mapGetters({
                user: 'user/USER'
            }),
        },
        methods: {
            addHero() {
                this.hero.author = this.user.login;
                if (this.hero.name && this.hero.age && this.hero.story_of_life && this.hero.shot_description)
                  this.$store.dispatch('heroes/POST_HERO_TO_API', this.hero);
            },
            cleanForm() {
                document.getElementById('form').reset();
            }
        },
        css: {
            _addingHero
        }
    };
</script>
