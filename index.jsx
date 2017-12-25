import React from 'react';
import ReactDOM from 'react-dom';

import App from './containers/App.jsx';
import pokemon from './lib/pokemon.json';

import './styles/index.scss';

ReactDOM.render(<App pokemon={pokemon} />, document.getElementById('candy-calc'));
