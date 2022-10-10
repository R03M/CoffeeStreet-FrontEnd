import React, { useEffect, useState } from "react";
import CardP from "./card/CardP";
import NavbarProduc from "./navbarProducts/NavbarProduc";

import "./products.css";
const apiURL = `https://api.sampleapis.com/coffee/hot`;

const Products = () => {
	useEffect(() => {
		fetch(apiURL)
			.then(res => res.json())
			.then(info => {
				setProducts(info);
			});
	}, []);

	const [products, setProducts] = useState({});

	return (
		<div className="productsDiv">
			<div className="navbarProduc">
				<NavbarProduc />
			</div>

			<div className="cardsProd">
				{products.length
					? products.map(e => {
							return <CardP product={e} />;
					  })
					: "LOADING...."}
			</div>
		</div>
	);
};

export default Products;
