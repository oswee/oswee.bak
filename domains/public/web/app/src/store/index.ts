import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createWebSocketMiddleware from './middleware/websocket';
import createSagaMiddleware from 'redux-saga';
import logMiddleware from './middleware/log';
import rootReducer from './reducer';
import root from './saga';

// https://github.com/zalmoxisus/redux-devtools-extension/blob/master/docs/API/Arguments.md
// https://github.com/zalmoxisus/remote-redux-devtools/issues/129

// Some interesting store wrapping construction - https://youtu.be/Om4Lb8c5Lbg?list=PLMV09mSPNaQlWvqEwF6TfHM-CVM6lXv39&t=790

const configureStore = () => {
	const options = {
		name: `Redux`,
		realtime: true,
		trace: true,
		traceLimit: 25,
	};

	const composeEnhancers = composeWithDevTools(options);
	const sagaMiddleware = createSagaMiddleware();
	const websocketMiddleware = createWebSocketMiddleware();

	const middlewares = [logMiddleware, websocketMiddleware, sagaMiddleware];

	const store = createStore(
		rootReducer,
		composeEnhancers(
			applyMiddleware(...middlewares),
			/* other store enhancers if any */
		),
	);

	sagaMiddleware.run(root);

	return store;
};

const store = configureStore();

export default store;

export { RootState } from './reducer';
export * from './modules/signup';
export * from './modules/session';
export * from './modules/websocket';
export * from './modules/main-launcher';
export * from './modules/system';
export * from './modules/waybills';
