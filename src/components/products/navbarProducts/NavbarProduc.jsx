import React from "react";
import { useDispatch } from "react-redux";
import SearchP from "../search/SearchP";
import {
	filterByCategory,
	filterByType,
	filterByPrepared,
	orderByPrice
} from "../../../redux/action";
import { BiDrink } from "react-icons/bi";
import { GiMilkCarton } from "react-icons/gi";
import { GiWheat } from "react-icons/gi";
import "./navbarProducts.css";

const NavbarProduc = () => {
	const dispatch = useDispatch();

	const filterCategory = e => {
		dispatch(filterByCategory(e));
	};
	const filterType = e => {
		dispatch(filterByType(e));
	};
	const filterPrepared = e => {
		dispatch(filterByPrepared(e));
	};
	const orderPrice = e => {
		dispatch(orderByPrice(e.target.value));
	};

	return (
		<div className="navProduc">
			<SearchP />

			<div>
				<div className="nameTagsNavBar">
					<div className="titleTagsNavBar">
						<p>Without</p>
						<p>With</p>
					</div>
					<p className="tagsCNBC">
						<BiDrink className="falseBtnNB" onClick={() => filterType("alcoholFree")} />{" "}
						Alcohol{" "}
						<BiDrink className="trueBtnNB" onClick={() => filterType("alcohol")} />
					</p>
					<p className="tagsCNBC">
						<GiMilkCarton
							className="falseBtnNB"
							onClick={() => filterType("lactoseFree")}
						/>{" "}
						Lactose
						<GiMilkCarton className="trueBtnNB" onClick={() => filterType("lactose")} />
					</p>
					<p className="tagsCNBC">
						<GiWheat className="falseBtnNB" onClick={() => filterType("glutenFree")} />{" "}
						Gluten <GiWheat className="trueBtnNB" onClick={() => filterType("gluten")} />
					</p>
				</div>

				<div className="navProductCatagory">
					<p className="titlesNavbarP">Categories</p>
					<button className="btnProductCategory" onClick={() => filterCategory("all")}>
						All
					</button>
					<button className="btnProductCategory" onClick={() => filterCategory("coffee")}>
						Coffee
					</button>
					<button className="btnProductCategory" onClick={() => filterCategory("tea")}>
						Tea
					</button>
					<button className="btnProductCategory" onClick={() => filterCategory("other")}>
						Other
					</button>
					<button
						className="btnProductCategory"
						onClick={() => filterCategory("sweetBakery")}
					>
						Sweet Bakery
					</button>
					<button
						className="btnProductCategory"
						onClick={() => filterCategory("saltyBakery")}
					>
						Salty Bakery
					</button>
				</div>

				<select onChange={e => orderPrice(e)} className="selectNavProd">
					<option className="selectNavProdOption" hidden>
						Order by price
					</option>
					<option
						className="selectNavProdOption"
						disabled="disabled"
						default={true}
						value=""
					>
						Order by price
					</option>
					<option className="selectNavProdOption" value="asc">
						{" "}
						Lower price{" "}
					</option>
					<option className="selectNavProdOption" value="desc">
						{" "}
						Higher price{" "}
					</option>
				</select>

				<div className="navProductIsPrepared">
					<p className="titlesNavbarP">Status</p>
					<button
						className="btnProductIsPrepared"
						onClick={() => filterPrepared("prepared")}
					>
						To prepare
					</button>
					<button
						className="btnProductIsPrepared"
						onClick={() => filterPrepared("consumption")}
					>
						Ready to eat
					</button>
				</div>
			</div>
		</div>
	);
};

export default NavbarProduc;
