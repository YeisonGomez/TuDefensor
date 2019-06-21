import { logger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootSaga from './sagas';
import rootReducers from './reducers';
import { env_production } from '../common/enviroment';

const sagaMiddleware = createSagaMiddleware();

let middleware = [sagaMiddleware]
if (!env_production) {
  middleware = [...middleware, logger]
}

export const store = createStore(
  rootReducers, composeWithDevTools(
    applyMiddleware(...middleware)
  )
);

sagaMiddleware.run(rootSaga);
