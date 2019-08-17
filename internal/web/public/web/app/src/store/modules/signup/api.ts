// CORS temporary enabled
const URL = `http://localhost:8080/v1/signup`;

const fetchSignup = async () => {
	// const response = await fetch(`${URL}`);
	const response = await fetch(URL, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-type': 'text/plain',
		},
		body: JSON.stringify({
			api: 'v1',
			payload: {
				display_name: 'string',
				email: 'string',
				password: 'string',
			},
		}),
	});
	const data = await response.json();
	if (response.status >= 400) {
		throw new Error(data);
	}
	return data;
};

export { fetchSignup };
