import { LitElement, customElement, property } from 'lit-element';
import { connect } from 'pwa-helpers';
import store, { RootState } from '../../store';

// import GlobalStyle from '../../assets/global-style';
import template from './template';



// export class SocketExamplePage extends connect(store)(LitElement) {
@customElement('socket-example-page')
export class SocketExamplePage extends connect(store)(LitElement) {

	@property({ type: Boolean })
    public loaded = false;

    @property({ type: String })
    public message = '';

    @property({ type: Boolean })
	public connected = false;

    @property({ type: Boolean })
	public history = [];

	stateChanged(state: RootState) {
		this.loaded = state.socket.loaded;
		this.message = state.socket.message;
		this.connected = state.socket.connected;
		this.history = state.socket.history;
	}

	protected render() {
		return template.call(this);
	}
}

declare global {
	interface HTMLElementTagNameMap {
	  'socket-example-page': SocketExamplePage;
	}
}