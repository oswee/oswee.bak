// https://habr.com/ru/post/318148/

import store, { socketsConnecting, socketsDisconnecting, socketsDisconnect, socketsMessageReceiving, socketsMessageSending } from '../../store';
import { SocketTypes } from '../modules/websocket/types';

export default function createWebSocketMiddleware() {
    let socketExample = null;

    const onOpen = (token) => evt => {
        console.log('WS is onOpen');
        console.log('token ' + token);
        console.log('evt ' + evt.data);
    };
    const onClose = (store) => evt => {
        console.log('WS is onClose');
        console.log('evt ' + evt.data);
        store.dispatch(socketsDisconnect());
    };
    const onMessage = (ws, store) => evt => {
        // Parse the JSON message received on the websocket
        const msg = evt.data;
        store.dispatch(socketsMessageReceiving(msg));
    };
  
    return store => next => action => {
      switch (action.type) {
        case SocketTypes.SOCKETS_CONNECT:
            if (socketExample !== null) {
                console.log('SOCKETS_DISCONNECTING');
                store.dispatch(socketsDisconnecting());
                socketExample.close();
            }
            console.log('SOCKETS_CONNECTING');
            socketExample = new WebSocket('ws://localhost:7072/v1/ws/private');
            store.dispatch(socketsConnecting());
            socketExample.onmessage = onMessage(socketExample, store);
            socketExample.onclose = onClose(store);
            socketExample.onopen = onOpen(action.token);
            break;
        case SocketTypes.SOCKETS_DISCONNECT:
            if (socketExample !== null) {
                console.log('SOCKETS_DISCONNECTING');
                store.dispatch(socketsDisconnecting());
                socketExample.close();
            }

            socketExample = null;
            break;
        case SocketTypes.SOCKETS_MESSAGE_SEND:
            console.log('There')
                socketExample.send(action.message_send);
                store.dispatch(socketsMessageSending(JSON.stringify(action.message_send)));
                break;
        default:
          return next(action);
      }
    };
}