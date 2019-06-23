import { LitElement, customElement, property} from 'lit-element';
import { connect } from 'pwa-helpers';
import store, { RootState } from '../../store';

@customElement('web-socket')
class WebSocket extends connect(store)(LitElement) {

    @property({ type: Boolean })
    private loaded = false;

    @property({ type: String })
    private message = '';

    @property({ type: Boolean })
    private connected = false;



    stateChanged(state: RootState) {
      this.loaded = state.socket.loaded;
      this.message = state.socket.message;
      this.connected = state.socket.connected;
    }
	
}

declare global {
	interface HTMLElementTagNameMap {
	  'web-socket': WebSocket;
	}
}
