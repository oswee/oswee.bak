// CORS temporary enabled
const URL = `https://api.oswee.com/v1/shipping/orders/0987914d-298e-443f-ad78-acf43eb2ec08`;

const fetchOrders = async page => {
	console.log('Orders page requested:', page);
	const response = await fetch(`${URL}`);
	const data = await response.json();
	if (response.status >= 400) {
		throw new Error(data);
	}
	return data.delivery_orders.reduce((obj, item) => {
		obj[item.uuid] = item;
		return obj;
	}, {});
};

export { fetchOrders };
