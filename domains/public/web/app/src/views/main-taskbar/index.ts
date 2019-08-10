import { LitElement, html, customElement, property } from 'lit-element';
import { connect } from 'pwa-helpers';
import store, { RootState, hideLauncher, getSession, submitSignout } from '../../store';
import { Router } from '@vaadin/router';
import GlobalStyle from '../../assets/global-style';
import Style from './style';
import '../main-navigation-public';
import '../main-navigation-private';

@customElement('main-taskbar')
export class MainTaskbar extends connect(store)(LitElement) {
	public static styles = [GlobalStyle, Style];

	@property({ type: Object }) session = {
		live: false,
	};

	stateChanged(state: RootState) {
		this.session = getSession(state);
	}

	render() {
		return html`
			<nav>
				${ this.session.live ?
					html`
						<main-navigation-private></main-navigation-private>
						<div></div>
						<button @click=${() => this.signOut()}>Sign Out</button>
					` : html`
						<main-navigation-public></main-navigation-public>
						<div></div>
						<button id="btnSignin" @click=${() => this.switchRoute('signin')}>Sign In</button>
					`
				}
			</nav>
		`;
	}


	switchRoute(route) {
		// console.log(Router.urlForName('/signin'));
		store.dispatch(hideLauncher());
		Router.go(`/${route}`);
	}

	public signOut() {
		console.log("Sign out clicked!")
		store.dispatch(submitSignout());
	}
}

declare global {
	interface HTMLElementTagNameMap {
	  'main-taskbar': MainTaskbar;
	}
}