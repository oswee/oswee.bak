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
	h1,
	p,
	input,
	label {
		color: var(--color-dodgerblue-10d, hsla(0, 0%, 0%, 1));
	}
	h1 {
		margin-top: 0;
	}

	.input {
		height: 2rem;
		border-radius: 3px;
		padding: 0 6px;
		outline: none;
		box-sizing: border-box;
		font-family: var(--font-main);
	}

	#signin {
		color: white;
		background-color: var(--lt-color-primary, hsl(215 100% 50%));
		font-family: var(--font-main);
		font-size: var(--text-md);
		margin: 1.1rem 0;
		cursor: pointer;
	}
	.new-client {
		width: 100%;
		height: auto;
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: 1rem;
		justify-items: center;
	}
	.new-client a {
		color: white;
		background: var(--color-lawngreen-main);
	}
	.signup {
		display: inline-block;
		width: 100%;
		height: var(--size-xm);
		line-height: var(--size-xm);
		font-size: var(--text-md);
		text-align: center;
		text-decoration: none;
		border-radius: 3px;
		border: 1px solid var(--lt-color-success);
		color: var(--color-light);
		background-color: var(--color-success);
	}
	.signup:hover {
		cursor: pointer;
		background-color: var(--color-success-2l);
	}
	p {
		margin: 0;
		font-size: var(--text-sm);
	}
	.have-account {
		font-size: var(--text-md);
		font-weight: 500;
	}
	.keepin {
		width: auto;
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.restore-pass {
		display: flex;
		flex-direction: row;
	}
	.restore-pass label {
		flex: 1;
	}
	.restore-pass a {
		font-size: var(--text-md);
		text-decoration: none;
		color: var(--lt-color-primary);
	}
	@media only screen and (max-width: 600px) {
		.container {
			width: 280px;
		}
	}
`;
