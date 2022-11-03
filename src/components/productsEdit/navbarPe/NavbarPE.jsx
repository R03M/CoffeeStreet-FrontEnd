import React  from "react";
import { useSelector } from "react-redux";
import SearchP from "../../products/search/SearchP";
import "./navbarPE.css";

const NavbarPE = ({ activeS, handlerStock }) => {
	const lengthProducts = useSelector(state => state.products);

	return (
		<div className="navbarProductsEdit">
			<div className="divSAPCNPC">
				<p className="textNavbarProductsEditC">Products ➡ {lengthProducts.length}</p>
				<SearchP />
				<p className="textNavbarProductsEditC">Filter by ➡</p>
				<button
					onClick={() => handlerStock("all")}
					className={
						activeS === "all" ? "btnsNavbarProductsEditC" : "btnsNavbarProductsEditCFalse"
					}
					value="all"
				>
					All
				</button>
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
