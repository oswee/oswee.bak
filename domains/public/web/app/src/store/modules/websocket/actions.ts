import { SocketTypes, SocketActionTypes } from './types';

export const socketsConnecting = (): SocketActionTypes => ({
	type: SocketTypes.SOCKETS_CONNECTING,
});

export const socketsConnect = (): SocketActionTypes => ({
	type: SocketTypes.SOCKETS_CONNECT,
});

export const socketsDisconnecting = (): SocketActionTypes => ({
	type: SocketTypes.SOCKETS_DISCONNECTING,
});

export const socketsDisconnect = (): SocketActionTypes => ({
	type: SocketTypes.SOCKETS_DISCONNECT,
});

export const socketsMessageSending = (sendMessage): SocketActionTypes => ({
	type: SocketTypes.SOCKETS_MESSAGE_SENDING,
	message_send: sendMessage,
});

export const socketsMessageSend = (sendMessage): SocketActionTypes => ({
	type: SocketTypes.SOCKETS_MESSAGE_SEND,
	message_send: sendMessage,
});

export const socketsMessageReceiving = (sendMessage): SocketActionTypes => ({
	type: SocketTypes.SOCKETS_MESSAGE_RECEIVING,
	message_receive: sendMessage,
});

export const socketsMessageReceive = (sendMessage): SocketActionTypes => ({
	type: SocketTypes.SOCKETS_MESSAGE_RECEIVE,
	message_receive: sendMessage,
});