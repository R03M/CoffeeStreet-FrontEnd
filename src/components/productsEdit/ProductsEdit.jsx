import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	clearError,
	getProducts,
	clearDetails,
	filterByStock,
	deleteProduct,
	changeStatus
} from "../../redux/action";
import CardPe from "./cardPE/CardPe";
import Loading from "../loading/Loading";
import NavbarPE from "./navbarPe/NavbarPE";
import ErrorSearch from "../errorSearch/ErrorSearch";
import swal from "sweetalert";
import "./productsEdit.css";

const ProductsEdit = ({ editCPe }) => {
	const dispatch = useDispatch();
	const allProducts = useSelector(state => state.products);
	const errorMessage = useSelector(state => state.errorSProducts);
	const [activeS, setActiveS] = useState("all");

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
							return (
								<CardPe
									key={data.id}
									product={data}
									editC={editCPe}
									handlerChangeStock={handlerChangeStock}
									handlerDelete={handlerDelete}
								/>
							);
						})}
					</div>
				);
			} else {
				<Loading />;
			}
		}
	}

	const handlerStock = e => {
		setActiveS(e);
		dispatch(filterByStock(e));
	};

	const handlerChangeStock = product => {
		let stockCurret = product.stock;
		let stockName = stockCurret ? "with stock" : "out of stock";
		swal({
			text: `Are you sure you want to change from ${stockName} to ${
				!stockCurret ? "with stock" : "out of stock"
			}?`,
			buttons: ["cancel", "confirm"],
			dangerMode: true,
			closeOnClickOutside: false,
			icon: "warning"
		}).then(value => {
			if (value) {
				dispatch(changeStatus(!product.stock, product.id));
				setTimeout(() => {
					dispatch(getProducts());
				}, 500);
				swal("Updated", {
					button: false,
					timer: 1500,
					icon: "success"
				});
				setActiveS("all");
			} else {
				swal("Operation cancelled", {
					button: false,
					timer: 1500,
					icon: "error"
				});
			}
		});
	};

	function handlerDelete(product) {
		swal({
			text: `Are you sure to delete the product ${product.name}`,
			buttons: ["cancel", "confirm"],
			dangerMode: true,
			closeOnClickOutside: false,
			icon: "warning"
		}).then(value => {
			if (value) {
				dispatch(deleteProduct(product.id));
				swal("Removed", {
					button: false,
					timer: 1500,
					icon: "success"
				});
				setTimeout(() => {
					dispatch(getProducts());
				}, 500);
				setActiveS("all");
			} else {
				swal("Operation cancelled", {
					button: false,
					timer: 1500,
					icon: "error"
				});
			}
		});
	}

	return (
		<div className="productsEditdiv">
			<NavbarPE activeS={activeS} handlerStock={handlerStock} />
			{pagACards()}
		</div>
	);
};

export default ProductsEdit;
