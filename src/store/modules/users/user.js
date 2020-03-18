import axios from "axios";
import {URL_COMMON} from "../../index";

const module = {
    namespaced: true,
    state: {
        user: {
            login: 'kokok',
            name: 'ddddddd'
        },
    },
    getters: {
        USER: state => state.user,
    },
    mutations: {
        SET_NEW_USER_TO_STATE: (state, user) => state.user = user,
    },
    actions: {
        async POST_USER_TO_API(context, user) {
            await axios.post(`${URL_COMMON}/users`, user);
            context.commit('SET_NEW_USER_TO_STATE', user);
        },
    },
};

export default module;