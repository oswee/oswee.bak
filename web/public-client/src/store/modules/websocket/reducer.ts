import { SocketTypes, SocketActionTypes, SocketState } from './types';

const initialState: SocketState = {
    loaded: false,
    message: 'Just created',
    connected: false,
    history: [],
    message_history: [],
};

export default <Reducer>(state: SocketState = initialState, action: SocketActionTypes) => {
    switch (action.type) {
      case SocketTypes.SOCKETS_CONNECTING:
        return Object.assign({}, state, {
          loaded: true,
          message: 'Connecting...',
          connected: true,
          history: [
            ...state.history,
            {
              loaded: true,
              message: 'Connecting...',
              connected: true
            }
          ]
        });
      case SocketTypes.SOCKETS_DISCONNECTING:
        return Object.assign({}, state, {
          loaded: true,
          message: 'Disconnecting...',
          connected: false,
          history: [
            ...state.history,
            {
              loaded: true,
              message: 'Disconnecting...',
              connected: false
            }
          ]
        });
      case SocketTypes.SOCKETS_MESSAGE_SENDING:
        return Object.assign({}, state, {
          loaded: true,
          message: 'Send message',
          connected: true,
          message_history: [
            ...state.message_history,
            {
              direction: '->',
              message: action.message_send
            }
          ]
        });
      case SocketTypes.SOCKETS_MESSAGE_RECEIVING:
        return Object.assign({}, state, {
          loaded: true,
          message: 'Message receive',
          connected: true,
          message_history: [
            ...state.message_history,
            {
              direction: '<-',
              message: action.message_receive
            }
          ]
        });
      default:
        return state;
    }
  }