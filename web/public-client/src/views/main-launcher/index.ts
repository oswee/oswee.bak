import { LitElement, customElement, html, css } from 'lit-element';
import { repeat } from 'lit-html/directives/repeat';
import { connect } from 'pwa-helpers';
import store, {
	RootState,
	getPublicApps,
	getLauncherVisibility,
	hideLauncher,
	launcherShown,
	launcherHidden,
} from '../../store';
import { Router } from '@vaadin/router';
import {EventPathIncludes } from '../../utils';
import '../app-shortcut';

@customElement('main-launcher')
export class MainLauncher extends connect(store)(LitElement) {

	private isVisible: boolean;
	private wrapperRef: any;
	private apps: Array<any>;

	static get properties() {
		return {
			isVisible: {
				type: Boolean,
			},
			apps: {
				type: Array,
			},
		};
	}

	constructor() {
		super();
		this.isVisible = false;
		this.setWrapperRef = this.setWrapperRef.bind(this);
		this.handleClickOutside = this.handleClickOutside.bind(this);
	}

	stateChanged(state: RootState) {
		this.isVisible = getLauncherVisibility(state);
		this.apps = getPublicApps(state);
	}

	static get styles() {
		return [
			css`
				:host {
					height: auto;
					max-height: calc(100vh - var(--size-sl));
					width: 100%;
					box-sizing: border-box;
					display: flex;
					flex-direction: row;
					background-color: var(--color-dodgerblue-9d);
					box-sizing: border-box;
					// align-items: center;
					// justify-content: center;
					color: var(--color-dodgerblue-8l);
					overflow: auto;
					flex-wrap: wrap;
				}
				app-shortcut {
					margin: 1rem;
				}
			`,
		];
	}

	//
	// eslint-disable-next-line
	render() {
		return html`
			${repeat(
				this.apps,
				app => app.uuid,
				app => html`
					<app-shortcut
						key="${app.uuid}"
						@click=${() => this.switchRoute(`${app.path}`)}
						title="${app.title}"
					></app-shortcut>
				`,
			)}
		`;
	}//

	switchRoute(route) {
		store.dispatch(hideLauncher());
		Router.go(`/${route}`);
	}

	openApp(e) {
		console.log('Clicked:', e.target.getAttribute('key'));
	}

	changeState() {
		store.dispatch(hideLauncher());
	}

	connectedCallback() {
		super.connectedCallback();
		document.addEventListener('mousedown', this.handleClickOutside);
		store.dispatch(launcherShown());
	}

	disconnectedCallback() {
		super.disconnectedCallback();
		document.removeEventListener('mousedown', this.handleClickOutside);
		store.dispatch(launcherHidden());
	}

	setWrapperRef(node) {
		this.wrapperRef = node;
	}

	handleClickOutside(e) {
		if (
			this.getRootNode().contains(this) &&
			(!e.composedPath().includes(this) && !EventPathIncludes(e, '#launcher'))
		) {
			store.dispatch(hideLauncher());
		}
	}
}

declare global {
	interface HTMLElementTagNameMap {
	  'main-launcher': MainLauncher;
	}
}