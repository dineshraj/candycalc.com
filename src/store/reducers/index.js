const defaultState = {
  pokemonName: 'Pidgey',
  candyCost: 12,
  pokemonAmount: null,
  candyAmount: null,
  luckyEgg: false,
  transfer: false,
  error: false,
  message: 'Enter a Pokémon, the number of Pokémon you have and/or the number of Candy you have.'
};

function calculatorReducer(state = defaultState, action) {
  switch (action.type) {
  case 'POKEMON_NAME':
    return {
      ...state,
      pokemonName: action.payload
    };
  case 'CANDY_COST':
    return {
      ...state,
      candyCost: action.payload
    };
  case 'POKEMON_AMOUNT':
    return {
      ...state,
      pokemonAmount: action.payload
    };
  case 'CANDY_AMOUNT':
    return {
      ...state,
      candyAmount: action.payload
    };
  case 'LUCKY_EGG':
    return {
      ...state,
      luckyEgg: action.payload
    };
  case 'TRANSFER':
    return {
      ...state,
      transfer: action.payload
    };
  case 'ERROR':
    return {
      ...state,
      error: action.payload
    };
  case 'MESSAGE':
    return {
      ...state,
      message: action.payload
    };
  default:
    return state;
  }
}

export default calculatorReducer;
