import React from 'react';

import Header from '../components/Header';
import Ad from '../components/Ad';
import Calculator from '../containers/Calculator';

const AD_CLIENT = 'ca-pub-9464301444690248';

export function App() {
  return (
    <div>
      <Header />
      <Ad client={AD_CLIENT} slot="1890101450" />
      <Calculator />
      <Ad client={AD_CLIENT} slot="3223573855" />
    </div>
  );
}
