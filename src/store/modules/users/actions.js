import axios from 'axios';
import URL_COMMON from '@/utils';

async function POST_USER_TO_API(context, user) {
  await axios.post(`${URL_COMMON}/users`, user);
  context.commit('SET_USER_TO_STATE', user);
}

async function LOGIN_USER_TO_APP(context, userLogin, userName) {
  context.commit('SET_USER_TO_STATE', userLogin, userName);
}

async function LOGOUT_USER({ commit }) {
  commit('SET_DEFAULT_INFO_OF_USER');
}

async function GET_USERS_FROM_API(context, url) {
  const { data } = await axios.get(`${URL_COMMON}/${url}`);
  context.commit('SET_USERS_TO_STATE', data);
}

exports.module = {
  POST_USER_TO_API,
  LOGIN_USER_TO_APP,
  LOGOUT_USER,
  GET_USERS_FROM_API,
};
