import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';

export type AppStateType = ReturnType<typeof rootReducer>;

const sagaMiddleware = createSagaMiddleware();

// config to use Redux Devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export default store;
