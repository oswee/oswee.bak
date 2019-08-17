import './scss/main.scss';
import './containers/system-shell';
import './containers/socket-example-page';
import './routes/app-home';
import './routes/app-signup';
import './routes/app-restore-password';
import './routes/app-not-found';
import './routes/app-shipping';

import { LitElement, html, css } from 'lit-element';
import { Router } from '@vaadin/router';

// if ('serviceWorker' in navigator) {
// 	// Use the window load event to keep the page load performant
// 	window.addEventListener('load', () => {
// 	  navigator.serviceWorker.register('/service-worker.js');
// 	});
//   }

// TODO: Need to implement CSS Autoprefixer
class Bootstrap extends LitElement {
	static get styles() {
		return [
			css`
				.leaving {
					top: 48px;
					-webkit-animation: fadeOut 1s ease-in-out; /* Safari, Chrome and Opera > 12.1 */
					-moz-animation: fadeOut 1s ease-in-out; /* Firefox < 16 */
					-ms-animation: fadeOut 1s ease-in-out; /* Internet Explorer */
					-o-animation: fadeOut 1s ease-in-out; /* Opera < 12.1 */
					animation: fadeOut 3s ease-in-out;
				}

				.entering {
					top: 48px;
					-webkit-animation: fadeIn 1s linear; /* Safari, Chrome and Opera > 12.1 */
					-moz-animation: fadeIn 1s linear; /* Firefox < 16 */
					-ms-animation: fadeIn 1s linear; /* Internet Explorer */
					-o-animation: fadeIn 1s linear; /* Opera < 12.1 */
					animation: fadeIn 3s linear;
				}

				@keyframes fadeOut {
					from {
						opacity: 1;
					}
					to {
						opacity: 0;
					}
				}

				@keyframes fadeIn {
					from {
						opacity: 0;
					}
					to {
						opacity: 1;
					}
				}
			`,
		];
	}

	get routerEntry() {
		return this.shadowRoot.getElementById('router-entry');
	}

	firstUpdated() {
		const router = new Router(this.routerEntry);
		router.setRoutes([
			{
				path: '/',
				component: 'app-shell',
				// animate: true,
				children: [
					{ path: '/', component: 'app-home' },
					{
						path: '/signin',
						component: 'app-signin',
						animate: false,
					},
					{ path: '/signup', component: 'app-signup' },
					{ path: '/restore-password', component: 'app-restore-password' },
					{ path: '/shipping', component: 'app-shipping' },
					{ path: '/ws', component: 'socket-example-page' },
					{ path: '(.*)', component: 'app-not-found' },
				],
			},
		]);
	}

	render() {
		return html`
			<main id="router-entry"></main>
		`;
	}

	// Turn off shadowDOM
	// createRenderRoot() {
	// 	return this;
	// }
}

customElements.define('system-bootstrap', Bootstrap);
