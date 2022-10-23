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
	return async function (dispach) {
		try {
			const response = await axios.get(`${url}/users/`, {
				headers: {
					authorization: `Bearer ${token}`,
					Accept: "aplication/json"
				}
			});
			// console.log(response.data[0].id);
			dispach({
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
export function getOrCreateShoppingCart(id){
	console.log("id cart",id)
	return async function(dispatch){
		try{
			const response = await axios.post(`${url}/cart`,id);
			dispatch({
				type: "GET_CREATE_SHOPPING_CART",
				payload: response.data
			});
			console.log("response",response.data)
		}catch(error){
			return error;
		}
	};
}

export function deleteItemShoppingCart(cart){
	return async function (dispatch){
		try{
			const response = await axios.delete(`${url}/cart`,cart);
			dispatch({
				type: "DELETE_ITEM_SHOPPING_CART",
				payload: response.data
			});
		}catch(error){
			return error;
		}
	}
}
export function addItemShoppingCart(cart){
	return async function (dispatch){
		try{
			const response = await axios.put(`${url}/cart`,cart);
			dispatch({
				type: "ADD_ITEM_SHOPPING_CART",
				payload: response.data
			});
		}catch(error){
			return error;
		}
	}
}

export function emptyCart(cart){
	return async function (dispatch){
		try{
			const response = await axios.delete(`${url}/cart`,cart);
			dispatch({
				type: "EMPTY_CART",
				payload: response.data
			});
		}catch(error){
			return error;
		}
	}
}