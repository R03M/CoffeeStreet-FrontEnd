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


export function postUserNew(payload) {
	try{
		return async function () {
			const response = await axios.post(`${url}/register`, payload);
			alert("Created user successfully");
			window.location.href = "/login";
		};
	} catch (error) {
		return( error);
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

		} catch (error) {
			
			return error;
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

			// window.location.href = "/home";
      if (response) {
        dispatch({
          type: "LOGOUT_USER",
        });

      }
    } catch (error) {

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

export function checkEmailUser (payload) {
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
			console.log("refresh este no funciona",response.data)
			dispatch({
				type: "REFRESH_LOG",
				payload: response.data
			});
		} catch (error) {
			return error;
		}

	}



}