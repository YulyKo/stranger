import axios from 'axios';
import URL_COMMON from '@/utils';

async function SET_TAG_TO_API(context, payload) {
  await axios.post(`${URL_COMMON}/tags`, payload);
}

async function GET_TAGS_FROM_API(context, category) {
  const { data } = await axios.get(`${URL_COMMON}/tags/${category}`);
  context.commit('SET_TAGS_TO_STATE', data);
}

async function DELETE_TAG_FROM_API_BY_ID(context, data) {
  await axios.delete(`${URL_COMMON}/tags/delete/${data.id}&${data.id_type}`)
    .then(() => console.log('ok'));
}

exports.module = {
  SET_TAG_TO_API,
  GET_TAGS_FROM_API,
  DELETE_TAG_FROM_API_BY_ID,
};
