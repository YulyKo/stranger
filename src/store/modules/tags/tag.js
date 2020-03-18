import axios from 'axios';
import { URL_COMMON } from "../../index";

const tag = {
    namespaced: true,
    state: {
        tag: null,
    },
    getters: {
        TAG: (state) => state.tag,
    },
    mutations: {
        SET_TAG_TO_STATE: (state, tag) => { state.tag = tag; },
        ADD_TAG: (state, tag) => state.tag = tag,
    },
    actions: {
        async GET_TAG_FROM_API_BY_ID(context, {category, id}) {
            console.log(`${URL_COMMON}/${category}`);
            const { data } = await axios.get(`${URL_COMMON}/${category}/${id}`);
            context.commit('SET_TAG_TO_STATE', data);
        },
        async SET_TAG_TO_API(context, payload) {
            await axios.post(`${URL_COMMON}/tags`, payload);
        },
    },
};

export default tag;
