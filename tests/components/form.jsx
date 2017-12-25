import assert from 'assert';
import { shallow } from 'enzyme';

import React from 'react';
import Form from '../../components/Form';
import Search from '../../components/Search';

describe('<Form />', () => {

  it('renders the Form correctly', () => {
    const form = shallow(<Form />);

    assert.equal(form.prop('className'), 'calculator');
  });

  it('renders the form element correctly', () => {
    const form = shallow(<Form />);
    const formElement = form.find('form');
    assert.equal(typeof formElement.prop('onSubmit'), 'function');
  });

  it('renders the search component', () => {
    const form = shallow(<Form />);
    assert.equal(form.find(Search).length, 1);
  });

  it('passes the app data into the search component', () => {
    const groupStub = { testPokemon: 'testPokemon' };
    const pokemonStub = { testPokemon: 'testPokemon' };
    const form = shallow(<Form groups={groupStub} pokemon={pokemonStub} />);

    assert.deepEqual(form.find(Search).prop('groups'), groupStub);
    assert.deepEqual(form.find(Search).prop('pokemon'), pokemonStub);
  });

});
