export enum SIGNUP {
	SUBMIT = 'SIGNUP_SUBMIT',
	SUBMIT_SUCCESS = 'SIGNUP_SUBMIT_SUCCESS',
	SUBMIT_FAIL = 'SIGNUP_SUBMIT_FAIL',
}

export interface SignupCmd {
	display_name: string;
	email: string;
	password: string;
}

export interface SignupRes {
	api: string;
	uuid: string;
}

export interface SignupState {
	data: SignupRes;
	isLoading: boolean;
}

interface SubmitSignupAction {
	readonly type: SIGNUP.SUBMIT;
	readonly payload: SignupCmd;
}

interface SubmitSuccessSignupAction {
	readonly type: SIGNUP.SUBMIT_SUCCESS;
	readonly payload: SignupRes;
}

interface SubmitFailSignupAction {
	readonly type: SIGNUP.SUBMIT_FAIL;
	readonly error: string;
}

export type SignupActionTypes =
	| SubmitSignupAction
	| SubmitSuccessSignupAction
	| SubmitFailSignupAction;
