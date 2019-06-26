import { html } from 'lit-element';
import { AppShipping } from './index';
import '../../views/app-restricted-access'

export default function template(this: AppShipping) {
	return html`
		${ this.session.live ?
			html`
				<div>
					<h1>Shipping</h1>
					<button @click=${() => this.sendMessage('Message')}>Send WS</button>
				</div>
			` : html`
				<app-restricted-access></app-restricted-access>
			`
		}
	`;
}
