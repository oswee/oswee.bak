import { css } from 'lit-element';

export default css`
	* {
		box-sizing: border-box;
	}
	:host {
		flex: 1;
		display: grid;
		place-items: center center;
		background-color: var(--color-dodgerblue-10l);
		overflow: auto;
	}
    textarea {
        display: block;
        height: 3rem;
        width: 600px;
    }
    button {
        margin: 1rem 1rem 1rem 0;
    }
`;
