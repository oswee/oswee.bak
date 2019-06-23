import { customElement, property } from 'lit-element';
import GlobalStyle from '../../assets/global-style';
import { SystemShell } from '../../containers/system-shell';
import Style from './style';
import template from './template';

@customElement('app-shipping')
export class AppShipping extends SystemShell {
	public static styles = [GlobalStyle, Style];
	private socket = new WebSocket("ws://localhost:7070/v1/ws/private");

	public sendMessage(m: string) {
		const socket = this.socket;
		console.log(m);
		this.socket.send(m);
	}
	
	protected render() {
		return template.call(this);
	}


	connectedCallback() {
		super.connectedCallback();
		console.log("Connecting...");
		this.socket.onopen = () => {
			console.log("Connected!");
			this.socket.send("Hello from client!");
		}
		this.socket.onclose = (event) => {
			console.log("Socket Closed", event);
		}
		this.socket.onerror = (error) => {
			console.log("Socket Error: ", error);
		}
		this.socket.onmessage = (msg) => {
			console.log(msg);
		}
	}

	disconnectedCallback() {
		super.disconnectedCallback();
		this.socket.close(1000, "Work complete");
	}
}

declare global {
	interface HTMLElementTagNameMap {
	  'app-shipping': AppShipping;
	}
}