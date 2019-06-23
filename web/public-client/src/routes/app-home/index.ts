import { customElement, html, css } from 'lit-element';
import { SystemShell } from '../../containers/system-shell';
import GlobalStyle from '../../assets/global-style';
import Style from './style';

@customElement('app-home')
export class AppHome extends SystemShell {
	public static styles = [GlobalStyle, Style];

	// eslint-disable-next-line
	render() {
		return html`
			<h1>Welcome to Oswee</h1>
			<h2>You have nothing to do there!</h2>
			<p>This page is under continous development. Your actions are tracked.</p>
		`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
	  'app-home': AppHome;
	}
}