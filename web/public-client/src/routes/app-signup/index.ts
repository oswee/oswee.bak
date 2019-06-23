import { LitElement, html, property } from 'lit-element';
import { connect } from 'pwa-helpers';
import store, { loadWaybills, getWaybills, submitSignup } from '../../store';
import { SystemShell } from '../../containers/system-shell';
import GlobalStyle from '../../assets/global-style';
import Style from './style';
import '../../views/legal-info';

class AppSignup extends connect(store)(SystemShell) {
	static get is() {
		return 'app-signup';
	}

	@property({ type: Object }) public waybills: object = {};

	public static styles = [GlobalStyle, Style];

	stateChanged(state) {
		this.waybills = getWaybills(state);
		// console.log(this.waybills);
	}

	// eslint-disable-next-line
	protected render() {
		return html`
			<div>
				<div class="container">
					<form id="signup_form" name="signup" method="POST" novalidate action="">
						<h1>Create account</h1>
						<input type="hidden" name="appActionToken" value="JpvLfj2FzMZj2FoVvEDKWR29i80dN5cj3D" />
						<div class="fieldset">
							<label for="customer_name">Your name</label>
							<input id="customer_name" name="customerName" type="text" autofocus />
						</div>
						<div class="fieldset">
							<label for="email">Email</label>
							<input id="email" name="email" type="text" />
						</div>
						<div class="fieldset">
							<label for="password">Password</label>
							<input id="password" name="password" type="password" />
						</div>
						<div class="fieldset">
							<input
								id="continue"
								type="submit"
								value="Create your Oswee account"
								@click=${this.fetchOrders}
							/>
							<p>By creating an account, you agree to Oswee's</p>
							<p>
								<a href="/help/conditions_of_use">Conditions of Use</a> and
								<a href="/help/privacy_notice">Privacy Notice</a>
							</p>
						</div>
						<div>
							<p class="have-account">Already have an account?<a href="/signin"> Sign in</a></p>
						</div>
					</form>
				</div>
				<legal-info></legal-info>
			</div>
		`;
	}

	payload = {
		display_name: 'Dzintars Saga',
		email: 'dzintars@saga.com',
		password: 'sagapass',
	};

	fetchOrders(e) {
		e.preventDefault();
		store.dispatch(submitSignup(this.payload));
		// store.dispatch(loadWaybills());
	}
}

customElements.define(AppSignup.is, AppSignup);
