import { LitElement, customElement, property } from 'lit-element';
import { connect } from 'pwa-helpers';
import store, { RootState, toggleLauncher, getLauncherVisibility} from '../../store';
import GlobalStyle from '../../assets/global-style';
import template from './template';
import Style from './style';

@customElement('main-navigation-private')
export class MainNavigationPrivate extends connect(store)(LitElement) {
	public static styles = [GlobalStyle, Style];
	@property({ type: Boolean }) launcherIsVisible = false;

	stateChanged(state: RootState) {
		this.launcherIsVisible = getLauncherVisibility(state);
	}

	protected render() {
		return template.call(this);
	}

	toggleLauncher() {
		store.dispatch(toggleLauncher());
	}
}

declare global {
	interface HTMLElementTagNameMap {
	  'main-navigation-private': MainNavigationPrivate;
	}
}