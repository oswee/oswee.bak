import { LitElement, customElement, property } from 'lit-element';
import { connect } from 'pwa-helpers';
import store, { socketsConnect, socketsDisconnect } from '../../store';
import GlobalStyle from '../../assets/global-style';
import Style from './style';
import template from './template';

@customElement('socket-connection-log')
export class SocketConnectionLog extends connect(store)(LitElement) {
	public static styles = [GlobalStyle, Style];

	@property({ type: Boolean })
    public loaded = false;

    @property({ type: String })
    public message = '';

    @property({ type: Boolean })
	public connected = false;

    @property({ type: Array })
	public history = [];


	protected render() {
		return template.call(this);
	}

	handleConnectButton = (event) => {
		event.preventDefault();
		store.dispatch(socketsConnect());
	}

	handleDisconnectButton = (event) => {
		event.preventDefault();
		store.dispatch(socketsDisconnect());
	}
}

declare global {
	interface HTMLElementTagNameMap {
	  'socket-connection-log': SocketConnectionLog;
	}
}