/* eslint-disable no-negated-condition */
/* eslint-disable global-require */
import { applyMiddleware, createStore, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import createRootReducer from './store/state';

const composeEnhancers = typeof window !== 'undefined'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose;

const configureStore = () => (initState = {}, history = {}) => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        createRootReducer(history),
        initState,
        composeEnhancers(applyMiddleware(
            sagaMiddleware,
            routerMiddleware(history)
        ))
    );
    return store;
};

export default configureStore;
