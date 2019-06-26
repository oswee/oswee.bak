import { css } from 'lit-element';

export default css`
	:host {
		/* width: 100%; */
		min-height: var(--size-sl);
		box-sizing: border-box;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		background-color: var(--color-dodgerblue-10d);
		border-bottom: 1px solid var(--color-dodgerblue-6d);
		box-shadow: 0 0 4px rgba(0, 11, 26, 0.32), 0 4px 8px rgba(0, 11, 26, 0.46); // barely visible
	}

	nav {
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		box-sizing: border-box;
	}

	div {
		flex: 1;
	}

	button {
		height: var(--size-s);
		font-family: var(--font-main);
		font-size: 1rem;
		background-color: var(--color-dodgerblue-main);
		color: var(--color-dodgerblue-10l);
		border: none;
		border-radius: 2px;
		margin: 0 0.5rem;
		padding: 0 1rem;
		display: flex;
		flex-direction: row;
		align-items: center;
	}
`;
