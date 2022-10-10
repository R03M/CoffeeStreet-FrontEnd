const initialState = {
	allProducts: [],
	products: [],
	errorSProducts: []
};

export default function rootReducer(state = initialState, action) {
	switch (action.payload) {
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
			const filterType =
				action.payload === "all"
					? state.allProducts
					: state.allProducts.filter(c => c.type && c.type.includes(action.payload));
			return {
				...state,
				products: filterType
			};

		case "ORDER_BY_NAME":
			const orderName =
				action.payload === "desc"
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

		default:
			return state;
	}
}
