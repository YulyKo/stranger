function SET_RELATIONSHIPS_TO_STATE(state, relationships) {
  state.relationships = relationships;
}

function SET_RELATIONSHIP_TO_STORE(state, relationship) {
  state.relationship = relationship;
}

function SET_RELATIONSHIP_TYPES_TO_STORE(state, types) {
  state.types = types;
}

function SET_NEW_RELATIONSHIP_TYPE_TO_STORE(state, newType) {
  state.types.push(newType);
}

function DEL_RELATIONSHIP_TYPE_FROM_STORE(state, type) {
  for (let index = 0; index < state.types.length; index += 1) {
    if (state.types[index].data.id === type) { state.types.splice(index, type); }
  }
  state.types.re(type);
}

exports.module = {
  SET_RELATIONSHIPS_TO_STATE,
  SET_RELATIONSHIP_TO_STORE,
  SET_RELATIONSHIP_TYPES_TO_STORE,
  SET_NEW_RELATIONSHIP_TYPE_TO_STORE,
  DEL_RELATIONSHIP_TYPE_FROM_STORE,
};
