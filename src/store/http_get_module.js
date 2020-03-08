import axios from 'axios';
import { URL_COMMON } from "./index";

const http_get_module = {
    namespaced: true,
    state: {
        heroes: null,
        plots: null,
        plot: null,
    },
    getters: {
        HEROES: (state) => state.heroes,
        PLOTS: state => state.plots,
        PLOT: state => state.plot,
    },
    mutations: {
        SET_HEROES_TO_STATE: (state, heroes) => state.heroes = heroes,
        SET_PLOTS_TO_STATE: (state, plots) => state.plots = plots,
        SET_PLOT_TO_STATE: (state, plot) => state.plot = plot,
    },
    actions: {
        async GET_HEROES_FROM_API(context) {
            const { data } = await axios.get(`${URL_COMMON}/heroes`);
            context.commit('SET_HEROES_TO_STATE', data);
        },
        async GET_PLOTS_FROM_API(context) {
            const { data } = await axios.get(`${URL_COMMON}/plots`);
            context.commit('SET_PLOTS_TO_STATE', data);
        },
        async GET_PLOT_FROM_API_BY_ID(context, id) {
            const { data } = await axios.get(`${URL_COMMON}/plots/${id}`);
            console.log(data);
            context.commit('SET_PLOT_TO_STATE', data);
        },
    },
};

export default http_get_module;
