import axios from "axios";

const url = process.env.REACT_APP_BACK_URL;

export function getProducts() {
	return async function (dispatch) {
		const response = await axios.get(`${url}/products`);
		dispatch({
			type: "GET_PRODUCTS",
			payload: response.data
		});
	};
}
export function getProductsName(name) {
	return async function (dispatch) {
		try {
			const response = await axios.get(`${url}/products?name=${name}`);
			dispatch({
				type: "GET_PRODUCTS_NAME",
				payload: response.data
			});
		} catch (error) {
			return error;
		}
	};
}

export function clearError() {
	return {
		type: "CLEAR_ERROR_SEARCHP"
	};
}

export function filterByCategory(payload) {
	return {
		type: "FILTER_BY_CATEGORY",
		payload
	};
}

export function filterByType(payload) {
	return {
		type: "FILTER_BY_TYPE",
		payload
	};
}

export function filterByPrepared(payload) {
	return {
		type: "FILTER_BY_PREPARED",
		payload
	};
}

export function orderByPrice(payload) {
	return {
		type: "ORDER_BY_PRICE",
		payload
	};
}

export function productDetails(id) {
	return async function (dispatch) {
		const response = await axios.get(`${url}/products/${id}`);
		dispatch({
			type: "PRODUCT_DETAILS",
			payload: response.data
		});
	};
}

export function postNewProduct(payload) {
	try {
		return async function () {
			const response = await axios.post(`${url}/products`, payload);
			console.log(response)
		};
	} catch (error) {
		return error;
	}
}

export function clearDetails() {
	return {
		type: "CLEAR_DETAILS"
	};
}

<<<<<<< HEAD
export function LoginUser(payload) {
	return async function (dispatch) {
		try {
			const response = await axios.post(`${url}/login`, payload);
			
			dispatch({
				type: "LOGIN_USER",
				payload: response.data
			});
			console.log(response.data.refreshToken)
		} catch (error) {
			
			return error;
		}
	};
}

=======
export function postUserNew(payload) {
	try{
		return async function () {
			const response = await axios.post(`${url}/register`, payload);
			alert("Created user successfully");
		};
	} catch (error) {
		return( error);
	}
}
>>>>>>> 29f18dbc5bece0e7d83fa700f73bdcaff6a5e7f5
