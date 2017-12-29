import assert from 'assert';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import React from 'react';
import Search from '../../../lib/components/Search';
import { SimpleSelect } from 'react-selectize';

const pokemonData = [
  ['pokemon', 'candy']
];

describe('<Search />', () => {

  it('renders the search component correctly', () => {
    const search = shallow(<Search pokemon={pokemonData}/>);

    assert.equal(search.find(SimpleSelect).length, 1);
    assert.equal(search.prop('className'), 'search');
  });

  it('accepts the placeholder property', () => {
    const search = shallow(<Search placeholder="some-placeholder" pokemon={pokemonData}/>);
    assert.equal(search.prop('placeholder'), 'some-placeholder');
  });

  it('sets the group and options propeties on the SimpleSelect component', () => {
    const groupStub = 'testGroup';
    const pokemonStub = [{
      groupId: 'candy',
      label: 'pokemon',
      value: 'candy'
    }];
    const form = shallow(<Search groups={groupStub} pokemon={pokemonStub} />);

    assert.deepEqual(form.find(SimpleSelect).prop('groups'), groupStub);
    assert.deepEqual(form.find(SimpleSelect).prop('options'), pokemonStub);
  });

  it('sets the onValueChange property to the onChange callback', () => {
    const onChangeStub = sinon.stub();
    const form = shallow(<Search groups='test' pokemon={[['pokkemon', 'candy']]} onChange={onChangeStub} />);
    assert.equal(form.find(SimpleSelect).prop('onValueChange'), onChangeStub);
  });

  it('sets the default value property on the SimpleSelect component', () => {
    const groupStub = 'testGroup';
    const pokemonStub = [{
      groupId: 'candy',
      label: 'pokemon',
      value: 'candy'
    }];

    const form = shallow(<Search groups={groupStub} pokemon={pokemonStub} />);

    assert.deepEqual(form.find(SimpleSelect).prop('defaultValue'), {label: 'pokemon', value: 'candy'});
  });

});
