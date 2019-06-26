import { eventChannel } from 'redux-saga';
import { takeEvery, put, call, take } from 'redux-saga/effects';
import { SystemTypes } from './types';
import { websocketMessageReceived } from './actions';

function* createEventChannel(socket) {
  console.log("createEventChannel");
  return eventChannel(emit => {
    socket.onmessage((message) => emit(message.data));
    return () => {
      socket.close();
    };
  });
}

function* initializeWebSocketsChannel() {
  console.log("initializeWebSocketsChannel")
  const socket = new WebSocket("ws://localhost:7070/v1/ws/public", "protocol");
  const channel = yield call(createEventChannel, socket);
  while (true) {
    const {message} = yield take(channel);
    yield put(websocketMessageReceived(message));
  }
}

function* mySaga() {
  yield takeEvery(SystemTypes.INITIALIZE_WEB_SOCKETS_CHANNEL, initializeWebSocketsChannel);
}

export { mySaga };