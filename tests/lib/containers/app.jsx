import assert from 'assert';
import { shallow } from 'enzyme';

import React from 'react';
import App from '../../../lib/containers/App';
import Header from '../../../lib/components/Header';
import Ad from '../../../lib/components/Ad';
import Calculator from '../../../lib/components/Calculator';

describe('<App />', () => {

  it('renders the Header', () => {
    const app = shallow(<App />);
    assert.equal(app.find(Header).length, 1);
  });

  it('renders the Ads', () => {
    const app = shallow(<App />);
    assert.equal(app.find(Ad).length, 2);
  });

  it('renders the Calculator', () => {
    const app = shallow(<App />);
    assert.equal(app.find(Calculator).length, 1);
  });

});
