import { createStore } from 'redux';
import rootReducer from './reducers';

function configureStore(preloadedState = {}) {
  return createStore(rootReducer, preloadedState);
}

export default configureStore;
