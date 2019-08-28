import { html } from 'lit-element';
import { AppRoutePlanner } from './index';

export default function template(this: AppRoutePlanner) {
	return html`
		<div id="shortcuts"></div>
		<div id="workspace">
			<button class="dz-button">Create New</button>
			<p>Test</p>
		</div>
	`;
}
