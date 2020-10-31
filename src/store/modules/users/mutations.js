function SET_USER_TO_STATE(state, userLogin, userName) {
  state.user.login = userLogin;
  if (userName !== '') {
    state.isAdmin = true;
  } else state.isAdmin = false;
}

function SET_DEFAULT_INFO_OF_USER(state) {
  state.isAdmin = false;
  state.user.login = '';
}

function SET_USERS_TO_STATE(state, users) {
  state.users = users;
}

exports.module = {
  SET_USER_TO_STATE,
  SET_USERS_TO_STATE,
  SET_DEFAULT_INFO_OF_USER,
};
