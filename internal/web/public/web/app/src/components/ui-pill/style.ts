import { css } from 'lit-element';

export default css`
	* {
		box-sizing: border-box;
	}
    :host([hidden]) {
        display: none;
    }
    :host {
        display: inline-block;
        width: auto;
        min-width: var(--height);
        height: var(--height);
        border-radius: calc(var(--height) / 2);
        background-color: var(--background);
        font-size: var(--height);
        cursor: default;
    }
    p {
        font-size: 0.8em;
        text-align: center;
        text-decoration: none;
        color: var(--color);
        margin: auto 0.5em;
    }
    h1 {
        color: dodgerblue;
        border: 1px solid green;
    }
`;
