import Vue from 'vue';
import Vuex from 'vuex';
import tag_module from "./tag_module";
import users_module from "./users_module";
import plots_module from "./plots_modules/plots_module";
import plot_module from "./plots_modules/plot_module";
import heroes_module from "./heroes_module/heroes_module";

Vue.use(Vuex);
export const URL_COMMON = 'http://localhost:8000';

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    getters: {},
    modules: {
        // http_get_module,
        // http_post_module,
        tag_module,
        users_module,
        plots_module,
        plot_module,
        heroes_module,
    },
})
