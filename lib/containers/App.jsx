import React from 'react';

import Header from '../components/Header';
import Ad from '../components/Ad';
import Calculator from '../containers/Calculator';

export function App() {
  return (
    <div>
      <Header />
      <Ad client="ca-pub-9464301444690248" slot="1890101450" />
      <Calculator />
      <Ad client="ca-pub-9464301444690248" slot="3223573855" />
    </div>
  );
}
