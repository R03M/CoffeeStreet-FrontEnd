const localRefreshToken = JSON.parse(localStorage.getItem("refreshToken"));
const localAccessToken = JSON.parse(localStorage.getItem("accessToken"));

const initialState = {
	allProducts: [],
	products: [],
	errorSProducts: [],
	productDetails: {},
	responseCreateProduct: [],
	resUpdatedProduct: [],
	accessToken: localAccessToken || "",
	refreshToken: localRefreshToken || "",
	checkEmail: {},
	newlyCreated: false,
	user: {},
	productsDataId: {},
	cart: [],
	quantity: 0,
	order: [],
	myFavourites: [],
	allUsers: [],
	allUsersB: [],
	ordenesFilter: [],
	filterUserOrden: false,
	ordenes: [],
	errorSearchUser: [],
	resUpdateDiscountP: [],
	checkOut: "",
	resSendNewsL: "",
	resUpdateNews: "",
	reviews: [],
	productsWithDiscounts: [],
	detailsOrder: []
};

export default function rootReducer(state = initialState, action) {
	switch (action.type) {
		case "GET_PRODUCTS":
			return {
				...state,
				allProducts: action.payload,
				products: action.payload
			};

		case "GET_PRODUCTS_NAME":
			if (action.payload.errorMessage === "There is no product with that name") {
				return {
					...state,
					errorSProducts: action.payload.errorMessage
				};
			} else {
				return {
					...state,
					products: action.payload
				};
			}

		case "LOGIN_USER":
			return {
				...state,
				accessToken: action.payload.accessToken,
				refreshToken: action.payload.refreshToken
			};
		case "REGISTER_USER_GOOGLE":
			return {
				...state,
				newlyCreated: action.payload
			};

		case "LOG_POST_DATA":
			return {
				...state,
				user: action.payload
			};

		case "GET_MY_FAVORITES":
			return {
				...state,
				myFavourites: action.payload
			};

		case "LOGOUT_USER":
			return {
				...state,
				accessToken: "",
				refreshToken: "",
				user: {}
			};
		case "CHECK_EMAIL_USER":
			return {
				...state,
				checkEmail: action.payload
			};

		case "CLEAR_ERROR_SEARCHP":
			return {
				...state,
				errorSProducts: []
			};

		case "GET_PRODUCTS_FOR_ADMIN":
			return {
				...state,
				allProductsForAdmin: action.payload,
				productsForAdmin: action.payload
			};

		case "GET_PRODUCTS_NAME_FOR_ADMIN":
			if (action.payload.errorMessage === "There is no product with that name") {
				return {
					...state,
					errorSProductsAdmin: action.payload.errorMessage
				};
			} else {
				return {
					...state,
					productsForAdmin: action.payload
				};
			}

		case "CLEAR_ERROR_SEARCHP_FOR_ADMIN":
			return {
				...state,
				errorSProductsAdmin: []
			};

		case "FILTER_ORDEN_CLIENT":
			let ordenesDeCliente = state.ordenes;
			if (action.payload === "All") {
				return {
					...state,
					ordenesFilter: ordenesDeCliente,
					filterUserOrden: false
				};
			} else if (action.payload === "pending") {
				return {
					...state,
					ordenesFilter: ordenesDeCliente.filter(orden => orden.status === "pending"),
					filterUserOrden: true
				};
			} else if (action.payload === "Completed") {
				return {
					...state,
					ordenesFilter: ordenesDeCliente.filter(orden => orden.status === "Completed"),
					filterUserOrden: true
				};
			} else if (action.payload === "cancelado") {
				return {
					...state,
					ordenesFilter: ordenesDeCliente.filter(orden => orden.status === "cancelado"),
					filterUserOrden: true
				};
			}

			break;

		case "GET_ORDENES":
			return {
				...state,
				ordenes: action.payload,
				ordenesFilter: state.ordenes
			};

		case "FILTER_BY_CATEGORY":
			if (action.payload === "all") {
				return {
					...state,
					products: state.allProducts
				};
			} else {
				return {
					...state,
					products: state.allProducts.filter(
						c => c.category && c.category.includes(action.payload)
					)
				};
			}

		case "FILTER_BY_TYPE":
			if (state.products.length) {
				if (action.payload === "lactose") {
					return {
						...state,
						products: state.products.filter(p => p.lactose === true)
					};
				} else if (action.payload === "lactoseFree") {
					return {
						...state,
						products: state.products.filter(p => p.lactose === false)
					};
				} else if (action.payload === "alcohol") {
					return {
						...state,
						products: state.products.filter(p => p.alcohol === true)
					};
				} else if (action.payload === "alcoholFree") {
					return {
						...state,
						products: state.products.filter(p => p.alcohol === false)
					};
				} else if (action.payload === "gluten") {
					return {
						...state,
						products: state.products.filter(p => p.gluten === true)
					};
				} else if (action.payload === "glutenFree") {
					return {
						...state,
						products: state.products.filter(p => p.gluten === false)
					};
				}
			} else {
				if (action.payload === "lactose") {
					return {
						...state,
						products: state.allProducts.filter(p => p.lactose === true)
					};
				} else if (action.payload === "lactoseFree") {
					return {
						...state,
						products: state.allProducts.filter(p => p.lactose === false)
					};
				} else if (action.payload === "alcohol") {
					return {
						...state,
						products: state.allProducts.filter(p => p.alcohol === true)
					};
				} else if (action.payload === "alcoholFree") {
					return {
						...state,
						products: state.allProducts.filter(p => p.alcohol === false)
					};
				} else if (action.payload === "gluten") {
					return {
						...state,
						products: state.allProducts.filter(p => p.gluten === true)
					};
				} else if (action.payload === "glutenFree") {
					return {
						...state,
						products: state.allProducts.filter(p => p.gluten === false)
					};
				}
			}

		case "FILTER_BY_PREPARED":
			if (action.payload === "prepared") {
				return {
					...state,
					products: state.allProducts.filter(e => e.isPrepared === false)
				};
			} else if (action.payload === "consumption") {
				return {
					...state,
					products: state.allProducts.filter(e => e.isPrepared === true)
				};
			}

		case "ORDER_BY_PRICE":
			const orderPrice =
				action.payload === "desc"
					? [...state.products].sort(function (a, b) {
							return b.price - a.price;
					  })
					: [...state.products].sort(function (a, b) {
							return a.price - b.price;
					  });
			return {
				...state,
				products: orderPrice
			};

		case "PRODUCT_DETAILS":
			return {
				...state,
				productDetails: action.payload
			};
		case "CLEAR_DETAILS":
			return {
				...state,
				productDetails: {}
			};

		case "POST_NEW_PRODUCT":
			return {
				...state,
				responseCreateProduct: action.payload
			};

		case "CLEAR_RESPONSE_NEW_PRODUCT":
			return {
				...state,
				responseCreateProduct: []
			};

		case "GET_PRODUCTS_ID":
			return {
				...state,
				productsDataId: action.payload
			};
		case "CLEAR_DETAILS_PRODUCT_IS":
			return {
				...state,
				productsDataId: []
			};

		case "GET_CREATE_SHOPPING_CART":
			return {
				...state,
				cart: action.payload
			};
		case "DELETE_ITEM_SHOPPING_CART":
			return {
				...state,
				cart: action.payload
			};
		case "ADD_ITEM_SHOPPING_CART":
			return {
				...state,
				cart: action.payload
			};

		case "EMPTY_CART":
			return {
				...state,
				cart: []
			};
		case "DELETE_PRODUCT":
			return {
				...state
			};
		case "PUT_PRODUCTS":
			return {
				...state,
				resUpdatedProduct: action.payload
			};
		case "CLEAR_RES_PUT_PRODUCTS":
			return {
				...state,
				resUpdatedProduct: []
			};
		case "GET_ALL_USERS":
			return {
				...state,
				allUsers: action.payload,
				allUsersB: action.payload
			};
		case "GET_USERS_BY_NAME":
			if (action.payload.length > 0) {
				return {
					...state,
					allUsersB: action.payload
				};
			} else if (action.payload.errorMessage.length > 0) {
				return {
					...state,
					errorSearchUser: action.payload.errorMessage
				};
			}
		case "CLEAR_ERROR_SEARCH_USER":
			return {
				...state,
				errorSearchUser: []
			};
		case "FILTER_USERS_BY_ROLE":
			let filterUR =
				action.payload === "all"
					? state.allUsers
					: state.allUsers.filter(u => u.role && u.role.includes(action.payload));
			return {
				...state,
				allUsersB: filterUR
			};
		case "UPDATE_DISCOUNT_PRODUCT":
			return {
				...state,
				resUpdateDiscountP: action.payload
			};

		case "FILTER_BY_STATUS_DISCOUNT":
			if (action.payload === "all") {
				return {
					...state,
					products: state.allProducts
				};
			} else if (action.payload === "outDisc") {
				return {
					...state,
					products: state.allProducts.filter(e => e.discount === null || e.discount === 0)
				};
			} else if (action.payload === "withDisc") {
				return {
					...state,
					products: state.allProducts.filter(e => e.discount >= 0.1)
				};
			}

		case "FILTER_BY_STOCK":
			if (action.payload === "withStock") {
				return {
					...state,
					products: state.allProducts.filter(p => p.stock === true)
				};
			} else if (action.payload === "outStock") {
				return {
					...state,
					products: state.allProducts.filter(p => p.stock === false)
				};
			}
		case "CHECK_OUT":
			return {
				...state,
				checkOut: action.payload
			};
		case "POST_SEND_NEWSLETTER":
			return {
				...state,
				resSendNewsL: action.payload
			};
		case "CLEAR_ERROR_SEND_NL":
			return {
				...state,
				resSendNewsL: ""
			};

		case "PUT_UPDATE_NEWS":
			return {
				...state,
				resUpdateNews: action.payload
			};
		case "CLEAR_ERROR_UPDATE_NEWS":
			return {
				...state,
				resUpdateNews: ""
			};
		case "GET_REVIEWS":
			return {
				...state,
				reviews: action.payload
			};
		case "GET_PRODUCTS_WITH_DISCOUNT":
			return {
				...state,
				productsWithDiscounts: action.payload
			};

		case "GET_ALL_ORDERS":
			return {
				...state,
				ordenes: action.payload
			};
		case "GET_DETAILS_ORDER":
			return {
				...state,
				detailsOrder: action.payload
			};

		default:
			return state;
	}
}
