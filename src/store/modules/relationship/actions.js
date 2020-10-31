import axios from 'axios';
import URL_COMMON from '@/utils';

async function GET_RELATIONSHIPS_FROM_API(context) {
  const { data } = await axios.get(`${URL_COMMON}/relationships`);
  context.commit('SET_RELATIONSHIPS_TO_STATE', data);
}

async function GET_RELATIONSHIP_FROM_API_BY_ID(context, id) {
  const { data } = await axios.get(`${URL_COMMON}/relationships/${id}`);
  context.commit('SET_RELATIONSHIP_TO_STORE', data);
}

async function POST_RELATIONSHIP_TO_API(context, payload) {
  await axios.post(`${URL_COMMON}/relationships`, payload);
}

async function GET_RELATIONSHIP_TYPES_FROM_API(context) {
  const { data } = await axios.get(`${URL_COMMON}/type_relationships`);
  context.commit('SET_RELATIONSHIP_TYPES_TO_STORE', data);
}

async function POST_NEW_RELATIONSHIP_TYPE_TO_API(context, payload) {
  await axios.post(`${URL_COMMON}/type_relationships`, payload);
  context.commit('SET_NEW_RELATIONSHIP_TYPE_TO_STORE', payload);
}

async function DELETE_RELATIONSHIP_TYPE_FROM_API_BY_ID(context, id) {
  await axios.delete(`${URL_COMMON}/type_relationships/${id}`);
  context.commit('DEL_RELATIONSHIP_TYPE_FROM_STORE'.id);
}

exports.module = {
  GET_RELATIONSHIPS_FROM_API,
  GET_RELATIONSHIP_FROM_API_BY_ID,
  POST_RELATIONSHIP_TO_API,
  GET_RELATIONSHIP_TYPES_FROM_API,
  POST_NEW_RELATIONSHIP_TYPE_TO_API,
  DELETE_RELATIONSHIP_TYPE_FROM_API_BY_ID,
};
