function SET_HEROES_TO_STATE(state, heroes) {
  state.heroes = heroes;
}

function SET_HERO_TO_STATE(state, hero) {
  state.hero = hero;
}

exports.module = {
  SET_HERO_TO_STATE,
  SET_HEROES_TO_STATE,
};
