import { css } from 'lit-element';

export default css`
	* {
		box-sizing: border-box;
	}
	:host {
		flex: 1;
		display: grid;
		place-items: center center;
		transition: all 5s linear;
		background-color: var(--color-dodgerblue-10l);
		overflow: auto;
	}
	
`;
