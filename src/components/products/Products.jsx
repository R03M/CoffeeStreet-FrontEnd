import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/action";
import NavBar from "../navbar/Navbar";
import CardP from "./card/CardP";
import NavbarProduc from "./navbarProducts/NavbarProduc";
import Pagination from "../pagination/Pagination";
import "./products.css";

const Products = () => {
	const dispatch = useDispatch();
	const allProducts = useSelector(state => state.products);

	const [currentPage, setCurrentPage] = useState(1);
	const [productsPerPage, setProductsPerPage] = useState(9);
	const max = Math.ceil(allProducts.length / productsPerPage);
	const dataEnd = allProducts.slice(
		(currentPage - 1) * productsPerPage,
		(currentPage - 1) * productsPerPage + productsPerPage
	);
	useEffect(() => {
		if (allProducts.length === 0) {
			dispatch(getProducts());
		}
	}, [dispatch]);

	return (
		<div className="productsDiv">
			<NavBar />
			<div className="navbarProduc">
				<NavbarProduc />
			</div>
			{allProducts.length ? (
				<Pagination
					currentPage={currentPage}
					setPage={setCurrentPage}
					max={max}
				/>
			) : (
				""
			)}

			<div className="cardsProd">
				{allProducts.length
					? dataEnd.map(data => {
							return <CardP product={data} />;
					  })
					: "LOADING...."}
			</div>
		</div>
	);
};

export default Products;
