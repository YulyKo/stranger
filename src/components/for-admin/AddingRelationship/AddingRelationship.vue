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
        <label class="ml-2em" v-for="(type, id) in types" :key="id" for="relationshipTag">
          <input v-model="ids_types_relationships" id="relationshipTag" type="checkbox" :value="type.id">{{ type.id }} {{type.name}}
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
                    id_person: 1,
                    id_person2: 1,
                    id_type_relationship: null,
                },
                ids_types_relationships: []
            }
        },
        computed: {
            ...mapGetters({
                types: `relationship/TYPES`,
                heroes: `heroes/HEROES`
            }),
        },
        methods: {
            addRelationship() {
                console.log('add');
                if (this.relationship.id_person &&
                    this.relationship.id_person2) {
                    for (let id = 0; id < this.ids_types_relationships.length-1; id++) {
                        this.relationship.id_type_relationship = this.ids_types_relationships[id];
                        console.log(this.relationship.id_type_relationship);
                        this.$store.dispatch('relationship/SET_RELATIONSHIP_TO_API', this.relationship);
                    }
                }
                document.getElementById('form').reset();
            },
        },
        beforeCreate() {
            this.$store.dispatch(`relationship/GET_RELATIONSHIP_TYPES_FROM_API`, 'relationship_tags');
            this.$store.dispatch(`heroes/GET_HEROES_FROM_API`);
        }
    };
</script>
