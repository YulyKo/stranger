import axios from 'axios';
import { URL_COMMON } from "./index";

const http_get_module = {
    namespaced: true,
    state: {
        heroes: null,
    },
    getters: {
        HEROES: (state) => state.heroes,
    },
    mutations: {
        SET_HEROES_TO_STATE: (state, heroes) => state.heroes = heroes,
    },
    actions: {
        async GET_HEROES_FROM_API(context) {
            const { data } = await axios.get(`${URL_COMMON}/heroes`);
            context.commit('SET_HEROES_TO_STATE', data);
        },
    },
};

export default http_get_module;
