import { html } from 'lit-element';
import { UiPill } from './index';

export default function template(this: UiPill) {
	return html`
		<h1>${this.text}</h1>
	`;
}
