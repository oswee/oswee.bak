import { takeEvery, call, put } from 'redux-saga/effects';
import { setSignup, setSignupError } from './actions';
import { SIGNUP } from './types';
import { fetchSignup } from './api';

function* handleSignupSubmit() {
	try {
		const signup = yield call(fetchSignup);
		yield put(setSignup(signup));
	} catch (error) {
		yield put(setSignupError(error.toString()));
	}
}

// watcher saga
function* watchSignupSubmit() {
	yield takeEvery(SIGNUP.SUBMIT, handleSignupSubmit);
}

// TODO: Fix Saga composition and exports

export { watchSignupSubmit };
