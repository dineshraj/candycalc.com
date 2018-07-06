import assert from 'assert';
import React from 'react';
import { shallow } from 'enzyme';

import * as AppMain from '../../../src/containers/App';
import Header from '../../../src/components/Header';
import Ad from '../../../src/components/Ad';
import Calculator from '../../../src/containers/Calculator';

describe('<App />', () => {

  it('renders the Header', () => {
    const App = shallow(<AppMain.App />);
    assert.equal(App.find(Header).length, 1);
  });

  it('renders the Ads', () => {
    const App = shallow(<AppMain.App />);
    assert.equal(App.find(Ad).length, 2);
  });

  it('renders the Calculator', () => {
    const App = shallow(<AppMain.App />);
    assert.equal(App.find(Calculator).length, 1);
  });

});
