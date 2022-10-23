import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearError, getProducts, clearDetails } from "../../redux/action";
import CardPe from "./cardPE/CardPe";
import Loading from "../loading/Loading";
import NavbarProduc from "../products/navbarProducts/NavbarProduc";
import ErrorSearch from "../errorSearch/ErrorSearch";
import "./productsEdit.css";

const ProductsEdit = ({editCPe}) => {
	const dispatch = useDispatch();
	const allProducts = useSelector(state => state.products);
	const errorMessage = useSelector(state => state.errorSProducts);

	useEffect(() => {
		if (allProducts.length === 0) {
			dispatch(getProducts());
		}
		dispatch(clearError());
		dispatch(clearDetails());
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
							return <CardPe key={data.id} product={data} editC={editCPe}/>;
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
			<div className="navBarACardsAdminC">
				<div className="navBarProductsEdit">
					<NavbarProduc />
				</div>
				{pagACards()}
			</div>
		</div>
	);
};

export default ProductsEdit;
