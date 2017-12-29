import { createStore } from 'redux';
import rootReducer from './reducers';

import data from '../../static/data.json';

const initialState =
  Object.assign(
    {},
    {
      pokemonName: 'Pidgey',
      candyCost: 12,
      pokemonAmount: null,
      candyAmount: null,
      luckyEgg: false,
      transfer: false,
      error: false
    },
    data
  );

function configureStore() {
  if (typeof window !== 'undefined') {
    return createStore(
      rootReducer,
      initialState,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
  }
  return createStore(
    rootReducer,
    data
  );
}

export default configureStore;
