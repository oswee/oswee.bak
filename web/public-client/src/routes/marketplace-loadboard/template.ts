import { html } from 'lit-element';
import { MarketplaceLoadboard } from './index';

export default function template(this: MarketplaceLoadboard) {
	return html`
		<div>Toolbar</div>
		<div>Body</div>
		<div>Statusbar</div>
	`;
}
