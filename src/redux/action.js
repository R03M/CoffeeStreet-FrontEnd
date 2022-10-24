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

export function postNewProduct(data) {
	try {
		return async function (dispatch) {
			const response = await axios.post(`${url}/products`, data);
			dispatch({
				type: "POST_NEW_PRODUCT",
				payload: response.data.message
			});
		};
	} catch (error) {
		return error;
	}
}

export function clearResponseNewProduct() {
	return {
		type: "CLEAR_RESPONSE_NEW_PRODUCT"
	};
}

export function clearDetails() {
	return {
		type: "CLEAR_DETAILS"
	};
}

export function postUserNew(payload) {
	try {
		return async function () {
			const response = await axios.post(`${url}/register`, payload);
			alert("Created user successfully");
		};
	} catch (error) {
		return error;
	}
}

export function LoginUser(payload) {
	return async function (dispatch) {
		try {
			const response = await axios.post(`${url}/login`, payload);

			dispatch({
				type: "LOGIN_USER",
				payload: response.data
			});
			// console.log(response.data);
		} catch (error) {
			return alert("Invalid email or password");
		}
	};
}

export function registerUserGoogle(payload) {
	return async function (dispatch) {
		try {
			const response = await axios.post(`${url}/register`, payload);
		} catch (error) {
			return error;
		}
	};
}

export function checkEmailUser(payload) {
	return async function (dispatch) {
		try {
			const response = await axios.post(`${url}/register/email?email=${payload}`);
			dispatch({
				type: "CHECK_EMAIL_USER",
				payload: response.data
			});

			// console.log(response);
		} catch (error) {
			return error;
		}
	};
}
export function logPostData(token) {
	return async function (dispatch) {
		try {
			const response = await axios.get(`${url}/users/`, {
				headers: {
					authorization: `Bearer ${token}`,
					Accept: "aplication/json"
				}
			});
			// console.log(response.data[0].id);
			dispatch({
				type: "LOG_POST_DATA",
				payload: response.data
			});
		} catch (error) {
			// console.log(error);
		}
	};
}

export function getProductsId(id) {
	return async function (dispatch) {
		try {
			const response = await axios.get(`${url}/products/${id}`);
			dispatch({
				type: "GET_PRODUCTS_ID",
				payload: response.data
			});
		} catch (error) {
			return error;
		}
	};
}

export function clearDetailsProductId() {
	return {
		type: "CLEAR_DETAILS_PRODUCT_IS"
	};
}

export function deleteProduct(id) {
	return async function (dispatch) {
		try {
			await axios.delete(`${url}/products/${id}`);
			dispatch({
				type: "DELETE_PRODUCT"
			});
		} catch (error) {
			return error;
		}
	};
}

export function addProductToCart(payload) {
	return {
		type: "ADD_PRODUCT_TO_CART",
		payload
	};
}

export function removeProductFromCart(payload) {
	return {
		type: "REMOVE_PRODUCT_FROM_CART",
		payload
	};
}
export function removeOneProductFromCart(payload) {
	return {
		type: "REMOVE_ONE_PRODUCT_FROM_CART",
		payload
	};
}

export function clearCart() {
	return {
		type: "CLEAR_CART"
	};
}
export function postShoppingCart(cart) {
	return async function (dispatch) {
		try {
			const response = await axios.post(`${url}/cart`, cart);
			dispatch({
				type: "POST_SHOPPING_CART",
				payload: response.data
			});
		} catch (error) {
			return error;
		}
	};
}

export function getShoppingCart() {
	return async function (dispatch) {
		try {
			const response = await axios.get(`${url}/cart`);
			dispatch({
				type: "GET_SHOPPING_CART",
				payload: response.data
			});
		} catch (error) {
			return error;
		}
	};
}

export function deleteShoppingCart() {
	return async function (dispatch) {
		try {
			const response = await axios.delete(`${url}/cart`);
			dispatch({
				type: "DELETE_SHOPPING_CART",
				payload: response.data
			});
		} catch (error) {
			return error;
		}
	};
}
export function putShoppingCart() {
	return async function (dispatch) {
		try {
			const response = await axios.put(`${url}/cart`);
			dispatch({
				type: "PUT_SHOPPING_CART",
				payload: response.data
			});
		} catch (error) {
			return error;
		}
	};
}

export function putProducts(id, payload) {
	return async function (dispatch) {
		try {
			const response = await axios.put(`${url}/products/${id}`, payload);
			dispatch({
				type: "PUT_PRODUCTS",
				payload: response.data.message
			});
		} catch (error) {
			return error;
		}
	};
}

export function clearResPutProducts() {
	return {
		type: "CLEAR_RES_PUT_PRODUCTS"
	}
}
