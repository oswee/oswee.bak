// CORS temporary enabled
const URL = `http://localhost:8082/v1/session`;

// https://youtu.be/LZAbMCpyg0k?t=232
const fetchSignin = async (action) => {
	// const response = await fetch(`${URL}`);
	// console.log("Api", action)
	const response = await fetch(URL, {
		method: 'POST',
		mode: 'cors',
		cache: 'no-cache',
		credentials: 'include',
		headers: {
			Accept: 'application/json',
			'Content-type': 'application/json, text/plain; charset=utf-8',
		},
		body: JSON.stringify({
			email: action.payload.email,
			password: action.payload.password,
		}),
	});
	const data = await response.json();
	if (response.status >= 400) {
		throw new Error(data);
	}
	return data;
};

const fetchSignout = async (action) => {
	// const response = await fetch(`${URL}`);
	console.log("Signout API", action)
	const response = await fetch(URL, {
		method: 'DELETE',
		mode: 'cors',
		cache: 'no-cache',
		credentials: 'include',
		headers: {
			Accept: 'application/json',
			'Content-type': 'application/json, text/plain; charset=utf-8',
		},
		// body: JSON.stringify({
		// 	email: action.payload.email,
		// 	password: action.payload.password,
		// }),
	});
	const data = await response.json();
	if (response.status >= 400) {
		throw new Error(data);
	}
	return data;
};

export { fetchSignin, fetchSignout };
