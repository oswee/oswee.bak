import { customElement, property, query } from 'lit-element';
import { connect } from 'pwa-helpers';
import store, { submitSignin } from '../../store';
import { SystemShell } from '../../containers/system-shell';
import GlobalStyle from '../../assets/global-style';
import { Buttons } from '../../assets/style';
import Style from './style';
import template from './template';

@customElement('app-route-planner')
export class AppRoutePlanner extends connect(store)(SystemShell) {
	public static styles = [GlobalStyle, Buttons, Style];

	protected render() {
		return template.call(this);
	}
}

declare global {
	interface HTMLElementTagNameMap {
	  'app-route-planner': AppRoutePlanner;
	}
}