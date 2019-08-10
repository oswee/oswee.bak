import { css } from 'lit-element';

export default css`
	* {
		box-sizing: border-box;
	}
    :host {
        flex: 1;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        background-color: var(--color-dodgerblue-8d);
        box-sizing: border-box;
        align-items: center;
        justify-content: center;
        color: var(--color-dodgerblue-8l);
    }
`;