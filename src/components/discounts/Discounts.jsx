import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardDiscount from "./cardDiscount/CardDiscount";
import NavbarProducts from "../products/navbarProducts/NavbarProduc";
import { clearError, getProducts, updateDiscountProduct } from "../../redux/action";
import "./discounts.css";
import ErrorSearch from "../errorSearch/ErrorSearch";

const Discounts = () => {
	const dispatch = useDispatch();
	const products = useSelector(state => state.products);
	const errorS = useSelector(state => state.errorSProducts);

	const changeDiscountP = (value, productId) => {
		dispatch(updateDiscountProduct(value, productId));
	};

	const removeDiscountP = (value, productId) => {
		dispatch(updateDiscountProduct(value, productId));
	};

	useEffect(() => {
		if (products.length === 0) {
			dispatch(getProducts());
		}
		dispatch(clearError());
	}, [dispatch, products]);

	const bodyDiscounts = () => {
		if (errorS === "There is no product with that name") {
			return <ErrorSearch />;
		} else {
			return (
				<div className="discountsCardsC">
					{products.map(product => {
						return (
							<CardDiscount
								product={product}
								changeDiscount={changeDiscountP}
								removeDiscount={removeDiscountP}
							/>
						);
					})}
				</div>
			);
		}
	};

	return (
		<div className="discountsDiC">
			<div className="navbarDiscountsC">
				<NavbarProducts />
				{bodyDiscounts()}
			</div>
		</div>
	);
};

export default Discounts;
