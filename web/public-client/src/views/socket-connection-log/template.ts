import { html } from 'lit-element';
import { SocketConnectionLog } from './index';

export default function template(this: SocketConnectionLog) {
	return html`
		<div>
        <h3>Socket connection log</h3>
        <textarea
          class="form-control"
          rows="1"
          readOnly
          placeholder="Waiting ..."
          .value=${this.history.map((historyElement, index) => 
            'index = ' + index +
            ' loaded = ' + historyElement.loaded.toString() +
            ' message = ' + historyElement.message.toString() +
            ' connected = ' + historyElement.connected.toString() + ' \n').reverse()
            }>
        </textarea>
        <button class="btn btn-primary btn-sm"
        @click=${(event) => this.handleConnectButton(event)}>
        	<i class="fa fa-sign-in">Connect</i>
        </button>
        <button class="btn btn-danger btn-sm"
        @click=${(event) => this.handleDisconnectButton(event)}>
        	<i class="fa fa-sign-out">Disconnect</i>
        </button>
      </div>
	`;
}
