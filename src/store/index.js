import Vue from 'vue';
import Vuex from 'vuex';
import users from './modules/users/users';
import user from './modules/users/user';
import tags from './modules/tags/tags';
import plots from './modules/plots/plots';
import plot from './modules/plots/plot';
import heroes from './modules/heroes/heroes';
import locations from './modules/locations/locations';
import location from './modules/locations/location';
import relationship from './modules/relationship/relationship';
import relationships from './modules/relationship/relationships';
import arts from './modules/arts';
import team from './modules/team/index';

Vue.use(Vuex);
// export const URL_COMMON = 'https://damp-taiga-65569.herokuapp.com/';

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    tag,
    tags,
    users,
    user,
    plots,
    plot,
    heroes,
    locations,
    location,
    relationship,
    relationships,
    arts,
    team,
  },
});
