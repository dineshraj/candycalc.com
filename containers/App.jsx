import React from 'react';

import Header from '../components/Header';

class App extends React.Component {
  render() {
    /*
    App
      |
      -- Header
      -- Google Ad
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
      -- Google Ad
      -- Footer
    */
    return (
      <Header />
    );
  }
};

module.exports = App;
