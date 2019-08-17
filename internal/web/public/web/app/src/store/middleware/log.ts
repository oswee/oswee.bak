const logMiddleware = ({ getState, dispatch }) => next => action => {
	// console.log(`Action Log: ${action.type}`);
	next(action);
};

export default logMiddleware;
