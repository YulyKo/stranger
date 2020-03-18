import {URL_COMMON} from "../../index";
import axios from "axios";

const module = {
    namespaced: true,
    state: {
        relationships: null,
    },
    getters: {
        RELATIONSHIP: state => state.relationship,
    },
    mutations: {
        SET_RELATIONSHIP_TO_STORE: (store, registration) => { store.relationship = registration},
    },
    actions: {
        async GET_RELATIONSHIP_FROM_API_BY_ID(context, id) {
            console.log(`${URL_COMMON}/locations/${id}`);
            const { data } = await axios.get(`${URL_COMMON}/locations/${id}`);
            context.commit('SET_RELATIONSHIP_TO_STORE', data);
        },
        async SET_RELATIONSHIP_TO_API(context, payload) {
            await axios.post(`${URL_COMMON}/locations`, payload);
        },
    },
};

export default module;
