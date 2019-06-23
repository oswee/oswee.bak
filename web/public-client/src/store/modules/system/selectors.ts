import { createSelector } from 'reselect';
import { RootState } from '../../reducer';

const appsSelector = (state: RootState) => state.system.applications;
const publicAppsSelector = (state: RootState) => state.system.publicApplications;

export const getPublicApps = createSelector(
	[appsSelector, publicAppsSelector],
	(apps, publicApps) => publicApps.map(key => apps[key]),
);
