import { takeEvery, select, call, put } from 'redux-saga/effects';
import { setWaybills, setError } from './actions';
import { WAYBILLS } from './types';
import { fetchOrders } from './api';

const getPage = state => state.waybills.page;

function* handleWaybillsLoad() {
	try {
		const page = yield select(getPage);
		const orders = yield call(fetchOrders, page);
		yield put(setWaybills(orders));
	} catch (error) {
		yield put(setError(error.toString()));
	}
}

// watcher saga
function* watchOrdersLoad() {
	yield takeEvery(WAYBILLS.LOAD, handleWaybillsLoad);
}

// TODO: Fix Saga composition and exports

export { watchOrdersLoad };
