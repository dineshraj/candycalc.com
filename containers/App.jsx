import React from 'react';

import Header from '../components/Header';
import Ad from '../components/Ad';
import Form from '../components/Form';

const App = (data) => {
  /*
  App
    |
    -- Content
      |
      -- Form
         |
         -- Input (selectize plugin)
         -- Message
         -- Options
         |
         -- Entry Box
         -- Entry Box
         -- Tick Box
         -- Tick Box
         -- Message
         -- Button
    -- Footer
  */
  console.log('aaa', data);

  return (
    <div>
      <Header />
      <Ad client="ca-pub-9464301444690248" slot="1890101450" />
      <Form groups={data.groups} pokemon={data.pokemon} />
      <Ad client="ca-pub-9464301444690248" slot="3223573855" />
    </div>
  );
};

module.exports = App;
