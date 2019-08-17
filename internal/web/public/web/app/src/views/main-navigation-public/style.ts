import { css } from 'lit-element';

export default css`
	* {
		box-sizing: border-box;
	}
	:host {
		height: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		box-sizing: border-box;
	}
	a {
		color: var(--color-dodgerblue-10l);
		text-decoration: none;
		padding-left: 1rem;
		font-size: 1.1rem;
	}
	a:active {
		color: red;
	}
	h1 {
		margin: 0 1rem;
		color: var(--color-dodgerblue-10l);
		cursor: pointer;
		font-weight: 700;
		font-size: 1.8rem;
	}

`;
