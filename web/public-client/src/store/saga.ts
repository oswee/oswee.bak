import { fork } from 'redux-saga/effects';
import { mySaga } from './modules/system';
import { watchSignupSubmit } from './modules/signup';
import { watchSigninSubmit } from './modules/session';
import { watchSignoutSubmit } from './modules/session';
import { watchOrdersLoad } from './modules/waybills';

// TODO: Fix Saga composition and imports
export default function* root() {
	yield fork(mySaga);
	yield fork(watchSignupSubmit);
	yield fork(watchSigninSubmit);
	yield fork(watchSignoutSubmit);
	yield fork(watchOrdersLoad);
}
