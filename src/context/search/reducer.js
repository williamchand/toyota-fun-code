const cases = {
  POKEMON_VALUE: (state, payload) => ({
    ...state,
    pokemon: payload,
  })
};

const reducer = (state, action) => {
  return cases[action.type](state, action.payload);
};

export default reducer;