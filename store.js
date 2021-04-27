import { createStore, applyMiddleware, compose } from "redux"
import rootReducer from './redux/reducers/rootReducer';
import createSagaMiddleware from 'redux-saga'
import rootSaga from './redux/sagas/rootSaga'
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);   

export default store;
