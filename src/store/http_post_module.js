import axios from 'axios';
import {URL_COMMON} from "./index";

const http_post_module = {
    namespaced: true,
    state: {
        hero: null,
        photo: null,
        location: null,
        relationship: null,
    },
    getters: {
    },
    mutations: {
    },
    actions: {
        //TODO універсальний запит для отримання схожих даних
        async POST_PLOT_TO_API(context, plot) {
            await axios.post(`${URL_COMMON}/plots`, plot);
        },
        async POST_HERO_TO_API(context, hero) {
            await axios.post(`${URL_COMMON}/heroes`, hero);
        },
        async POST_ART_TO_API(context, art) {
            await axios.post(`${URL_COMMON}/arts`, art);
        },
        async POST_RELATIONSHIP_TO_API(context, relationship) {
            await axios.post(`${URL_COMMON}/relationships`, relationship);
        },
        async POST_LOCATION_TO_API(context, relationship) {
            await axios.post(`${URL_COMMON}/locations`, relationship);
        },

    },
};

export default http_post_module;
