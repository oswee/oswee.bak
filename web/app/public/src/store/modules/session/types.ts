export enum SessionTypes {
	SESSION_SIGNIN = 'SESSION_SIGNIN',
	SESSION_SIGNIN_SUCCESS = 'SESSION_SIGNIN_SUCCESS',
	SESSION_SIGNIN_FAIL = 'SESSION_SIGNIN_FAIL',
	SESSION_SIGNOUT = 'SESSION_SIGNOUT',
	SESSION_SIGNOUT_SUCCESS = 'SESSION_SIGNOUT_SUCCESS',
	SESSION_SIGNOUT_FAIL = 'SESSION_SIGNOUT_FAIL',
}

export interface SigninCmd {
	email: string;
	password: string;
}

export interface Session {
	live: boolean;
	email: string;
}

export interface SessionState {
	session: Session;
	isLoading: boolean;
}

interface SubmitSigninAction {
	readonly type: SessionTypes.SESSION_SIGNIN;
	readonly payload: SigninCmd;
}

interface SubmitSuccessSigninAction {
	readonly type: SessionTypes.SESSION_SIGNIN_SUCCESS;
	readonly payload: Session;
}

interface SubmitFailSigninAction {
	readonly type: SessionTypes.SESSION_SIGNIN_FAIL;
	readonly error: string;
}

interface SignoutAction {
	readonly type: SessionTypes.SESSION_SIGNOUT;
}

interface SignoutSuccessAction {
	readonly type: SessionTypes.SESSION_SIGNOUT_SUCCESS;
	readonly payload: Session;
}

interface SignoutFailAction {
	readonly type: SessionTypes.SESSION_SIGNOUT_FAIL;
	readonly error: string;
}

export type SessionActionTypes =
	| SubmitSigninAction
	| SubmitSuccessSigninAction
	| SubmitFailSigninAction
	| SignoutAction
	| SignoutSuccessAction
	| SignoutFailAction;