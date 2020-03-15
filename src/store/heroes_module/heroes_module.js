import axios from 'axios';
import {URL_COMMON} from "../index";

const module = {
    namespaced: true,
    state: {
        heroes: null,
    },
    getters: {
        HEROES: state => state.heroes,
    },
    mutations: {
        SET_HEROES_TO_STATE: (state, heroes) => state.heroes = heroes,
    },
    actions: {
        async GET_HEROES_FROM_API_BY_ID(context, id) {
            const { data } = await axios.get(`${URL_COMMON}/heroes/${id}`);
            context.commit('SET_PLOT_TO_STATE', data);
        },
        async POST_PLOT_TO_API(context, plot) {
            await axios.post(`${URL_COMMON}/plots`, plot);
        },
    },
};

export default module;
