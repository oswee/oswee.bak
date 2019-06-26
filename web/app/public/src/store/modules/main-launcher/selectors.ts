import { createSelector } from 'reselect';
import { RootState } from '../../reducer';

const getLauncher = (state: RootState) => state.launcher;

export const getLauncherVisibility = createSelector(
	[getLauncher],
	launcher => launcher.isVisible,
);
