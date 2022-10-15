import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearError, getProducts } from "../../redux/action";
import CardPe from "./cardPE/CardPe";
import Loading from "../loading/Loading";
import NavbarProduc from "../products/navbarProducts/NavbarProduc";
import ErrorSearch from "../products/errorSearch/ErrorSearch";
import "./productsEdit.css";

const ProductsEdit = () => {
	const dispatch = useDispatch();
	const allProducts = useSelector(state => state.products);
	const errorMessage = useSelector(state => state.errorSProducts);

	useEffect(() => {
		if (allProducts.length === 0) {
			dispatch(getProducts());
		}
		dispatch(clearError());
	}, [dispatch, allProducts]);


	function pagACards() {
		if (errorMessage === "There is no product with that name") {
			return (
				<div>
					<ErrorSearch />
				</div>
			);
		} else {
			if (allProducts.length) {
				return (

						<div className="cardsEditPe">
							{allProducts.map(data => {
								return <CardPe key={data.id} product={data} />;
							})}
						</div>
				);
			} else {
				<Loading />;
			}
		}
	}

	return (
		<div className="productsEditdiv">
				<NavbarProduc />
			{pagACards()}
		</div>
	);
};

export default ProductsEdit;
