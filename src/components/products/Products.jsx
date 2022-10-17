import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearError, getProducts } from "../../redux/action";
import NavBar from "../navbar/Navbar";
import CardP from "./card/CardP";
import NavbarProduc from "./navbarProducts/NavbarProduc";
import Pagination from "../pagination/Pagination";
import Loading from "../loading/Loading";
import ErrorSearch from "../errorSearch/ErrorSearch";
import "./products.css";

const Products = () => {
	const dispatch = useDispatch();
	const allProducts = useSelector(state => state.products);
	const errorMessage = useSelector(state => state.errorSProducts);

	const [currentPage, setCurrentPage] = useState(1);
	const [productsPerPage, setProductsPerPage] = useState(9);
	const max = Math.ceil(allProducts.length / productsPerPage);
	const dataEnd = allProducts.length
		? allProducts.slice(
				(currentPage - 1) * productsPerPage,
				(currentPage - 1) * productsPerPage + productsPerPage
		  )
		: null;

	useEffect(() => {
		if (allProducts.length === 0) {
			dispatch(getProducts());
		}
		dispatch(clearError())
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
					<div>

						<div className="cardsProd">
							{dataEnd.map(data => {
								return <CardP key={data.id} product={data} />;
							})}
						<Pagination currentPage={currentPage} setPage={setCurrentPage} max={max} />
						</div>
					</div>
				);
			} else {
				<Loading />;
			}
		}
	}

	return (
		<div className="productsDiv">
			<NavBar />
			<div className="navbarProduc">
				<NavbarProduc />
			</div>
			{pagACards()}
		</div>
	);
};

export default Products;
