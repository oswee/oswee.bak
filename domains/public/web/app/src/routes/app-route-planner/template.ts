import { html } from 'lit-element';
import { AppRoutePlanner } from './index';

export default function template(this: AppRoutePlanner) {
	return html`
		<div id="shortcuts"></div>
		<div id="workspace">
			<button>Crea...te</button>
		</div>
	`;
}
