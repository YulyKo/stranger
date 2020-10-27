// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';
import firebase from 'firebase';
import { URL_COMMON } from '@/utils';

const module = {
  namespaced: true,
  state: {
    arts: null,
  },
  getters: {
    ARTS: (state) => state.arts,
  },
  mutations: {
    SET_ARTS_TO_STATE: (state, arts) => state.arts = arts,
  },
  actions: {
    async GET_ARTS_FROM_API(context) {
      const { data } = await axios.get(`${URL_COMMON}/arts`);
      context.commit('SET_ARTS_TO_STATE', data);
    },
    async DELETE_ART_FROM_API_BY_ID(context, id) {
      await axios.delete(`${URL_COMMON}/arts_with_tags/delete/${id}`)
        .then(() => console.log('ok'));
    },
    async DELETE_ART_IMAGE_FROM_FIREBASE(context, fileName) {
      const storageRef = firebase.storage().ref();
      const desertRef = storageRef.child(`arts/${fileName}`);
      desertRef.delete().then(() => {
        console.log('deleted');
      }).catch((error) => {
        throw error;
      });
    },
  },
};

export default module;
