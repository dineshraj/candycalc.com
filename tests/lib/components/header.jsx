import assert from 'assert';
import { shallow } from 'enzyme';

import React from 'react';
import Header from '../../../src/components/Header';

describe('<Header />', () => {

  it('renders the header correctly', () => {
    const header = shallow(<Header />);

    assert.equal(header.prop('className'), 'header');
    assert.equal(header.find('h1').length, 1);
  });
});
