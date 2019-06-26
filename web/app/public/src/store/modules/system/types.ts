export enum SystemTypes {
	FETCH_APPS = 'FETCH_APPS',
	INITIALIZE_WEB_SOCKETS_CHANNEL = 'INITIALIZE_WEB_SOCKETS_CHANNEL',
	WEBSOCKET_MESSAGE_RECEIVED = 'WEBSOCKET_MESSAGE_RECEIVED',
}

export interface Application {
	uuid: string;
	title: string;
	type: string;
	componentTag: string;
	default: boolean;
	path: string;
}

export interface Module {
	title: string;
	application: string;
}

export interface SystemState {
	applications: { [key: string]: Application };
	publicApplications: string[];
	modules: { [key: string]: Module };
	wsConnected: boolean;
}

export interface WsMessage {
	message: string;
}

interface FetchAppsAction {
	readonly type: SystemTypes.FETCH_APPS;
}

interface InitializeWeSocketsChannelAction {
	readonly type: SystemTypes.INITIALIZE_WEB_SOCKETS_CHANNEL;
}

interface WebsocketMessageReceivedAction {
	readonly type: SystemTypes.WEBSOCKET_MESSAGE_RECEIVED;
	readonly payload: WsMessage;
}

export type SystemActionTypes =
	| FetchAppsAction
	| InitializeWeSocketsChannelAction
	| WebsocketMessageReceivedAction;
