import { LitElement, customElement, html, css, property } from 'lit-element';

@customElement('app-shortcut')
export class AppShortcut extends LitElement {

	@property({ type: String }) public title: string = '';

	static get styles() {
		return [
			css`
				:host {
					height: 140px;
					width: 300px;
					box-sizing: border-box;
					display: flex;
					flex-direction: column;
					background-color: var(--color-dodgerblue-6d);
					box-sizing: border-box;
					color: var(--color-dodgerblue-8l);
					padding: 1rem;
				}
			`,
		];
	}

	render() {
		return html`
			<h3>${this.title}</h3>
		`;
	}

	connectedCallback() {
		super.connectedCallback();
	}
}

declare global {
	interface HTMLElementTagNameMap {
	  'app-shortcut': AppShortcut;
	}
}