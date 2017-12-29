import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './lib/store/configureStore';
import * as AppMain from './lib/containers/App.jsx';

import './styles/index.scss';

const store = configureStore();

ReactDOM.hydrate(
  <Provider store={store}>
    <AppMain.App />
  </Provider>,
  document.getElementById('candy-calc')
);


store.subscribe(() => {
  const newStore = store.getState();
  console.log(
    newStore.pokemonName,
    newStore.candyCost,
    newStore.pokemonAmount,
    newStore.candyAmount,
    newStore.luckyEgg,
    newStore.transfer
  );
});
