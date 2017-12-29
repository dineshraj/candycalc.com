import { createStore } from 'redux';
import rootReducer from './reducers';

import data from '../../static/data.json';

function configureStore() {
  return createStore(rootReducer, data);
}

export default configureStore;
