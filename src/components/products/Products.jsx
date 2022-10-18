import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearError, getProducts, clearDetails } from "../../redux/action";
import NavBar from "../navbar/Navbar";
import NavBarClient from "../client/navClient/NavClient";
import CardP from "./card/CardP";
import NavbarProduc from "./navbarProducts/NavbarProduc";
import Pagination from "../pagination/Pagination";
import Loading from "../loading/Loading";
import ErrorSearch from "../errorSearch/ErrorSearch";
import { useAuth0 } from "@auth0/auth0-react";
import "./products.css";

const Products = () => {
	const dispatch = useDispatch();
	const allProducts = useSelector(state => state.products);
	const errorMessage = useSelector(state => state.errorSProducts);
	const  { isAuthenticated } = useAuth0();

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
		setCurrentPage(1);
		dispatch(clearError());
		dispatch(clearDetails());
	}, [dispatch, allProducts]);

	function pagACards() {
		if (errorMessage === "There is no product with that name") {
			return (
				<div className="productsDivErrorPC">
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
						</div>
							<Pagination currentPage={currentPage} setPage={setCurrentPage} max={max} />
					</div>
				);
			} else {
				<Loading />;
			}
		}
	}

	return (
		<div className="productsDiv">
		{ isAuthenticated ? (
				<NavBarClient />
		  ) : <NavBar />}
			<div className="navbarProduc">
				<NavbarProduc />
				{pagACards()}
			</div>
		</div>
	);
};

export default Products;
