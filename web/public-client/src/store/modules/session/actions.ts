import { SessionTypes, SessionActionTypes } from './types';

export const submitSignin = (payload): SessionActionTypes => ({
	type: SessionTypes.SESSION_SIGNIN,
	payload,
});

export const setSignin = (payload): SessionActionTypes => ({
	type: SessionTypes.SESSION_SIGNIN_SUCCESS,
	payload,
});

export const setSigninError = (error): SessionActionTypes => ({
	type: SessionTypes.SESSION_SIGNIN_FAIL,
	error,
});

export const submitSignout = (): SessionActionTypes => ({
	type: SessionTypes.SESSION_SIGNOUT,
});

export const setSignout = (payload): SessionActionTypes => ({
	type: SessionTypes.SESSION_SIGNOUT_SUCCESS,
	payload,
});

export const setSignoutError = (error): SessionActionTypes => ({
	type: SessionTypes.SESSION_SIGNOUT_FAIL,
	error,
});
