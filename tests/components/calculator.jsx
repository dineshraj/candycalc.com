import assert from 'assert';
import { shallow } from 'enzyme';

import React from 'react';
import Calculator from '../../components/Calculator';
import Search from '../../components/Search';
import Message from '../../components/Message';

const data = {
  groups: 'testGroup',
  pokemon: [ ['testPokemon', 'testGroup'] ]
};

describe('<Calculator />', () => {

  it('renders the Calculator correctly', () => {
    const calculator = shallow(<Calculator groups={data.groups} pokemon={data.pokemon} />);
    assert.equal(calculator.prop('className'), 'calculator');
  });

  it('renders the calculator element correctly', () => {
    const calculator = shallow(<Calculator groups={data.groups} pokemon={data.pokemon} />);
    const formElement = calculator.find('form');
    assert.equal(typeof formElement.prop('onSubmit'), 'function');
  });

  it('renders the search component', () => {
    const calculator = shallow(<Calculator groups={data.groups} pokemon={data.pokemon} />);
    assert.equal(calculator.find(Search).length, 1);
  });

  it('passes the processed app data into the search component', () => {
    const expectedOptions = [{
      groupId: 'testGroup',
      label: 'testPokemon',
      value: 'testGroup'
    }];

    const calculator = shallow(<Calculator groups={data.groups} pokemon={data.pokemon} />);

    assert.deepEqual(calculator.find(Search).prop('groups'), data.groups);
    assert.deepEqual(calculator.find(Search).prop('pokemon'), expectedOptions);
  });

  it('renders the message component', () => {
    const calculator = shallow(<Calculator groups={data.groups} pokemon={data.pokemon} />);
    assert.equal(calculator.find(Message).length, 1);
  });

});
