import axios from 'axios';
import { URL_COMMON } from '@/utils';

async function GET_TEAM_INFO_FROM_API({ commit }) {
  const { data } = await axios.get(`${URL_COMMON}/team`);
  commit('SET_TEAM_INFO_TO_STATE', data);
}

module.exports = {
  GET_TEAM_INFO_FROM_API,
};
