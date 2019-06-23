import { LitElement, html, css } from 'lit-element';

class LegalInfo extends LitElement {
	static get is() {
		return 'legal-info';
	}

	static get properties() {
		return {
			id: {
				type: String,
			},
		};
	}

	constructor() {
		super();
		this.id = '';
	}

	static get styles() {
		return css`
			:host {
				width: 100%;
				display: flex;
				flex-direction: column;
				justify-content: center;
			}
			.links {
				display: flex;
				flex-direction: row;
				justify-content: center;
			}
			.links a {
				text-decoration: none;
				color: var(--lt-color-primary);
				font-size: var(--text-sm);
				line-height: 1.5rem;
				margin-right: 2em;
			}
			.links a:last-child {
				margin-right: 0;
			}
			.links a:hover {
				text-decoration: underline;
				cursor: pointer;
			}
			span {
				font-size: var(--text-sm);
				text-align: center;
				color: var(--lt-color-light-10d);
			}
		`;
	}

	// eslint-disable-next-line
	render() {
		return html`
			<div class="links">
				<a href="/help/conditions-of-use">Conditions of Use</a>
				<a href="/help/privacy-notice">Privacy Notice</a>
				<a href="/help">Help</a>
			</div>
			<span>© 2019, Oswee.com, Inc. or its affiliates</span>
			<slot></slot>
		`;
	}
}

customElements.define(LegalInfo.is, LegalInfo);

declare global {
	interface HTMLElementTagNameMap {
	  'legal-info': LegalInfo;
	}
}