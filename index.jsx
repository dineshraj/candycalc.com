import React from 'react';
import ReactDOM from 'react-dom';

import App from './containers/App.jsx';
import data from './static/data.json';

import './styles/index.scss';

ReactDOM.render(<App data={data} />, document.getElementById('candy-calc'));
