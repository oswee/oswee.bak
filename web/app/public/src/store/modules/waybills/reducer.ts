// import { Reducer } from 'redux';
import { WAYBILLS, WaybillsActionTypes, WaybillsState } from './types';

const initialState: WaybillsState = {
	data: {},
	page: 1,
	selectedWaybills: [],
	lastSelectedWaybill: '',
};

export default <Reducer>(state: WaybillsState = initialState, action: WaybillsActionTypes) => {
	switch (action.type) {
		case WAYBILLS.LOAD:
			return state;
		case WAYBILLS.LOAD_SUCCESS:
			return {
				...state,
				data: action.payload,
				page: state.page + 1,
			};
		case WAYBILLS.LOAD_FAIL:
			return state;
		case WAYBILLS.SELECT:
			return state;
		default:
			return state;
	}
};
