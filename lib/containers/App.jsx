import React from 'react';

import Header from '../components/Header';
import Ad from '../components/Ad';
import Calculator from '../components/Calculator';
import data from '../../static/data.json';

const App = () => {
  /*
  App
    |
    -- Content
      |
      -- Form
         |
         -- Options
         |
         -- Tick Box
         -- Tick Box
         -- Message
         -- Button
    -- Footer
  */
  return (
    <div>
      <Header />
      <Ad client="ca-pub-9464301444690248" slot="1890101450" />
      <Calculator groups={data.groups} pokemon={data.pokemon} />
      <Ad client="ca-pub-9464301444690248" slot="3223573855" />
    </div>
  );
};

module.exports = App;
