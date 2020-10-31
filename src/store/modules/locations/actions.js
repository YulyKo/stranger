import axios from 'axios';
import URL_COMMON from '@/utils';

async function GET_LOCATION_FROM_API_BY_ID(context, id) {
  const { data } = await axios.get(`${URL_COMMON}/locations/${id}`);
  context.commit('SET_LOCATIONS_TO_STATE', data[0]);
}

async function POST_LOCATION_TO_API(context, payload) {
  await axios.post(`${URL_COMMON}/locations`, payload);
}

async function DELETE_LOCATION_FROM_API_BY_ID(context, id) {
  await axios.delete(`${URL_COMMON}/locations/${id}`)
    .then(() => console.log('ok'));
}

async function GET_LOCATIONS_FROM_API(context) {
  const { data } = await axios.get(`${URL_COMMON}/locations`);
  context.commit('SET_LOCATIONS_TO_STATE', data);
}

exports.module = {
  GET_LOCATION_FROM_API_BY_ID,
  POST_LOCATION_TO_API,
  DELETE_LOCATION_FROM_API_BY_ID,
  GET_LOCATIONS_FROM_API,
};
