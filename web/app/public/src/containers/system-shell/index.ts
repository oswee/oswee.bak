import { LitElement, customElement, html, property } from 'lit-element';
import { connect } from 'pwa-helpers';
import store, { RootState, getSession } from '../../store';
import GlobalStyle from '../../assets/global-style';
import Style from './style';

import '../../views/main-taskbar';

@customElement('system-shell')
export class SystemShell extends connect(store)(LitElement) {
	public static styles = [ GlobalStyle, Style ];

	@property({ type: String}) lastUsedApp = 'app-home'
	@property({ type: Object }) session = {
		live: false,
		email: '',
	};

	stateChanged(state: RootState) {
		this.session = getSession(state);
		// if (this.session.live === true) {
		// 	Router.go(`/shipping`);
		// }
	}


	protected render() {
		return html`
			<main-taskbar></main-taskbar>
			<slot></slot>
		`;
	}

	connectedCallback() {
		super.connectedCallback();
		if (localStorage.getItem('lastUsedApp') !== null) {
			this.lastUsedApp = localStorage.getItem('lastUsedApp');
		}
		// console.log("Last Used App:", this.lastUsedApp);
		// store.dispatch(initializeWeSocketsChannel());
	}

	disconnectedCallback() {
		super.disconnectedCallback();
	}
}

declare global {
	interface HTMLElementTagNameMap {
	  'system-shell': SystemShell;
	}
}