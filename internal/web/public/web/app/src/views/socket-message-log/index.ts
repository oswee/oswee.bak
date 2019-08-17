import { LitElement, customElement, property, query } from 'lit-element';
import { connect } from 'pwa-helpers';
import store, { RootState, socketsMessageSend, socketsMessageReceiving } from '../../store';
import GlobalStyle from '../../assets/global-style';
import template from './template';

@customElement('socket-message-log')
export class SocketMessageLog extends connect(store)(LitElement) {
	public static styles = [GlobalStyle];

	@property({ type: Boolean })
    public loaded = false;

    @property({ type: Boolean })
	public connected = false;

    @property({ type: String })
    public message = '';

    @property({ type: Array })
	public message_history = [];

	stateChanged(state: RootState) {
		this.loaded = state.socket.loaded;
		this.connected = state.socket.connected;
		this.message = state.socket.message;
		this.message_history = state.socket.message_history;
	}


	protected render() {
		return template.call(this);
	}

	@query('#message_text')
	private messageInput: HTMLInputElement;

	public handleSendButton(event) {
		event.preventDefault();
		const payload = {message: this.messageInput.value}
		store.dispatch(socketsMessageSend(payload))
		this.messageInput.value = '';
	}

}

declare global {
	interface HTMLElementTagNameMap {
	  'socket-message-log': SocketMessageLog;
	}
}