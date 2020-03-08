import axios from 'axios';
import { URL_TAGS } from "./index";

const http_tag_module = {
    namespaced: true,
    state: {
        tags: null,
        tag: null,
    },
    getters: {
        TAGS: (state) => state.tags,
    },
    mutations: {
        SET_TAG_TO_STATE: (state, tags) => { state.tags = tags; },
        ADD_TAG: (state, tag) => state.tag = tag,
    },
    actions: {
        async GET_TAGS_FROM_API(context, category) {
            console.log(`${URL_TAGS}/${category}`);
            const { data } = await axios.get(`${URL_TAGS}/${category}`);
            context.commit('SET_TAG_TO_STATE', data);
        },
        async SET_TAG_TO_API(context, {payload, url}) {
            await axios.post(`${URL_TAGS}/${url}`, payload);
        },
    },
};

export default http_tag_module;
