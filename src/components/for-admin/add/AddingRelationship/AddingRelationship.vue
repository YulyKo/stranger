<template>
    <form id="form" class="AddingRelationship" @submit="addRelationship">
      <label for="firstHero"></label>
      <select v-model="relationship.id_person" name="" id="firstHero" >
        <option v-for="(hero, id) in heroes" :key="id" :value="hero.id">{{hero.name}}</option>
      </select>
      <label for="secondHero"></label>
      <select v-model="relationship.id_person2" name="" id="secondHero">
        <option v-for="(hero, id) in heroes" :key="id" :value="hero.id">{{hero.name}}</option>
      </select>
      <div class="flex">
        <label class="ml-2em" v-for="(type, id) in types" :key="id">
          <input class="input" v-model="relationship.id_type_relationship" type="radio" :value="type.id">{{ type.id }} {{type.name}}
        </label>
      </div>
      <label for="">reasons</label><textarea v-model="relationship.reasons" name="reason" id="" cols="30" rows="10"></textarea>
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
          id_person: 0,
          id_person2: 0,
          id_type_relationship: null,
          reasons: '',
        },
      }
    },
    computed: {
      ...mapGetters({
        types: `relationship/TYPES`,
        heroes: `heroes/HEROES`,
      }),
    },
    methods: {
      addRelationship() {
        console.log('add relationship');
        if (this.relationship.id_person && this.relationship.id_person2)
          this.$store.dispatch('relationship/POST_RELATIONSHIP_TO_API', this.relationship)

        document.getElementById('form').reset();
      },
    },
    beforeCreate() {
      this.$store.dispatch(`relationship/GET_RELATIONSHIP_TYPES_FROM_API`, 'relationship_tags');
      this.$store.dispatch(`heroes/GET_HEROES_FROM_API`);
    }
  };
</script>
