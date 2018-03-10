import assert from 'assert';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import React from 'react';
import Calculator from '../../../lib/containers/Calculator';
import Search from '../../../lib/components/Search';
import Message from '../../../lib/components/Message';
import EntryBox from '../../../lib/components/EntryBox';
import TickBox from '../../../lib/components/TickBox';

import * as actions from '../../../lib/store/actions';

function getFakeStore(overrides) {
  return {
    subscribe: function () {},
    dispatch: function () {},
    getState: function () {
      return Object.assign({
        pokemonName: 'Pidgey',
        candyCost: 12,
        pokemonAmount: null,
        candyAmount: null,
        luckyEgg: false,
        transfer: false,
        error: false,
        pokemon: [
          ['Pidgey', '12']
        ],
        groups: [
          {
            'groupId': '12',
            'title': '12 Candies'
          }
        ]
      }, overrides);
    }
  };
}

describe('<Calculator />', () => {


  it('passes the processed app data into the search component', () => {
    const expectedOptions = [{
      groupId: '12',
      label: 'Pidgey',
      value: '12'
    }];
    const store = getFakeStore();

    const calculator = shallow(<Calculator store={store} />).dive();

    assert.deepEqual(calculator.find(Search).prop('groups'), store.getState().groups);
    assert.deepEqual(calculator.find(Search).prop('pokemon'), expectedOptions);
  });

  it('passes in a change callback into the search component', () => {
    const calculator = shallow(<Calculator store={getFakeStore()} />).dive();
    assert.equal(typeof calculator.find(Search).prop('onChange'), 'function');
  });

  describe('rendering', () => {

    it('renders the Calculator correctly', () => {
      const calculator = shallow(<Calculator store={getFakeStore()} />).dive();
      assert.equal(calculator.find('.calculator').length, 1);
    });

    it('renders the calculator element correctly', () => {
      const calculator = shallow(<Calculator store={getFakeStore()} />).dive();
      assert.equal(calculator.find('form').length, 1);
    });

    it('renders the search component', () => {
      const calculator = shallow(<Calculator store={getFakeStore()} />).dive();
      assert.equal(calculator.find(Search).length, 1);
    });

    it('renders two message components', () => {
      const calculator = shallow(<Calculator store={getFakeStore()} />).dive();
      assert.equal(calculator.find(Message).length, 2);
    });

    it('renders two entrybox components', () => {
      const calculator = shallow(<Calculator store={getFakeStore()} />).dive();
      assert.equal(calculator.find(EntryBox).length, 2);
    });

    it('renders two tickbox components', () => {
      const calculator = mount(<Calculator store={getFakeStore()} />);
      assert.equal(calculator.find('.tick-box').length, 2);
    });

    it('renders the reset input button', () => {
      const calculator = shallow(<Calculator store={getFakeStore()} />).dive();
      assert.equal(calculator.find('.calculator__reset').length, 1);
    });

  });

  describe('dispatches', () => {

    it('calls the setPokemonName and setCandyCost action when the search input is changed', () => {
      const setPokemonNameSpy = sinon.spy(actions, 'setPokemonName');
      const setCandyCostSpy = sinon.spy(actions, 'setCandyCost');
      const calculator = shallow(<Calculator store={getFakeStore()} />);
      const search = calculator.dive().find(Search).simulate('change', { target: { value: 'Weedle' } } );
      sinon.assert.calledOnce(setPokemonNameSpy);
      sinon.assert.calledOnce(setCandyCostSpy);
    });

    it('calls the setPokemonAmount action when the input is changed', () => {
      const setPokemonAmountSpy = sinon.spy(actions, 'setPokemonAmount');
      const calculator = mount(<Calculator store={getFakeStore()} />);
      const search = calculator.find('.entry-box__input').at(0).simulate('change', { target: { value: 1 } } );
      sinon.assert.calledOnce(setPokemonAmountSpy);
    });

    it('calls the setCandyAmount action when the input is changed', () => {
      const setCandyAmountSpy = sinon.spy(actions, 'setCandyAmount');
      const calculator = mount(<Calculator store={getFakeStore()} />);
      const search = calculator.find('.entry-box__input').at(1).simulate('change', { target: { value: 1 } } );
      sinon.assert.calledOnce(setCandyAmountSpy);
    });

    it('calls the setLuckyEgg action when the checkbox is clicked', () => {
      const setLuckyEggSpy = sinon.spy(actions, 'setLuckyEgg');
      const calculator = mount(<Calculator store={getFakeStore()} />);
      const search = calculator.find('.tick-box__input').at(0).simulate('change');
      sinon.assert.calledOnce(setLuckyEggSpy);
    });

    it('calls the setTransfer action when the checkbox is clicked', () => {
      const setTransferSpy = sinon.spy(actions, 'setTransfer');
      const calculator = mount(<Calculator store={getFakeStore()} />);
      const search = calculator.find('.tick-box__input').at(1).simulate('change');
      sinon.assert.calledOnce(setTransferSpy);
    });

    it('calls the reset action when the reset button is clicked', () => {
      const resetSpy = sinon.spy(actions, 'reset');
      const calculator = shallow(<Calculator store={getFakeStore()} />).dive();
      calculator.find('.calculator__reset').simulate('click');
      sinon.assert.calledOnce(resetSpy);
    });

  });

  it('displays the correct message if pokemonAmount and candyAmount is false', () => {
    const calculator = shallow(<Calculator store={getFakeStore()} />);
    const message = calculator.dive().find(Message).get(0).props.message;
    const expectedText = 'Enter a Pokémon, the number of Pokémon you have and/or the number of Candy you have.';
    assert.equal(message, expectedText)
  });

  it('displays the updated message if pokemonAmount and candyAmount have values', () => {
    const calculator = shallow(<Calculator store={getFakeStore({ pokemonAmount: 2, candyAmount: 2 })} />);
    const message = calculator.dive().find(Message).get(0).props.message;
    const expectedText = 'test';
    assert.equal(message, expectedText)
  });

});
