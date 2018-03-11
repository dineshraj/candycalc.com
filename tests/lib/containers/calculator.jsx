import { assert } from 'chai';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import React from 'react';
import Calculator from '../../../lib/containers/Calculator';
import Search from '../../../lib/components/Search';
import Message from '../../../lib/components/Message';
import EntryBox from '../../../lib/components/EntryBox';
import TickBox from '../../../lib/components/TickBox';
import * as actions from '../../../lib/store/actions';
import configureStore from 'redux-mock-store';

const mockStore = configureStore();
const initialState = {
  pokemonName: 'Pidgey',
  candyCost: 12,
  pokemonAmount: null,
  candyAmount: null,
  luckyEgg: false,
  transfer: false,
  error: false,
  message: 'Enter a Pokémon, the number of Pokémon you have and/or the number of Candy you have.',
  groups: [
    {
      groupId: '12',
      title: '12 Candies'
    }, {
      groupId: '25',
      title: '25 Candies'
    }
  ],
  pokemon: [
    ['Pidgey', '12'],
    ['Weedle', '12']
  ]
};

const store = getMockStore();

function getMockStore(override = {}) {
  return mockStore(
    Object.assign(
      {},
      initialState,
      override
    )
  );
}

describe('<Calculator />', () => {


  it('passes the processed app data into the search component', () => {
    const calculator = shallow(<Calculator store={store} />).dive();
    const expectedPokemonData = [ [ 'Pidgey', '12' ], [ 'Weedle', '12' ] ];

    assert.deepEqual(calculator.find(Search).prop('groups'), store.getState().groups);
    assert.deepEqual(expectedPokemonData, store.getState().pokemon);
  });

  it('passes in a change callback into the search component', () => {
    const calculator = shallow(<Calculator store={store} />).dive();
    assert.equal(typeof calculator.find(Search).prop('onChange'), 'function');
  });

  describe('rendering', () => {

    it('renders the Calculator correctly', () => {
      const calculator = shallow(<Calculator store={store} />).dive();
      assert.equal(calculator.find('.calculator').length, 1);
    });

    it('renders the calculator element correctly', () => {
      const calculator = shallow(<Calculator store={store} />).dive();
      assert.equal(calculator.find('form').length, 1);
    });

    it('renders the search component', () => {
      const calculator = shallow(<Calculator store={store} />).dive();
      assert.equal(calculator.find(Search).length, 1);
    });

    it('renders two message components', () => {
      const calculator = shallow(<Calculator store={store} />).dive();
      assert.equal(calculator.find(Message).length, 2);
    });

    it('renders two entrybox components', () => {
      const calculator = shallow(<Calculator store={store} />).dive();
      assert.equal(calculator.find(EntryBox).length, 2);
    });

    it('renders two tickbox components', () => {
      const calculator = mount(<Calculator store={store} />);
      assert.equal(calculator.find('.tick-box').length, 2);
    });

    it('renders the reset input button', () => {
      const calculator = shallow(<Calculator store={store} />).dive();
      assert.equal(calculator.find('.calculator__reset').length, 1);
    });

  });

  describe('dispatches', () => {

    it('calls the setPokemonName and setCandyCost action when the search input is changed', () => {
      const setPokemonNameSpy = sinon.spy(actions, 'setPokemonName');
      const setCandyCostSpy = sinon.spy(actions, 'setCandyCost');
      const calculator = shallow(<Calculator store={store} />);
      calculator.dive().find(Search).simulate('change', { target: { value: 'Weedle' } } );
      sinon.assert.calledOnce(setPokemonNameSpy);
      sinon.assert.calledOnce(setCandyCostSpy);
    });

    it('calls the setPokemonAmount action when the input is changed', () => {
      const setPokemonAmountSpy = sinon.spy(actions, 'setPokemonAmount');
      const calculator = mount(<Calculator store={store} />);
      calculator.find('.entry-box__input').at(0).simulate('change', { target: { value: 1 } } );
      sinon.assert.calledOnce(setPokemonAmountSpy);
      const pokemonAmount = setPokemonAmountSpy.getCall(0).args[0];
      assert.equal(typeof pokemonAmount, 'number');
    });

    it('calls the setCandyAmount action when the input is changed', () => {
      const setCandyAmountSpy = sinon.spy(actions, 'setCandyAmount');
      const calculator = mount(<Calculator store={store} />);
      calculator.find('.entry-box__input').at(1).simulate('change', { target: { value: 1 } } );
      sinon.assert.calledOnce(setCandyAmountSpy);
      const candyAmount = setCandyAmountSpy.getCall(0).args[0];
      assert.equal(typeof candyAmount, 'number');
    });

    it('calls the setLuckyEgg action when the checkbox is clicked', () => {
      const setLuckyEggSpy = sinon.spy(actions, 'setLuckyEgg');
      const calculator = mount(<Calculator store={store} />);
      calculator.find('.tick-box__input').at(0).simulate('change');
      sinon.assert.calledOnce(setLuckyEggSpy);
    });

    it('calls the setTransfer action when the checkbox is clicked', () => {
      const setTransferSpy = sinon.spy(actions, 'setTransfer');
      const calculator = mount(<Calculator store={store} />);
      calculator.find('.tick-box__input').at(1).simulate('change');
      sinon.assert.calledOnce(setTransferSpy);
    });

    it('calls the reset action when the reset button is clicked', () => {
      const resetSpy = sinon.spy(actions, 'reset');
      const calculator = shallow(<Calculator store={store} />).dive();
      calculator.find('.calculator__reset').simulate('click');
      sinon.assert.calledOnce(resetSpy);
    });

  });

  describe('app logic', () => {
    let node;

    beforeEach(() => {
      node = document.createElement('div');
    })

    it('displays the default message if pokemonAmount and candyAmount is false', () => {
      const calculator = shallow(<Calculator store={store} />);
      const message = calculator.dive().find(Message).get(0).props.message;
      const defaultText = 'Enter a Pokémon, the number of Pokémon you have and/or the number of Candy you have.';
      assert.equal(message, defaultText);
    });

    it('does not display default message if pokemonAmount has a value', () => {
      const store = getMockStore({ pokemonAmount: 1 });
      const calculator = mount(<Calculator store={store} />);
      const message = calculator.find(Message).get(0).props.message;
      const defaultText = 'Enter a Pokémon, the number of Pokémon you have and/or the number of Candy you have.';
      assert.notEqual(message, defaultText);
    });

    it('does not display default message if candyAmount has a value', () => {
      const store = getMockStore({ candyAmount: 2 });
      const calculator = shallow(<Calculator store={store} />);
      const text = calculator.dive().find(Message).get(0).props.message;
      const defaultText = 'Enter a Pokémon, the number of Pokémon you have and/or the number of Candy you have.';
      assert.notEqual(text, defaultText);
    });

    it('displays the correct message if you have none of the chosen pokemon', () => {
      const store = getMockStore({ pokemonAmount: 0, candyAmount: 24 });
      const calculator = shallow(<Calculator store={store} />);
      const message = calculator.dive().find(Message).get(0).props.message;
      const expectedText = 'You must have at least one Pidgey if you want to evolve some!';
      assert.equal(message, expectedText);
    });

    it('displays correct message if you do not have enough candy to evolve your pokemon', () => {
      const store = getMockStore({ pokemonAmount: 1, candyAmount: 1 });
      const calculator = shallow(<Calculator store={store} />);
      const message = calculator.dive().find(Message).get(0).props.message;
      const expectedText = 'You don\'t have enough Candy to evolve any of your Pidgey, you need at least 12. Catch some more to get more Candy!';
      assert.equal(message, expectedText);
    });

    it('calculates if you can evolve all your pokemon and how much candy is left', () => {
      const store = getMockStore({ pokemonAmount: 1, candyAmount: 28 });
      const calculator = shallow(<Calculator store={store} />);
      const message = calculator.dive().find(Message).get(0).props.message;
      const expectedText = 'You can evolve all your Pidgey using your 28 Candy. You\'ll have 17 Candy left over, better go catch some more!';
      assert.include(message, expectedText);
    });

    it('calculates maximum amount of pokemon you can evolve and how much candy is left', () => {
      const store = getMockStore({ pokemonAmount: 3, candyAmount: 28 });
      const calculator = shallow(<Calculator store={store} />);
      const message = calculator.dive().find(Message).get(0).props.message;
      const expectedText = 'You can evolve 2 of your 3 Pidgey. You\'ll have 6 Candy left over, better go catch some more!';
      assert.include(message, expectedText);
    });

    it('calculates XP you will earn', () => {
      const store = getMockStore({ pokemonAmount: 1, candyAmount: 28 });
      const calculator = shallow(<Calculator store={store} />);
      const message = calculator.dive().find(Message).get(0).props.message;
      const expectedText = 'You\'ll earn 500 XP';
      assert.include(message, expectedText);
    });

    it('calculates XP you will earn with a lucky egg', () => {
      const store = getMockStore({ pokemonAmount: 1, candyAmount: 28, luckyEgg: true });
      const calculator = shallow(<Calculator store={store} />);
      const message = calculator.dive().find(Message).get(0).props.message;
      const expectedText = 'You\'ll earn 1000 XP';
      assert.include(message, expectedText);
    });

    it('calculates maximum amount of pokemon you can evolve when also transfering', () => {
      const store = getMockStore({ pokemonAmount: 2, candyAmount: 22, transfer: true });
      const calculator = shallow(<Calculator store={store} />);
      const message = calculator.dive().find(Message).get(0).props.message;
      const expectedText = 'You can evolve all your Pidgey using your 22 Candy if you transfer your evolutions.';
      assert.include(message, expectedText);
    });

    it('calculates how much candy is left when also tranferring', () => {
      const store = getMockStore({ pokemonAmount: 2, candyAmount: 22, transfer: true });
      const calculator = shallow(<Calculator store={store} />);
      const message = calculator.dive().find(Message).get(0).props.message;
      const expectedText = 'You\'ll have 2 Candy left over';
      assert.include(message, expectedText);
    });

  });

});
