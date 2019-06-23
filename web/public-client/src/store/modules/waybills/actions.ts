import { WAYBILLS, WaybillsActionTypes } from './types';

export const loadWaybills = (): WaybillsActionTypes => ({
	type: WAYBILLS.LOAD,
});

export const setWaybills = (payload): WaybillsActionTypes => ({
	type: WAYBILLS.LOAD_SUCCESS,
	payload,
});

export const setError = (error): WaybillsActionTypes => ({
	type: WAYBILLS.LOAD_FAIL,
	error,
});

export const selectWaybill = (): WaybillsActionTypes => ({
	type: WAYBILLS.SELECT,
});
