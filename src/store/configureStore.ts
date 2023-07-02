import {
  createStore,
  compose,
  applyMiddleware,
  combineReducers,
} from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: typeof compose;
    __REDUX_DEVTOOLS_EXTENSION__: typeof compose;
  }
}

export default (initialState: { [key: string]: never } = {}) => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    || window.__REDUX_DEVTOOLS_EXTENSION__
    || compose;

  const store = createStore(
    combineReducers(reducer),
    initialState,
    composeEnhancers(
      applyMiddleware(
        sagaMiddleware,
      ),
    ),
  );

  sagaMiddleware.run(rootSaga);

  return { store };
};
