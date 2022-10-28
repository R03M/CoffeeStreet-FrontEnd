import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByCategory, filterByStock } from "../../../redux/action";
import SearchP from "../../products/search/SearchP";
import "./navbarPE.css";

const NavbarPE = () => {
	const dispatch = useDispatch();
	const lengthProducts = useSelector(state => state.products);
	const [activeS, setActiveS] = useState("all");

	const handlerCategory = e => {
		setActiveS(e);
		dispatch(filterByCategory(e));
	};

	const handlerStock = e => {
		setActiveS(e);
		dispatch(filterByStock(e));
	};

	return (
		<div className="navbarProductsEdit">
			<div className="divSAPCNPC">
				<p className="textNavbarProductsEditC">Products ➡ {lengthProducts.length}</p>
				<SearchP />
				<button
					onClick={() => handlerCategory("all")}
					className={
						activeS === "all" ? "btnsNavbarProductsEditC" : "btnsNavbarProductsEditCFalse"
					}
					value="all"
				>
					All Products
				</button>
				<p className="textNavbarProductsEditC">Filter by ➡</p>
				<button
					onClick={() => handlerStock("withStock")}
					className={
						activeS === "withStock"
							? "btnsNavbarProductsEditC"
							: "btnsNavbarProductsEditCFalse"
					}
					value="withStock"
				>
					With Stock
				</button>
				<button
					onClick={() => handlerStock("outStock")}
					className={
						activeS === "outStock"
							? "btnsNavbarProductsEditC"
							: "btnsNavbarProductsEditCFalse"
					}
					value="outStock"
				>
					Out Stock
				</button>
			</div>
		</div>
	);
};
export default NavbarPE;
