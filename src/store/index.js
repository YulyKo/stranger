import Vue from 'vue';
import Vuex from 'vuex';
import users from './modules/users';
import tags from './modules/tags';
import plots from './modules/plots';
import heroes from './modules/heroes';
import locations from './modules/locations';
import relationships from './modules/relationship';
import arts from './modules/arts';
import team from './modules/team';

Vue.use(Vuex);
// export const URL_COMMON = 'https://damp-taiga-65569.herokuapp.com/';

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    tags,
    users,
    plots,
    heroes,
    locations,
    relationships,
    arts,
    team,
  },
});
