import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/action";
import NavBar from "../navbar/Navbar";
import CardP from "./card/CardP";
import NavbarProduc from "./navbarProducts/NavbarProduc";
import "./products.css";


const Products = () => {
	const dispatch = useDispatch();
	const allProducts = useSelector((state) => state.products)


	useEffect(() => {
		if(allProducts.length === 0){
			dispatch(getProducts());
		}
	}, [dispatch]);


	return (
		<div className="productsDiv">
			<NavBar/>
			<div className="navbarProduc">
				<NavbarProduc />
			</div>

			<div className="cardsProd">
				{allProducts.length
					? allProducts.map(e => {
							return <CardP product={e} />;
					  })
					: "LOADING...."}
			</div>
		</div>
	);
};

export default Products;
