import axios from 'axios';
import URL_COMMON from '@/utils';

async function GET_HERO_FROM_API_BY_ID(context, id) {
  const { data } = await axios.get(`${URL_COMMON}/persons/${id}`);
  context.commit('SET_HERO_TO_STATE', data[0]);
}

async function GET_HEROES_FROM_API(context) {
  const { data } = await axios.get(`${URL_COMMON}/persons`);
  context.commit('SET_HEROES_TO_STATE', data);
}

async function POST_HERO_TO_API(context, hero) {
  await axios.post(`${URL_COMMON}/persons`, hero);
}

async function DELETE_HERO_FROM_API_BY_ID(context, id) {
  await axios.delete(`${URL_COMMON}/persons/${id}`);
}

exports.module = {
  GET_HERO_FROM_API_BY_ID,
  GET_HEROES_FROM_API,
  POST_HERO_TO_API,
  DELETE_HERO_FROM_API_BY_ID,
};
