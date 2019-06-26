import { html } from 'lit-element';
import { AppApps } from './index';

export default function template(this: AppApps) {
	return html`
		<h1>Apps</h1>
		<slot></slot>
	`;
}
