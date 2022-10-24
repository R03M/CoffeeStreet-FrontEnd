// import MyFavourites from "../components/client/myFavourites/MyFavourites";

const localRefreshToken = JSON.parse(localStorage.getItem("refreshToken"));
const localAccessToken = JSON.parse(localStorage.getItem("accessToken"));

const initialState = {
	allProducts: [],
	products: [],
	errorSProducts: [],
	productDetails: {},
	accessToken: localAccessToken || "",
	refreshToken: localRefreshToken || "",
	checkEmail: {},
	newlyCreated: false,
	user: {},
	responseCreateProduct: [],
	productsDataId: {},
	cart: [],
	quantity: 0,
	order: [],
	myFavourites: []
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

		case "FILTER_BY_CATEGORY":
			if (state.products.length) {
				return {
					...state,
					products: state.products.filter(
						c => c.category && c.category.includes(action.payload)
					)
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

		case "POST_SHOPPING_CART":
			return {
				...state,
				cart: action.payload
			};
		case "GET_SHOPPING_CART":
			return {
				...state,
				cart: action.payload
			};
		case "DELETE_PRODUCT_CART":
			return {
				...state,
				cart: action.payload
			};
		case "PUT_SHOPPING_CART":
			return {
				...state,
				cart: action.payload
			};

		case "ADD_PRODUCT_TO_CART":
			let product = state.products.find(p => p.id === action.payload.id);
			let productInCart = state.cart.find(p => p.id === action.payload.id);
			if (productInCart) {
				return {
					...state,
					cart: state.cart.map(p =>
						p.id === productInCart.id
							? { ...productInCart, quantity: productInCart.quantity + 1 }
							: p
					)
				};
			} else {
				return {
					...state,
					cart: [...state.cart, { ...product, quantity: 1 }]
				};
			}
		case "REMOVE_PRODUCT_FROM_CART":
			return {
				...state,
				cart: state.cart.filter(p => p.id !== action.payload)
			};
		case "REMOVE_ONE_PRODUCT_FROM_CART":
			let productCart = state.cart.find(p => p.id === action.payload.id);
			if (productCart.quantity > 1) {
				return {
					...state,
					cart: state.cart.map(p =>
						p.id === productCart.id
							? { ...productCart, quantity: productCart.quantity - 1 }
							: p
					)
				};
			} else {
				return {
					...state,
					cart: state.cart.filter(p => p.id !== action.payload.id)
				};
			}
		case "CLEAR_CART":
			return {
				...state,
				cart: []
			};

		case "DELETE_PRODUCT":
			return {
				...state
			};

		default:
			return state;
	}
}
