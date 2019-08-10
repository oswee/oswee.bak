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
	.container {
		width: 370px;
		padding: var(--size-xs);
		border-radius: 5px;
		box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 24px 38px 3px rgba(0, 0, 0, 0.14),
			0 9px 46px 8px rgba(0, 0, 0, 0.12);
		margin-bottom: var(--size-xl);
		background-color: var(--color-base-light);
	}
	.fieldset {
		display: flex;
		flex-direction: column;
		margin-bottom: 1.1rem;
	}
	label {
		font-size: var(--text-md);
		font-weight: 500;
	}
	input {
		height: 2rem;
		width: 100%;
		border-radius: 3px;
		background: var(--color-dodgerblue-10l);
		border: 1px solid var(--color-dodgerblue-6l);
		padding: 0 6px;
		outline: none;
		box-sizing: border-box;
	}
	input:focus {
		border: 1px solid var(--lt-color-primary, hsl(215 100% 50%));
	}
	#continue {
		color: white;
		background-color: var(--lt-color-primary, hsl(215 100% 50%));
		font-family: var(--font-main);
		font-size: var(--text-md);
		margin-bottom: 1.1rem;
		cursor: pointer;
	}
	p {
		margin: 0;
		font-size: var(--text-sm);
	}
	.have-account {
		font-size: var(--text-md);
		font-weight: 500;
	}
	.have-account a {
		text-decoration: none;
	}
	h1,
	p,
	input,
	label {
		color: var(--lt-color-light-10d);
	}
	h1 {
		margin-top: 0;
	}
	a {
		color: var(--color-dodgerblue-main);
	}
	@media only screen and (max-width: 600px) {
		.container {
			width: 280px;
		}
	}
`;
