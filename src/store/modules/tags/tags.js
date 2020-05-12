import axios from 'axios';
import { URL_COMMON } from "../../index";

const tag = {
    namespaced: true,
    state: {
        tags: null,
    },
    getters: {
        TAGS: (state) => state.tags,
    },
    mutations: {
        SET_TAGS_TO_STATE: (state, tags) => { state.tags = tags; },
    },
    actions: {
        async GET_TAGS_FROM_API(context, category) {
            console.log(`${URL_COMMON}/${category}`);

            const { data } = await axios.get(`${URL_COMMON}/${category}`);
            context.commit('SET_TAGS_TO_STATE', data);
        },
    },
};

export default tag;
