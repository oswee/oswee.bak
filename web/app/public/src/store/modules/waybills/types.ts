export enum WAYBILLS {
	LOAD = 'WAYBILLS_LOAD',
	LOAD_SUCCESS = 'WAYBILLS_LOAD_SUCCESS',
	LOAD_FAIL = 'WAYBILLS_LOAD_FAIL',
	SELECT = 'WAYBILLS_SELECT',
}

export interface Waybill {
	uuid: string;
	reference: string;
	consignee_title: string;
	destination_address: string;
	destination_zip: string;
	destination_lat: number;
	destination_lng: number;
	parts_count: number;
	total_weight: number;
}

export interface WaybillsState {
	data: { [key: string]: Waybill };
	page: number;
	selectedWaybills: string[];
	lastSelectedWaybill: string;
}

interface LoadWaybillsAction {
	readonly type: WAYBILLS.LOAD;
}

interface LoadSuccessWaybillsAction {
	readonly type: WAYBILLS.LOAD_SUCCESS;
	readonly payload: { [key: string]: Waybill };
}

interface LoadFailWaybillsAction {
	readonly type: WAYBILLS.LOAD_FAIL;
	readonly error: string;
}

interface SelectWaybillAction {
	readonly type: WAYBILLS.SELECT;
}

export type WaybillsActionTypes =
	| LoadWaybillsAction
	| LoadSuccessWaybillsAction
	| LoadFailWaybillsAction
	| SelectWaybillAction;
