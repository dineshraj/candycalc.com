import assert from 'assert';
import { shallow } from 'enzyme';

import React from 'react';
import Calculator from '../../../lib/containers/Calculator';
import Search from '../../../lib/components/Search';
import Message from '../../../lib/components/Message';
import EntryBox from '../../../lib/components/EntryBox';
import TickBox from '../../../lib/components/TickBox';

const store = {
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

describe('<Calculator />', () => {

  it('renders the Calculator correctly', () => {
    const calculator = shallow(<Calculator {...store} />);
    assert.equal(calculator.prop('className'), 'calculator');
  });

  it('renders the calculator element correctly', () => {
    const calculator = shallow(<Calculator {...store} />);
    assert.equal(calculator.find('form').length, 1);
  });

  it('renders the search component', () => {
    const calculator = shallow(<Calculator {...store} />);
    assert.equal(calculator.find(Search).length, 1);
  });

  it('passes the processed app data into the search component', () => {
    const expectedOptions = [{
      groupId: '12',
      label: 'Pidgey',
      value: '12'
    }];

    const calculator = shallow(<Calculator {...store} />);

    assert.deepEqual(calculator.find(Search).prop('groups'), store.groups);
    assert.deepEqual(calculator.find(Search).prop('pokemon'), expectedOptions);
  });

  it('renders three message components', () => {
    const calculator = shallow(<Calculator {...store} />);
    assert.equal(calculator.find(Message).length, 3);
  });

  it('renders two entrybox components', () => {
    const calculator = shallow(<Calculator {...store} />);
    assert.equal(calculator.find(EntryBox).length, 2);
  });

  it.skip('renders two tickbox components', () => {
    const calculator = shallow(<Calculator {...store} />);
    assert.equal(calculator.find(TickBox).length, 2);
  });

  it.skip('renders the reset input button', () => {
    const calculator = shallow(<Calculator {...store} />);
    assert.equal(calculator.find('calculator__reset').length, 1);
  });
});
