import axios from "axios";
import {URL_COMMON} from "../../index";

const module = {
    namespaced: true,
    state: {
        users: [],
      isAdmin: true
    },
    getters: {
        USERS: state => state.users,
      IS_ADMIN: state => state.isAdmin
    },
    mutations: {
        SET_USERS_TO_STATE: (state, users) => state.users = users,
    },
    actions: {
        async GET_USERS_FROM_API(context) {
            const { data } = await axios.get(`${URL_COMMON}/users`);
            context.commit('SET_USERS_TO_STATE', data);
        },

    },
};

export default module;