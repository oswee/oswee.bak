import { customElement } from 'lit-element';
import { connect } from 'pwa-helpers';
import store from '../../store';
import { SystemShell } from '../../containers/system-shell';
import GlobalStyle from '../../assets/global-style';
import Style from './style';
import template from './template';

@customElement('app-restricted-access')
export class AppRestrictedAccess extends connect(store)(SystemShell) {
	public static styles = [GlobalStyle, Style];

	protected render() {
		return template.call(this);
	}
}

declare global {
	interface HTMLElementTagNameMap {
	  'app-restricted-access': AppRestrictedAccess;
	}
}