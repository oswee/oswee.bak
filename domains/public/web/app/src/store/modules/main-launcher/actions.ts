export enum LAUNCHER {
	TOGGLE = 'LAUNCHER_TOGGLE',
	SHOW = 'LAUNCHER_SHOW',
	HIDE = 'LAUNCHER_HIDE',
	SHOWN = 'LAUNCHER_SHOWN',
	HIDDEN = 'LAUNCHER_HIDDEN',
}

interface ToggleLauncherAction {
	readonly type: LAUNCHER.TOGGLE;
}

interface ShowLauncherAction {
	readonly type: LAUNCHER.SHOW;
}

interface HideLauncherAction {
	readonly type: LAUNCHER.HIDE;
}

interface LauncherShownAction {
	readonly type: LAUNCHER.SHOWN;
}

interface LauncherHiddenAction {
	readonly type: LAUNCHER.HIDDEN;
}

export type LauncherActions =
	| LauncherShownAction
	| LauncherHiddenAction
	| HideLauncherAction
	| ShowLauncherAction
	| ToggleLauncherAction;

export const toggleLauncher = (): ToggleLauncherAction => ({
	type: LAUNCHER.TOGGLE,
});

export const showLauncher = (): ShowLauncherAction => ({
	type: LAUNCHER.SHOW,
});

export const hideLauncher = (): HideLauncherAction => ({
	type: LAUNCHER.HIDE,
});

export const launcherShown = (): LauncherShownAction => ({
	type: LAUNCHER.SHOWN,
});

export const launcherHidden = (): LauncherHiddenAction => ({
	type: LAUNCHER.HIDDEN,
});
