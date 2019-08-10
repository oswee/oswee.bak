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
	h1 {
		color: var(--color-dodgerblue-10d);
	}
`;
