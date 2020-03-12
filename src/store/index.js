import Vue from 'vue'
import Vuex from 'vuex'
import http_get_module from "./http_get_module";
import http_post_module from "./http_post_module";
import http_tag_module from "./http_tag_module";
import users_module from "./users_module";

Vue.use(Vuex);
export const URL_TAGS = 'http://localhost:4000';
export const URL_COMMON = 'http://localhost:8000';

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    getters: {},
    modules: {
        http_get_module,
        http_post_module,
        http_tag_module,
        users_module,
    },
})
