import assert from 'assert';
import { shallow } from 'enzyme';

import React from 'react';
import Search from '../../components/Search';
import { SimpleSelect } from "react-selectize";

const data = {
  "groups": [
    {
      "groupId": "12",
      "title": "12 Candies"
    }, {
      "groupId": "25",
      "title": "25 Candies"
    }
  ],
  "pokemon": [
    ["Caterpie", "12"],
    ["Rattata", "25"]
  ]
};

describe('<Search />', () => {

  it('renders the search component correctly', () => {
    const search = shallow(<Search pokemon={[]}/>);

    assert.equal(search.find(SimpleSelect).length, 1);
    assert.equal(search.prop('className'), 'search');
  });

  it('accepts the placeholder property', () => {
    const search = shallow(<Search placeholder="some-placeholder" pokemon={[]}/>);
    assert.equal(search.prop('placeholder'), 'some-placeholder');
  });

  it('sets the group and options propeties on the SimpleSelect component', () => {
    const groupStub = 'testGroup';
    const pokemonStub = [['pokemon', 'candy']];
    const expectedOptionStub = [{
      groupId: 'candy',
      label: 'pokemon',
      value: 'candy'
    }];
    const form = shallow(<Search groups={groupStub} pokemon={pokemonStub} />);

    assert.deepEqual(form.find(SimpleSelect).prop('groups'), groupStub);
    assert.deepEqual(form.find(SimpleSelect).prop('options'), expectedOptionStub);
  });

});
