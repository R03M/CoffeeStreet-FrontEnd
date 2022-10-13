const initialState = {
	allProducts: [],
	products: [],
	errorSProducts: [],
	productDetails: {}
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
			if (action.payload === "Non-exitent") {
				return {
					...state,
					errorSProducts: action.payload
				};
			} else {
				return {
					...state,
					products: action.payload
				};
			}

		case "CLEAR_ERROR_SEARCHP":
			return {
				...state,
				errorSProducts: []
			};

		case "FILTER_BY_CATEGORY":
			const filterCategory =
				action.payload === "all"
					? state.allProducts
					: state.allProducts.filter(
							c => c.category && c.category.includes(action.payload)
					  );
			return {
				...state,
				products: filterCategory
			};

		case "FILTER_BY_TYPE":
			if (action.payload === "all") {
				return {
					...state,
					products: state.allProducts
				};
			} else if (action.payload === "lactose") {
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

		case "ORDER_BY_NAME":
			const orderName =
				action.payload === "asc"
					? [...state.products].sort(function (a, b) {
							if (a.name.toLowerCase() > b.name.toLowerCase()) {
								return 1;
							}
							if (b.name.toLowerCase() > a.name.toLowerCase()) {
								return -1;
							}
							return 0;
					  })
					: [...state.products].sort(function (a, b) {
							if (a.name.toLowerCase() > b.name.toLowerCase()) {
								return -1;
							}
							if (b.name.toLowerCase() > a.name.toLowerCase()) {
								return 1;
							}
							return 0;
					  });
			return {
				...state,
				products: orderName
			};

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
		case "PRODUCT_DETAILS"	:
			return {
				...state,
				productDetails: action.payload
			}


		default:
			return state;
	}
}
