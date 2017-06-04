import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';

import recipes from '../reducers';
import sagas from '../sagas';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const configuredStore = createStore(
	recipes,
	composeEnhancers(
		applyMiddleware(...[
			thunk,
			sagaMiddleware,
			createLogger({
				collapsed: true
			})
		])
	)
);
sagaMiddleware.run(sagas);

export default configuredStore;