import assert from 'assert';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import React from 'react';
import Calculator from '../../../lib/containers/Calculator';
import Search from '../../../lib/components/Search';
import Message from '../../../lib/components/Message';
import EntryBox from '../../../lib/components/EntryBox';
import TickBox from '../../../lib/components/TickBox';

import * as actions from '../../../lib/store/actions';

const store = {
  subscribe: function () {},
  dispatch: function () {},
  getState: function () {
    return {
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
    };
  }
};

describe('<Calculator />', () => {

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

  it('passes the processed app data into the search component', () => {
    const expectedOptions = [{
      groupId: '12',
      label: 'Pidgey',
      value: '12'
    }];

    const calculator = shallow(<Calculator store={store} />).dive();

    assert.deepEqual(calculator.find(Search).prop('groups'), store.getState().groups);
    assert.deepEqual(calculator.find(Search).prop('pokemon'), expectedOptions);
  });

  it('passes in a chance callback into the search component', () => {
    const calculator = shallow(<Calculator store={store} />).dive();
    assert.equal(typeof calculator.find(Search).prop('onChange'), 'function');
  });

  it('renders two message components', () => {
    const calculator = shallow(<Calculator store={store} />).dive();
    assert.equal(calculator.find(Message).length, 2);
  });

  it('renders two entrybox components', () => {
    const calculator = shallow(<Calculator store={store} />).dive();
    assert.equal(calculator.find(EntryBox).length, 2);
  });

  it.skip('renders two tickbox components', () => {
    const calculator = shallow(<Calculator store={store} />).dive();
    assert.equal(calculator.find(TickBox).length, 2);
  });

  it('renders the reset input button', () => {
    const calculator = shallow(<Calculator store={store} />).dive();
    assert.equal(calculator.find('.calculator__reset').length, 1);
  });

  it('calls the setPokemonName and setCandyCost action when the search input is changed');

  it('calls the setPokemonAmount action when the input is changed');

  it('calls the setCandyAmount action when the input is changed');

  it('calls the setLuckyEgg action when the checkbox is clicked');

  it('calls the setTransder action when the checkbox is clicked');

  it('calls the reset action when the reset button is clicked', () => {
    const resetSpy = sinon.spy(actions, 'reset');
    const calculator = shallow(<Calculator store={store} />).dive();
    calculator.find('.calculator__reset').simulate('click');
    sinon.assert.calledOnce(resetSpy);
  });
});
