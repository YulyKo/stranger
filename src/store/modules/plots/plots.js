import axios from 'axios';
import { URL_COMMON } from '@/utils';

const http_post_module = {
  namespaced: true,
  state: {
    plots: null,
  },
  getters: {
    PLOTS: (state) => state.plots,
  },
  mutations: {
    SET_PLOTS_TO_STATE: (state, plots) => state.plots = plots,
    DELETE_PLOT_FROM_STATE: (state, plot) => {
      for (let index = 0; index < state.plots.length; index++) {
        if (state.plots[index].data.id === plot.id) { state.plots.splice(index, plot); }
      }
    },
  },
  actions: {
    async GET_PLOTS_FROM_API(context) {
      const { data } = await axios.get(`${URL_COMMON}/plots_with_tags_persons_locations`);
      context.commit('SET_PLOTS_TO_STATE', data);
    },
    async DELETE_PLOT_FROM_API_BY_ID(context, id) {
      await axios.delete(`${URL_COMMON}/plots_with_tags_persons_locations/delete/${id}`)
        .then(() => console.log('ok'));
    },
    async POST_LIKE_IN_PLOT_BY_ID(context, data) {
      await axios.post(`${URL_COMMON}/insertUserLikesPlot/`, data);
      console.log('work');
    },
    async PUT_LIKES_IN_PLOT_BY_ID(context, data) {
      await axios.put(`${URL_COMMON}/updateLikesInPlot/${data.id}`, data);
      console.log('work');
    },
    async DELETE_DISLIKE_IN_PLOT_BY_ID(context, data) {
      await axios.delete(`${URL_COMMON}/deleteUserLikesPlot`, data);
      console.log('work');
    },

    async PUT_DISLIKE_IN_PLOT_BY_ID(context, data) {
      await axios.put(`${URL_COMMON}/updateLikesInPlot/${data.id}`, data);
      console.log('work');
    },
  },
};

export default http_post_module;
