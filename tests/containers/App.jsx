import assert from 'assert'
import { shallow } from 'enzyme';

import React from 'react';
import App from '../../containers/App';
import Header from '../../components/Header';
import Ad from '../../components/Ad';
import Form from '../../components/Form';

const data = {
  groups: 'testGroup',
  pokemon: 'testPokemon'
};

describe('<App />', () => {

  it('renders the header', () => {
    const app = shallow(<App data={data} />);
    assert.equal(app.find(Header).length, 1);
  });

  it('renders the ads', () => {
    const app = shallow(<App data={data} />);
    assert.equal(app.find(Ad).length, 2);
  })

  it('renders the calculator', () => {
    const app = shallow(<App data={data} />);
    assert.equal(app.find(Form).length, 1);
  });

  it('passes the data correctly to the Form component', () => {
    const app = shallow(<App data={data} />);
    assert.equal(app.find(Form).prop('groups'), 'testGroup');
    assert.equal(app.find(Form).prop('pokemon'), 'testPokemon');
  });

});
