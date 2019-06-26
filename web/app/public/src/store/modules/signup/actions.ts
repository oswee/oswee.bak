import { SIGNUP, SignupActionTypes } from './types';

export const submitSignup = (payload): SignupActionTypes => ({
	type: SIGNUP.SUBMIT,
	payload,
});

export const setSignup = (payload): SignupActionTypes => ({
	type: SIGNUP.SUBMIT_SUCCESS,
	payload,
});

export const setSignupError = (error): SignupActionTypes => ({
	type: SIGNUP.SUBMIT_FAIL,
	error,
});
