import assert from 'assert';
import reducer from '../../../../lib/store/reducers/';
import {
  setPokemonName,
  setCandyCost,
  setPokemonAmount,
  setCandyAmount,
  setLuckyEgg,
  setTransfer,
  setMessage,
  setError,
  reset
} from '../../../../lib/store/actions/';

describe('reducer', () => {
  it('returns the default state', () => {
    const expectedNewState = {
      pokemonName: 'Pidgey',
      candyCost: 12,
      pokemonAmount: null,
      candyAmount: null,
      luckyEgg: false,
      transfer: false,
      error: false,
      message: 'Enter a Pokémon, the number of Pokémon you have and/or the number of Candy you have.'
    };
    const newState = reducer(undefined, { type: '' });
    assert.deepEqual(newState, expectedNewState);
  });

  it('sets pokemonName value for setPokemonName action', () => {
    const actionData = setPokemonName('some-pokemon');
    const newState = reducer({ existing: 'state' }, actionData);
    assert.equal(newState.existing, 'state');
    assert.equal(newState.pokemonName, 'some-pokemon');
  });

  it('sets candyCost value for setCandyCost action', () => {
    const actionData = setCandyCost('some-candy-cost');
    const newState = reducer({ existing: 'state' }, actionData);
    assert.equal(newState.existing, 'state');
    assert.equal(newState.candyCost, 'some-candy-cost');
  });

  it('sets pokemonAmount value for setPokemonAmount action', () => {
    const actionData = setPokemonAmount('some-pokemon-amount');
    const newState = reducer({ existing: 'state' }, actionData);
    assert.equal(newState.existing, 'state');
    assert.equal(newState.pokemonAmount, 'some-pokemon-amount');
  });

  it('sets candyAmount value for setCandyAmount action', () => {
    const actionData = setCandyAmount('some-candy-amount');
    const newState = reducer({ existing: 'state' }, actionData);
    assert.equal(newState.existing, 'state');
    assert.equal(newState.candyAmount, 'some-candy-amount');
  });

  it('sets luckyEgg value for setLuckyEgg action', () => {
    const actionData = setLuckyEgg('some-candy-amount');
    const newState = reducer({ existing: 'state' }, actionData);
    assert.equal(newState.existing, 'state');
    assert.equal(newState.luckyEgg, 'some-candy-amount');
  });

  it('sets transfer value for setTransfer action', () => {
    const actionData = setTransfer('some-transfer-value');
    const newState = reducer({ existing: 'state' }, actionData);
    assert.equal(newState.existing, 'state');
    assert.equal(newState.transfer, 'some-transfer-value');
  });

  it('sets error value for setError action', () => {
    const actionData = setError('some-error-value');
    const newState = reducer({ existing: 'state' }, actionData);
    assert.equal(newState.existing, 'state');
    assert.equal(newState.error, 'some-error-value');
  });

  it('sets message value for setMessage action', () => {
    const actionData = setMessage('some-message-value');
    const newState = reducer({ existing: 'state' }, actionData);
    assert.equal(newState.existing, 'state');
    assert.equal(newState.message, 'some-message-value');
  });

  it('resets the state when reset action is called', () => {
    const transferActionData = setTransfer('some-transfer-value');
    reducer({ existing: 'state' }, transferActionData);
    const resetActionData = reset();
    const newState = reducer({ existing: 'state' }, resetActionData);
    assert.deepEqual(newState, { existing: 'state'} );
  });

});
