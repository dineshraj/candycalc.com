import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';
import * as AppMain from './src/containers/App.jsx';

import './src/styles/index.scss';

const store = configureStore();

ReactDOM.hydrate(
  <Provider store={store}>
    <AppMain.App />
  </Provider>,
  document.getElementById('candy-calc')
);
