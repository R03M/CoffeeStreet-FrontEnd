import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchP from "../../products/search/SearchP";
import { filterByDiscount } from "../../../redux/action";
import "./navbarDisc.css";

const NavbarDisc = () => {
	const dispatch = useDispatch();
	const lengthProducts = useSelector(state => state.products);
	const [active, setActive] = useState("all");

	const handlerDiscount = v => {
		dispatch(filterByDiscount(v));
		setActive(v);
	};

	return (
		<div className="navbarDiscC">
			<p className="textNavbarDiscountC">Products ➡ {lengthProducts.length}</p>
			<SearchP className="searchPDiscC" />
			<button
				className={active === "all" ? "btnSPDiscC" : "btnSPDiscCFalse"}
				onClick={() => handlerDiscount("all")}
			>
				All
			</button>
			<button
				className={active === "withDisc" ? "btnSPDiscC" : "btnSPDiscCFalse"}
				onClick={() => handlerDiscount("withDisc")}
			>
				With discounts
			</button>
			<button
				className={active === "outDisc" ? "btnSPDiscC" : "btnSPDiscCFalse"}
				onClick={() => handlerDiscount("outDisc")}
			>
				Out discounts
			</button>
		</div>
	);
};

export default NavbarDisc;
