import axios from "axios";

const users_module = {
    namespaced: true,
    state: {
        user: null,
        users: [],
    },
    getters: {
        USERS: state => state.users,
        USER: state => state.user,
    },
    mutations: {
        SET_USERS_TO_STATE: (state, users) => state.users = users,
        SET_NEW_USER_TO_STATE: (state, user) => state.user = user,
    },
    actions: {
        async POST_USER_TO_API(context, user) {
            await axios.post(`http://localhost:8000/users`, user);
            context.commit('SET_NEW_USER_TO_STATE', user);
        },
        async GET_USERS_FROM_API(context) {
            const { data } = await axios.get(`http://localhost:8000/users`);
            context.commit('SET_USERS_TO_STATE', data);
        },

    },
};

export default users_module;