export function setPokemonName(payload) {
  return {
    type: 'POKEMON_NAME',
    payload
  };
}

export function setCandyCost(payload) {
  return {
    type: 'CANDY_COST',
    payload
  };
}

export function setPokemonAmount(payload) {
  return {
    type: 'POKEMON_AMOUNT',
    payload
  };
}

export function setCandyAmount(payload) {
  return {
    type: 'CANDY_AMOUNT',
    payload
  };
}

export function setLuckyEgg(payload) {
  return {
    type: 'LUCKY_EGG',
    payload
  };
}

export function setTransfer(payload) {
  return {
    type: 'TRANSFER',
    payload
  };
}

export function setError(payload) {
  return {
    type: 'ERROR',
    payload
  };
}

export function setMessage(payload) {
  return {
    type: 'MESSAGE',
    payload
  };
}
export function reset() {
  return {
    type: 'RESET'
  };
}
