const SET_TAG_TO_STATE = (state, tag) => { state.art = tag; };
const ADD_TAG = (state, tag) => { state.tag = tag; };
const SET_TAGS_TO_STATE = (state, tags) => { state.tags = tags; };

exports.module = {
  SET_TAG_TO_STATE,
  SET_TAGS_TO_STATE,
  ADD_TAG,
};
