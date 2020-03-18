<template>
    <form id="form" class="AddingRelationship" @submit="addRelationship">
      <label for="firstHero"></label>
      <select v-model="relationship.id_first_hero" name="" id="firstHero" >
        <option v-for="(hero, id) in heroes" :key="id" :value="hero.id">{{hero.name}}</option>
      </select>
      <label for="secondHero"></label>
      <select v-model="relationship.id_second_hero" name="" id="secondHero">
        <option v-for="(hero, id) in heroes" :key="id" :value="hero.id">{{hero.name}}</option>
      </select>
      <div class="flex">
        <label class="ml-2em" v-for="(tag, id) in tags" :key="id" for="relationshipTag">
          <input v-model="relationship.id_relationship" id="relationshipTag" type="checkbox" :value="tag.id">{{tag.name}}
        </label>
      </div>
      <button>Add relationship</button>
    </form>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        props: {
        },
        data() {
            return {
                relationship: {
                    id_first_hero: null,
                    id_second_hero: null,
                    id_relationship: [],
                },
            }
        },
        computed: {
            ...mapGetters({
                tags: `tags/TAGS`,
                heroes: `heroes/HEROES`
            }),
        },
        methods: {
            addRelationship() {
                if (this.relationship.id_relationship &&
                    this.relationship.id_second_hero &&
                    this.relationship.id_first_hero) {
                    this.$store.dispatch('relationship/POST_RELATIONSHIP_TO_API', this.relationship);
                }
                document.getElementById('form').reset();
            },
        },
        beforeCreate() {
            this.$store.dispatch(`tags/GET_TAGS_FROM_API`, 'relationship_tags');
            this.$store.dispatch(`heroes/GET_HEROES_FROM_API`);
        }
    };
</script>
