function SET_PLOT_TO_STATE(state, plot) { state.plot = plot; }

function SET_PLOTS_TO_STATE(state, plots) { state.plots = plots; }

function DELETE_PLOT_FROM_STATE(state, plot) {
  for (let index = 0; index < state.plots.length; index += 1) {
    if (state.plots[index].data.id === plot.id) { state.plots.splice(index, plot); }
  }
}

exports.module = {
  SET_PLOT_TO_STATE,
  SET_PLOTS_TO_STATE,
  DELETE_PLOT_FROM_STATE,
};
