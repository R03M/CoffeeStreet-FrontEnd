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
			window.location.href = "/login";
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


export function logOutUser(accessToken) {
	
  return async function (dispatch) {
		
    try {
      const response = await axios.post(`${url}/login/remove`,{} , {
        headers: {
					authorization: `Bearer ${accessToken}`,
					Accept: "aplication/json"
				},
      });

			window.location.href = "/";
      if (response) {
        dispatch({
          type: "LOGOUT_USER",
					session : response.data.session
        });

      }
    } catch (error) {

    }
  };
}
	export function getMyFavorites (payload) {
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

	export function addProductFavourite (payload, id) {
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

	export function deleteProductFavourite (payload, id) {
		return async function (dispatch) {
			console.log("payload" , payload);
			console.log("id" , id);
			try {
				await axios.delete(`${url}/users/${id}/favourites`, {data: payload});
				dispatch({
					type: "ADD_PRODUCT_FAVOURITE",
					
				});
			} catch (error) {
				return error;
			}
		};
	}


export function registerUserGoogle ( payload) {
	return async function (dispatch) {
		try {
			const response = await axios.post(`${url}/register`, payload);
			dispatch({
				type: "REGISTER_USER_GOOGLE",
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
				type: "LOGOUT_USER",
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
      export function postShoppingCart(cart){
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

export function getShoppingCart(){
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

export function deleteShoppingCart(){
	return async function (dispatch) {
		try {
			const response = await axios.delete(`${url}/cart`);
			dispatch({
				type: "DELETE_SHOPPING_CART",
				payload: response.data
			});
		}
		catch (error) {
			return error;
    }
  };
}
export function putShoppingCart(){
	return async function (dispatch) {
		try {
			const response = await axios.put(`${url}/cart`);
			dispatch({
				type: "PUT_SHOPPING_CART",
				payload: response.data
			});
		}
		catch (error) {
      return error;
    }
  };
}

export function refreshLog(  accessToken, refreshToken){
	console.log("refresh token", refreshToken)
	console.log("access token", accessToken)
	return async function (dispatch) {
		try {
			const response = await axios.post(`${url}/login/refresh`, {refreshToken} , { 
				headers: {
					authorization: `Bearer ${accessToken}`,
					
				}
			});
			localStorage.setItem("accessToken", JSON.stringify(response.data.accessToken));
		} catch (error) {
			return error;
		}

	}



}