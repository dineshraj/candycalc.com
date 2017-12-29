import React from 'react';
import { connect } from 'react-redux';

import Header from '../components/Header';
import Ad from '../components/Ad';
import Calculator from '../containers/Calculator';

export function App() {
  console.log('but I am rendering App');
  return (
    <div>
      <Header />
      <Ad client="ca-pub-9464301444690248" slot="1890101450" />
      <Calculator />
      <Ad client="ca-pub-9464301444690248" slot="3223573855" />
    </div>
  );
}

export function mapStateToProps(state) {
  console.log('mapStateToProps in App', state);
  return state;
}

export default connect(mapStateToProps)(Calculator);
