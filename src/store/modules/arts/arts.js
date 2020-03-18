import {URL_COMMON} from "../../index";
import axios from "axios";

const module = {
    namespaced: true,
    state: {
        arts: null,
    },
    getters: {
        ARTS: state => state.arts
    },
    mutations: {
        SET_ARTS_TO_STATE: (state, arts) => state.arts = arts,
    },
    actions: {
        async GET_ARTS_FROM_API(context) {
            console.log(`${URL_COMMON}/arts`);
            const { data } = await axios.get(`${URL_COMMON}/arts`);
            context.commit('SET_ARTS_TO_STATE', data);
        },
    },
};

export default module;
