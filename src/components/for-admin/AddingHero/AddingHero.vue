<template>
    <form class="AddingHero" id="form" @submit="addHero">
        <label for="name">Name</label>
        <input id="name" type="text" v-model="hero.name">
        <label for="age">Age</label>
        <input id="age" type="number" v-model="hero.age">
        <label for="sex">Sex</label>
        <input id="sex" type="text" v-model="hero.sex">
        <label for="description">Shot description</label>
        <textarea id="description" v-model="hero.shot_description" name="" cols="30" rows="10"></textarea>
        <label for="story">Story of life</label>
        <textarea id="story" v-model="hero.story_of_life" cols="50" rows="15"></textarea>
        <button @click="cleanForm">Add hero</button>
    </form>
</template>

<script>
    import _addingHero from './_AddingHero.scss'
    export default {
        props: {
        },
        data() {
            return {
                hero: {
                    name: null,
                    age: null,
                    sex: 'none',
                    shot_description: null,
                    story_of_life: null,
                },
            }
        },
        methods: {
            addHero() {

                if (this.hero.name && this.hero.age && this.hero.story_of_life && this.hero.shot_description)
                  this.$store.dispatch('hero/POST_HERO_TO_API', this.hero);
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
