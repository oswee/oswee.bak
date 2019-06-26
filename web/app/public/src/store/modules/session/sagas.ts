import { takeEvery, call, put } from 'redux-saga/effects';
import { setSignin, setSignout, setSigninError, setSignoutError } from './actions';
import { SessionTypes } from './types';
import { fetchSignin, fetchSignout } from './api';

function* handleSigninSubmit(action) {
	try {
		// console.log("Payload", action)
		const signin = yield call(fetchSignin, action);
		yield put(setSignin(signin));
	} catch (error) {
		yield put(setSigninError(error.toString()));
	}
}

function* handleSignoutSubmit(action) {
	try {
		console.log("Signout saga:", action)
		const signout = yield call(fetchSignout, action);
		yield put(setSignout(signout));
	} catch (error) {
		yield put(setSignoutError(error.toString()));
	}
}

// watcher saga
function* watchSigninSubmit() {
	yield takeEvery(SessionTypes.SESSION_SIGNIN, handleSigninSubmit);
}

function* watchSignoutSubmit() {
	yield takeEvery(SessionTypes.SESSION_SIGNOUT, handleSignoutSubmit);
}

// TODO: Fix Saga composition and exports

export { watchSigninSubmit, watchSignoutSubmit };

// Test git username