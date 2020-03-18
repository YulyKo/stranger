import axios from 'axios';
import {URL_COMMON} from "../../index";

const module = {
    namespaced: true,
    state: {
        heroes: null,
        hero: null,
    },
    getters: {
        HEROES: state => state.heroes,
        HERO: state => state.hero,
    },
    mutations: {
        SET_HEROES_TO_STATE: (state, heroes) => state.heroes = heroes,
        SET_HERO_TO_STATE: (state, hero) => state.hero = hero,
    },
    actions: {
        async GET_HERO_FROM_API_BY_ID(context, id) {
            console.log(`${URL_COMMON}/persons/${id}`);
            const { data } = await axios.get(`${URL_COMMON}/persons/${id}`);
            console.log(data);
            context.commit('SET_HERO_TO_STATE', data);
        },
        async GET_HEROES_FROM_API(context) {
            const { data } = await axios.get(`${URL_COMMON}/persons`);
            console.log(data);
            context.commit('SET_HEROES_TO_STATE', data);
        },
        async POST_PLOT_TO_API(context, plot) {
            await axios.post(`${URL_COMMON}/persons`, plot);
        },
    },
};

export default module;