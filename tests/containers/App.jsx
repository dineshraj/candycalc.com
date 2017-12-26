import assert from 'assert'
import { shallow } from 'enzyme';

import React from 'react';
import App from '../../containers/App';
import Header from '../../components/Header';
import Ad from '../../components/Ad';
import Calculator from '../../components/Calculator';

describe('<App />', () => {

  it('renders the Header', () => {
    const app = shallow(<App />);
    assert.equal(app.find(Header).length, 1);
  });

  it('renders the Ads', () => {
    const app = shallow(<App />);
    assert.equal(app.find(Ad).length, 2);
  })

  it('renders the Calculator', () => {
    const app = shallow(<App />);
    assert.equal(app.find(Calculator).length, 1);
  });

});
