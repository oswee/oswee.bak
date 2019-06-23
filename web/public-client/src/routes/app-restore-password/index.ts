import { customElement, html } from 'lit-element';
import { SystemShell } from '../../containers/system-shell';
import GlobalStyle from '../../assets/global-style';
import Style from './style';
import '../../views/legal-info';

@customElement('app-restore-password')
export class AppRestorePassword extends SystemShell {
	public static styles = [ GlobalStyle, Style ];

	protected render() {
		return html`
			<div>
				<div class="container">
					<form id="signup_form" name="signup" method="GET" novalidate action="">
						<div class="fieldset">
							<h1>Password assistance</h1>
							<p>Enter the email address associated with your Hooli account.</p>
						</div>
						<input type="hidden" name="appActionToken" value="JpvLfj2FzMZj2FoVvEDKWR29i80dN5cj3D" />
						<div class="fieldset">
							<label for="email">Email</label>
							<input id="email" class="input txt" name="email" type="text" />
						</div>
						<div class="fieldset">
							<input id="signin" class="input btn" type="submit" value="Continue" />
						</div>
					</form>
				</div>
				<legal-info></legal-info>
			</div>
		`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
	  'app-restore-password': AppRestorePassword;
	}
}