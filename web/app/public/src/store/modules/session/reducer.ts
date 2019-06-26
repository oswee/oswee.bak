// import { Reducer } from 'redux';
import { SessionTypes, SessionActionTypes, SessionState } from './types';

const initialState: SessionState = {
	session: {
		live: false,
		email: '',
	},
	isLoading: false,
};

export default <Reducer>(state: SessionState = initialState, action: SessionActionTypes) => {
	switch (action.type) {
		case SessionTypes.SESSION_SIGNIN:
			console.log(action.payload)
			return {
				...state,
				isLoading: true,
			};
		case SessionTypes.SESSION_SIGNIN_SUCCESS:
			return {
				...state,
				session: action.payload,
				isLoading: false,
			};
		case SessionTypes.SESSION_SIGNIN_FAIL:
			return state;
		case SessionTypes.SESSION_SIGNOUT:
			return {
				...state,
				isLoading: true,
			};
		case SessionTypes.SESSION_SIGNOUT_SUCCESS:
			return {
				...state,
				session: action.payload,
				isLoading: false,
			};
		case SessionTypes.SESSION_SIGNOUT_FAIL:
			return state;
		default:
			return state;
	}
};
