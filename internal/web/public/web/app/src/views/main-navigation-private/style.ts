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
	svg {
		width: 1.5rem;
		height: 1.5rem;
		fill: var(--color-dodgerblue-10l);
	}

	.launcher {
		height: var(--size-m);
		width: var(--size-m);
		padding: 0;
		justify-content: center;
		border-radius: 50%;
		color: white;
		outline: none;
	}
	#btnSignin {
		font-weight: 500;
		color: white;
	}
	
	main-launcher {
        position: fixed;
        top: var(--size-sl);
    }
`;
