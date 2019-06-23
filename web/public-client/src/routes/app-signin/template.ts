import { html } from 'lit-element';
import { AppSignin } from './index';
import '../../views/legal-info';

export default function template(this: AppSignin) {
	return html`
		<div>
			<div class="container">
				<form id="signin-form" name="signup" novalidate action="">
					<h1>Sign in</h1>
					<div class="fieldset">
						<label for="email">Email</label>
						<input id="email" class="input txt" name="email" type="text" />
					</div>
					<div class="fieldset">
						<div class="restore-pass">
							<label for="password">Password</label>
							<a href="/restore-password">Forgot your password?</a>
						</div>
						<input
							id="password"
							class="input txt"
							name="password"
							type="password"
						/>
					</div>
					<div class="fieldset">
						<input @click=${(event) => this.signIn(event)} id="signin" class="input btn" type="submit" value="Sign in" />
						<label class="keepin">
							<input class="input chk" type="checkbox" value="" />			
							<span>Keep me signed in.</span>
						</label>
					</div>
					<div class="new-client">
						<p>New to Oswee?</p>
						<a class="signup" href="/signup">Create your Oswee account</a>
					</div>
				</form>
			</div>
			<legal-info></legal-info>
		</div>
	`;
}
