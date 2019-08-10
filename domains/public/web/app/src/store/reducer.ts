import { combineReducers } from 'redux';
import signup from './modules/signup/reducer';
import { SignupState } from './modules/signup/types';
import session from './modules/session/reducer';
import { SessionState } from './modules/session/types';
import launcher, { LauncherState } from './modules/main-launcher/reducer';
import socket from './modules/websocket/reducer';
import { SocketState } from './modules/websocket/types';
import system from './modules/system/reducer';
import { SystemState } from './modules/system/types';
import waybills from './modules/waybills/reducer';
import { WaybillsState } from './modules/waybills/types';

export interface RootState {
	readonly signup: SignupState;
	readonly session: SessionState;
	readonly socket: SocketState;
	readonly launcher: LauncherState;
	readonly system: SystemState;
	readonly waybills: WaybillsState;
}

export default combineReducers<RootState>({
	signup,
	session,
	socket,
	launcher,
	system,
	waybills,
});
