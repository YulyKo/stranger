import Vue from 'vue';
import Vuex from 'vuex';
import tag_module from "./tag_module";
import users_module from "./users_module";
import plots_module from "./plots_modules/plots_module";
import plot_module from "./plots_modules/plot_module";
import heroes_module from "./heroes_module/heroes_module";
import locations_module from "./locations_module/locations_module";
import location_module from "./locations_module/location"
import relationship from "./relationship_module/relationship";
import relationships from "./relationship_module/relationships";
import art from "./arts/art";
import arts from "./arts/arts";

Vue.use(Vuex);
export const URL_COMMON = 'http://localhost:8000';

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    getters: {},
    modules: {
        tag_module,
        users_module,
        plots_module,
        plot_module,
        heroes_module,
        locations_module,
        location_module,
        relationship,
        relationships,
        art,
        arts,
    },
})
