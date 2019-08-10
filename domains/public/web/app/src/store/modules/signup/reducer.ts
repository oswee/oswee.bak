// import { Reducer } from 'redux';
import { SIGNUP, SignupActionTypes, SignupState } from './types';

const initialState: SignupState = {
	data: {
		api: '',
		uuid: '',
	},
	isLoading: false,
};

export default <Reducer>(state: SignupState = initialState, action: SignupActionTypes) => {
	switch (action.type) {
		case SIGNUP.SUBMIT:
			return {
				...state,
				isLoading: true,
			};
		case SIGNUP.SUBMIT_SUCCESS:
			return {
				...state,
				data: action.payload,
				isLoading: false,
			};
		case SIGNUP.SUBMIT_FAIL:
			return state;
		default:
			return state;
	}
};
