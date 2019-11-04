import { css } from 'lit-element';

export default css`
	* {
		box-sizing: border-box;
	}
	:host {
		flex: 1;
		display: flex;
		flex-direction: row;
	}
	#shortcuts {
		width: 3rem;
		background-color: orange;
	}
	#workspace {
		flex: 1;
		border: 10px solid green;
	}
	.dz-button {
		margin: 1rem;
		border: 1px solid var(--color-dodgerblue-main);
		height: 24px;
		border-radius: 3px;
		background-color: var(--color-dodgerblue-6d);
		color: var(--color-dodgerblue-10l);
	}
`;
