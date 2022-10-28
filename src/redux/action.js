import axios from "axios";
import { redirect } from "react-router-dom";

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

// export function postUserNew(payload) {
// 	try {
// 		return async function (dispatch) {
// 			const response = await axios.post(`${url}/register`, payload);
// 			dispatch({
// 				type: "REGISTER_USER_GOOGLE",
// 				payload: response.data
// 			});
// 		};
// 		// eslint-disable-next-line no-unreachable
// 	} catch (error) {
// 		console.log(error);
// 	}
// }

export function LoginUser(payload) {
	return async function (dispatch) {
		try {
			const response = await axios.post(`${url}/login`, payload);

			dispatch({
				type: "LOGIN_USER",
				payload: response.data
			});
			if (response) {
				localStorage.setItem("refreshToken", JSON.stringify(response.data.refreshToken));
				localStorage.setItem("accessToken", JSON.stringify(response.data.accessToken));
			}
		} catch (error) {
			return alert("Invalid email or password");
		}
	};
}

export function logOutUser(accessToken) {
	return async function (dispatch) {
		try {
			const response = await axios.post(
				`${url}/login/remove`,
				{},
				{
					headers: {
						authorization: `Bearer ${accessToken}`,
						Accept: "aplication/json"
					}
				}
			);
			if (response) {
				localStorage.removeItem("refreshToken");
				localStorage.removeItem("accessToken");
				dispatch({
					type: "LOGOUT_USER"
				});
			}
		} catch (error) {}
	};
}

export function getMyFavorites(payload) {
	return async function (dispatch) {
		try {
			const response = await axios.get(`${url}/users/${payload}/favourites`);
			dispatch({
				type: "GET_MY_FAVORITES",
				payload: response.data
			});
		} catch (error) {
			return error;
		}
	};
}

export function addProductFavourite(payload, id) {
	return async function (dispatch) {
		try {
			const response = await axios.post(`${url}/users/${id}/favourites`, payload);
			dispatch({
				type: "ADD_PRODUCT_FAVOURITE",
				payload: response.data
			});
		} catch (error) {
			return error;
		}
	};
}

export function deleteProductFavourite(payload, id) {
	return async function (dispatch) {
		try {
			await axios.delete(`${url}/users/${id}/favourites`, { data: payload });
			dispatch({
				type: "ADD_PRODUCT_FAVOURITE"
			});
		} catch (error) {
			return error;
		}
	};
}

export function registerUserGoogle(payload) {
	return async function (dispatch) {
		try {
			await axios.post(`${url}/register`, payload);
			dispatch({
				type: "REGISTER_USER_GOOGLE",
				payload: true
			});
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
		} catch (error) {
			return error;
		}
	};
}
export function logPostData(token) {
	return async function (dispach) {
		try {
			const response = await axios.get(`${url}/users`, {
				headers: {
					authorization: `Bearer ${token}`,
					Accept: "aplication/json"
				}
			});
			dispach({
				type: "LOG_POST_DATA",
				payload: response.data
			});
		} catch (error) {
			dispach({
				type: "LOGOUT_USER"
			});
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

export function getOrCreateShoppingCart(id) {
	return async function (dispatch) {
		try {
			const response = await axios.post(`${url}/cart`, { id: id });
			dispatch({
				type: "GET_CREATE_SHOPPING_CART",
				payload: response.data
			});
			console.log("response", response.data);
		} catch (error) {
			return error;
		}
	};
}

export function deleteItemShoppingCart(cart) {
	return async function () {
		try {
			await axios.delete(`${url}/cart`, { data: cart });
		} catch (error) {
			return error;
		}
	};
}
export function addItemShoppingCart(cart) {
	return async function () {
		try {
			await axios.put(`${url}/cart`, cart);
		} catch (error) {
			return error;
		}
	};
}

export function emptyCart(cart) {
	console.log("cart", cart);
	return async function () {
		try {
			await axios.delete(`${url}/cart/all`, { data: cart });
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
	};
}

export function refreshLog(accessToken, refreshToken) {
	// console.log("refresh token", refreshToken)
	// console.log("access token", accessToken)
	return async function (dispatch) {
		try {
			const response = await axios.post(
				`${url}/login/refresh`,
				{ refreshToken },
				{
					headers: {
						authorization: `Bearer ${accessToken}`
					}
				}
			);
			localStorage.setItem("accessToken", JSON.stringify(response.data.accessToken));
		} catch (error) {
			return error;
		}
	};
}

export function changeStatus(productStock, productId) {
	return async function () {
		try {
			await axios.put(`${url}/products/${productId}/stock`, { data: productStock });
		} catch (error) {
			return error;
		}
	};
}

export function checkOut (cart){
	return async function (dispatch){
		try{
			const response = await axios.post(`${url}/pay/mercadopago`, cart);			
			dispatch({
				type: "CHECK_OUT",
				payload: response.data
			})
		}catch(error){
			return error
		}
	}
}

export function deleteItemCompletedCart(cart) {
	return async function () {
		try {
			await axios.delete(`${url}/cart/byproduct`, { data: cart });
		} catch (error) {
			return error;
		}
	};
}

export function updateUser(email) {
	return async function () {
		try {
			await axios.post(`${url}/user/update`, email);
		} catch (error) {
			console.log(error);
		}
	};
}

export function deleteUser(email) {
	return async function (dispatch) {
		try {
			const response = await axios.delete(`${url}/users/delete`, { data: email });

			localStorage.removeItem("refreshToken");
			localStorage.removeItem("accessToken");
			window.location.href = "/";
			dispatch({
				type: "LOGOUT_USER"
			});
		} catch (error) {
			return error;
		}
	};
}

export function getAllUsers() {
	return async function (dispatch) {
		try {
			const response = await axios.get(`${url}/users`);
			dispatch({
				type: "GET_ALL_USERS",
				payload: response.data
			});
		} catch (error) {
			return error;
		}
	};
}

export function getUsersByName(name) {
	return async function (dispatch) {
		try {
			const response = await axios.get(`${url}/users/${name}`);
			dispatch({
				type: "GET_USERS_BY_NAME",
				payload: response.data
			});
		} catch (error) {
			return error;
		}
	};
}

export function filterUsersByRole(payload) {
	return {
		type: "FILTER_USERS_BY_ROLE",
		payload
	};
}

export function clearErrorSUser() {
	return {
		type: "CLEAR_ERROR_SEARCH_USER"
	};
}


export function updateDiscountProduct(value, productId) {
	return async function (dispatch) {
		try {
			const response = await axios.post(`${url}/products/update-discount`, {
				percentage: value,
				idProduct: productId
			});
			dispatch({
				type: "UPDATE_DISCOUNT_PRODUCT",
				payload: response.data.message
			});
		} catch (error) {
			return error;
		}
	};
}

export function createOrder (payload){
	console.log(payload)
	return async function (){
		try{
			await axios.post(`${url}/order`,  payload);
		}catch(error){
			return error;
		}
	}
}

export function changeStatusOrder(id, status) {
	return async function () {
		try {
			await axios.put(`${url}/order/${id}/change-status`, {status: status});
		} catch (error) {
			return error;
		}
	};
}