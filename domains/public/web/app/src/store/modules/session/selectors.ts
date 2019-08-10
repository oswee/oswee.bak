import { createSelector } from 'reselect';
import { RootState } from '../../reducer';

const sessionSelector = (state: RootState) => state.session.session;

export const getSession = createSelector(
	[sessionSelector],
	user => user,
);
