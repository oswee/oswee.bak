import { customElement, property, query } from 'lit-element';
import { connect } from 'pwa-helpers';
import store, { submitSignin } from '../../store';
import { SystemShell } from '../../containers/system-shell';
import GlobalStyle from '../../assets/global-style';
import Style from './style';
import template from './template';

@customElement('marketplace-loadboard')
export class MarketplaceLoadboard extends connect(store)(SystemShell) {
	public static styles = [GlobalStyle, Style];

	protected render() {
		return template.call(this);
	}
}

declare global {
	interface HTMLElementTagNameMap {
	  'marketplace-loadboard': MarketplaceLoadboard;
	}
}