import { html } from 'lit-element';
import { AppRestrictedAccess } from './index';
import '../../views/legal-info';

export default function template(this: AppRestrictedAccess) {
	return html`
		<h1>Restricted Access</h1>
		<p>Please <a href="/signin">Sign In</a> to access application</p>
	`;
}
