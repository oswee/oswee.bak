import { createSelector } from 'reselect';
import { RootState } from '../../reducer';

const waybillsSelector = (state: RootState) => state.waybills.data;

export const getWaybills = createSelector(
	[waybillsSelector],
	apps => apps,
);
