import { Reducer } from 'redux';
import { LauncherActions, LAUNCHER } from './actions';

export interface LauncherState {
	isVisible: boolean;
}

const initialState: LauncherState = {
	isVisible: false,
};

export default <Reducer>(state: LauncherState = initialState, action: LauncherActions) => {
	switch (action.type) {
		case LAUNCHER.TOGGLE:
			return { ...state, isVisible: !state.isVisible };
		case LAUNCHER.SHOW:
			return { ...state, isVisible: true };

		case LAUNCHER.SHOWN:
			return { ...state, isVisible: true };

		case LAUNCHER.HIDE:
			return { ...state, isVisible: false };

		case LAUNCHER.HIDDEN:
			return { ...state, isVisible: false };

		default:
			return state;
	}
};
