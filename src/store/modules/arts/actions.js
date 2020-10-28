import axios from 'axios';
import URL_COMMON from '@/utils';
import firebase from 'firebase';

async function GET_ARTS_FROM_API(context) {
  const { data } = await axios.get(`${URL_COMMON}/arts`);
  context.commit('SET_ARTS_TO_STATE', data);
}

async function DELETE_ART_FROM_API_BY_ID(context, id) {
  await axios.delete(`${URL_COMMON}/arts_with_tags/delete/${id}`)
    .then(() => console.log('ok'));
}

async function DELETE_ART_IMAGE_FROM_FIREBASE(context, fileName) {
  const storageRef = firebase.storage().ref();
  const desertRef = storageRef.child(`arts/${fileName}`);
  desertRef.delete().then(() => {
    console.log('deleted');
  }).catch((error) => {
    throw error;
  });
}

async function GET_ART_FROM_API_BY_ID(context, id) {
  const { data } = await axios.get(`${URL_COMMON}/arts/${id}`);
  context.commit('SET_ART_TO_STATE', data);
}

async function POST_ART_TO_API(context, payload) {
  await axios.post(`${URL_COMMON}/arts_with_tags`, payload);
}

exports.module = {
  GET_ARTS_FROM_API,
  DELETE_ART_FROM_API_BY_ID,
  DELETE_ART_IMAGE_FROM_FIREBASE,
  GET_ART_FROM_API_BY_ID,
  POST_ART_TO_API,
};
