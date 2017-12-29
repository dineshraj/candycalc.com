import assert from 'assert';
import React from 'react';
import { shallow } from 'enzyme';

import * as AppMain from '../../../lib/containers/App';
import Header from '../../../lib/components/Header';
import Ad from '../../../lib/components/Ad';
import Calculator from '../../../lib/containers/Calculator';

const fakeState = {
  pokemonName: 'Pidgey',
  candyCost: 12,
  pokemonAmount: null,
  candyAmount: null,
  luckyEgg: false,
  transfer: false,
  error: false,
  pokemon: [ ['pidgey', '12'] ],
  groups: 'test'
};

describe('<App />', () => {

  it('returns the state from mapStateToProps', () => {
    const returnedProps = AppMain.mapStateToProps(fakeState);
    assert.deepEqual(returnedProps, fakeState);
  });

  it('exports a connected component', () => {
    assert.equal(typeof AppMain.default.WrappedComponent, 'function');
  });

  it('returns the state from mapStateToProps', () => {
    const fakeState = {
      state: 'state'
    };
    const returnedProps = AppMain.mapStateToProps(fakeState);
    assert.equal(returnedProps, fakeState);
  });

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
