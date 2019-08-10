import { customElement, html, property } from 'lit-element';
import { SystemShell } from '../system-shell';
import { connect } from 'pwa-helpers';
import store, { RootState, getSession } from '../../store';
import GlobalStyle from '../../assets/global-style';
import Style from './style';
import '../../views/app-restricted-access'

@customElement('app-shell')
export class AppShell extends connect(store)(SystemShell) {
	public static styles = [ GlobalStyle, Style ];


	protected render() {
		return html`
			${ this.session.live ?
			html`
				<slot></slot>
			` : html`
				<app-restricted-access></app-restricted-access>
			`
		}
		`;
	}

}

declare global {
	interface HTMLElementTagNameMap {
	  'app-shell': AppShell;
	}
}