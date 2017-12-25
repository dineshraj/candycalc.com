import assert from 'assert'
import { shallow } from 'enzyme';

import React from 'react';
import App from '../../containers/App';
import Header from '../../components/Header';

describe('<App />', () => {

  it.only('renders the header', () => {
    const app = shallow(<App/>);

    assert.equal(app.find(Header).length, 1);
  });

});
