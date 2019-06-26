import { SystemTypes, SystemActionTypes } from './types';

export const fetchApps = (): SystemActionTypes => ({
		type: SystemTypes.INITIALIZE_WEB_SOCKETS_CHANNEL,
});

export const initializeWeSocketsChannel = (): SystemActionTypes => ({
		type: SystemTypes.INITIALIZE_WEB_SOCKETS_CHANNEL,
});

export const websocketMessageReceived = (payload): SystemActionTypes => ({
		type: SystemTypes.WEBSOCKET_MESSAGE_RECEIVED,
		payload,
});