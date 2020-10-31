import axios from 'axios';
import URL_COMMON from '@/utils';

async function GET_PLOT_FROM_API_BY_ID(context, id) {
  const { data } = await axios.get(`${URL_COMMON}/plots_with_tags_persons_locations/${id}`);
  context.commit('SET_PLOT_TO_STATE', data.plot);
}

async function POST_PLOT_TO_API(context, plot) {
  await axios.post(`${URL_COMMON}/plots`, plot);
}

async function GET_PLOTS_FROM_API(context) {
  const { data } = await axios.get(`${URL_COMMON}/plots_with_tags_persons_locations`);
  context.commit('SET_PLOTS_TO_STATE', data);
}

async function DELETE_PLOT_FROM_API_BY_ID(context, id) {
  await axios.delete(`${URL_COMMON}/plots_with_tags_persons_locations/delete/${id}`)
    .then(() => console.log('ok'));
}

async function POST_LIKE_IN_PLOT_BY_ID(context, data) {
  await axios.post(`${URL_COMMON}/insertUserLikesPlot/`, data);
  console.log('work');
}

async function PUT_LIKES_IN_PLOT_BY_ID(context, data) {
  await axios.put(`${URL_COMMON}/updateLikesInPlot/${data.id}`, data);
  console.log('work');
}

async function DELETE_DISLIKE_IN_PLOT_BY_ID(context, data) {
  await axios.delete(`${URL_COMMON}/deleteUserLikesPlot`, data);
  console.log('work');
}

async function PUT_DISLIKE_IN_PLOT_BY_ID(context, data) {
  await axios.put(`${URL_COMMON}/updateLikesInPlot/${data.id}`, data);
  console.log('work');
}

exports.module = {
  GET_PLOT_FROM_API_BY_ID,
  POST_PLOT_TO_API,
  GET_PLOTS_FROM_API,
  DELETE_PLOT_FROM_API_BY_ID,
  POST_LIKE_IN_PLOT_BY_ID,
  PUT_LIKES_IN_PLOT_BY_ID,
  DELETE_DISLIKE_IN_PLOT_BY_ID,
  PUT_DISLIKE_IN_PLOT_BY_ID,
};
