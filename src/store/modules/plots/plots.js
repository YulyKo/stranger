import axios from 'axios';
import {URL_COMMON} from "../../index";

const http_post_module = {
    namespaced: true,
    state: {
        plots: null,
    },
    getters: {
        PLOTS: state => state.plots,
    },
    mutations: {
        SET_PLOTS_TO_STATE: (state, plots) => state.plots = plots,
    },
    actions: {
        async GET_PLOTS_FROM_API(context) {
            const { data } = await axios.get(`${URL_COMMON}/plots_with_tags_persons_locations`);
            context.commit('SET_PLOTS_TO_STATE', data);
        },
    },
};

export default http_post_module;
