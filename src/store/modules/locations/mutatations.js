function SET_LOCATION_TO_STATE(state, location) {
  state.location = location;
}

function SET_LOCATIONS_TO_STATE(state, locations) {
  state.locations = locations;
}

exports.module = {
  SET_LOCATIONS_TO_STATE,
  SET_LOCATION_TO_STATE,
};
