import {URL_COMMON} from "../../index";
import axios from "axios";

const module = {
    namespaced: true,
    state: {
        relationship: null,
        types: null,
    },
    getters: {
        RELATIONSHIP: state => state.relationship,
        TYPES: state => state.types,
    },
    mutations: {
        SET_RELATIONSHIP_TO_STORE: (store, relationship) => { store.relationship = relationship},
        SET_RELATIONSHIP_TYPES_TO_STORE: (store, types) => { store.types = types},
    },
    actions: {
        async GET_RELATIONSHIP_FROM_API_BY_ID(context, id) {
            console.log(`${URL_COMMON}/relationships/${id}`);
            const { data } = await axios.get(`${URL_COMMON}/relationships/${id}`);
            context.commit('SET_RELATIONSHIP_TO_STORE', data);
        },
        async SET_RELATIONSHIP_TO_API(context, payload) {
            await axios.post(`${URL_COMMON}/relationships`, payload);
        },
        async GET_RELATIONSHIP_TYPES_FROM_API(context) {
            console.log(`${URL_COMMON}/type_relationships`);
            const { data } = await axios.get(`${URL_COMMON}/type_relationships`);
            context.commit('SET_RELATIONSHIP_TYPES_TO_STORE', data);
        },
        async SET_RELATIONSHIP_TYPE_TO_API(context, payload) {
            await axios.post(`${URL_COMMON}/type_relationships`, payload);
        },
    },
};

export default module;
