import { html } from 'lit-element';
import { MainNavigationPublic } from './index';

export default function template(this: MainNavigationPublic) {
	return html`
		<h1 @click=${() => this.switchRoute('')}>Oswee</h1>
		<a href="/marketplace">Marketplace</a>
		<a href="/services">Services</a>
		<a href="/organizations">Organizations</a>
		<a href="/apps/routeplanner">Route Planner</a>
		<a href="/about">About</a>
	`;
}
