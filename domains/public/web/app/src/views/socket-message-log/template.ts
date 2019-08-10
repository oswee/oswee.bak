import { html } from 'lit-element';
import { SocketMessageLog } from './index';
import { repeat } from 'lit-html/directives/repeat';

export default function template(this: SocketMessageLog) {
	return html`
		<div>
    <h3>Message log</h3>
        <ul>
          ${repeat(this.message_history, (i) => i.direction, (i, index) => html`
          <li>${index}: ${i.message}</li>`)}
        </ul>
        <form class="form-inline">
          <div class="form-group">
            ${(this.loaded && this.connected === true) ?
              html`
              <input
                class="form-control input-sm"
                type="text"
                id="message_text"
              >
              ` : html`
              <input
                class="form-control input-sm"
                type="text"
                id="message_text"
                readonly
              >
              `
            }
          </div>
          ${(this.connected === true) ?
              html`
                <button
                  @click=${(event) => this.handleSendButton(event)}>
                    <i class="fa fa-sign-in">Send</i>
                </button>
              ` : html`
                <button
                  @click=${(event) => this.handleSendButton(event)} disabled>
                    <i class="fa fa-sign-in">Send</i>
                </button>
              `
            }
        </form>
      </div>
	`;
}
