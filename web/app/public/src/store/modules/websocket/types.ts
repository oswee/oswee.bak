export enum SocketTypes {
	SOCKETS_CONNECTING = 'SOCKETS_CONNECTING',
	SOCKETS_CONNECT = 'SOCKETS_CONNECT',
	SOCKETS_DISCONNECTING = 'SOCKETS_DISCONNECTING',
	SOCKETS_DISCONNECT = 'SOCKETS_DISCONNECT',
    SOCKETS_MESSAGE_SENDING = 'SOCKETS_MESSAGE_SENDING',
    SOCKETS_MESSAGE_SEND = 'SOCKETS_MESSAGE_SEND',
    SOCKETS_MESSAGE_RECEIVING = 'SOCKETS_MESSAGE_RECEIVING',
    SOCKETS_MESSAGE_RECEIVE = 'SOCKETS_MESSAGE_RECEIVE',
}

export interface connHistory {
	loaded: boolean;
	message: string;
	connected: boolean;
}

export interface msgHistory {
	direction: string;
	message: string;
}

export interface SocketState {
	loaded: boolean;
	message: string;
	connected: boolean;
	history: Array<connHistory>;
	message_history: Array<msgHistory>;
}

interface socketsConnecting {
	readonly type: SocketTypes.SOCKETS_CONNECTING;
}
interface socketsConnect {
	readonly type: SocketTypes.SOCKETS_CONNECT;
}
interface socketsDisconnecting {
	readonly type: SocketTypes.SOCKETS_DISCONNECTING;
}
interface socketsDisconnect{
	readonly type: SocketTypes.SOCKETS_DISCONNECT;
}
interface socketsMessageSending {
	readonly type: SocketTypes.SOCKETS_MESSAGE_SENDING;
	readonly message_send: msgHistory;
}

interface socketsMessageSend {
	readonly type: SocketTypes.SOCKETS_MESSAGE_SEND;
	readonly message_send: msgHistory;
}
interface socketsMessageReceiving {
	readonly type: SocketTypes.SOCKETS_MESSAGE_RECEIVING;
	readonly message_receive: msgHistory;
}

interface socketsMessageReceive {
	readonly type: SocketTypes.SOCKETS_MESSAGE_RECEIVE;
	readonly message_receive: msgHistory;
}

export type SocketActionTypes =
	| socketsConnecting
	| socketsConnect
	| socketsDisconnecting
	| socketsDisconnect
    | socketsMessageSending
    | socketsMessageSend
    | socketsMessageReceiving
    | socketsMessageReceive;