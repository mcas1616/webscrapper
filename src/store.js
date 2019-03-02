import { createStore, applyMiddleware } from 'redux';
import reducers from "./reducers";
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

function logger({ getState }) {
    return next => action => {
        console.log('will dispatch', action)
        const returnValue = next(action)
        console.log('state after dispatch', getState())
        return returnValue
    }
}

const store = createStore(reducers, applyMiddleware(sagaMiddleware, logger));

sagaMiddleware.run(rootSaga);

export default store;