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
`;
