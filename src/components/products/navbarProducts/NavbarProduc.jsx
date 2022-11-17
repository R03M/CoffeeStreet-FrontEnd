import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchP from "../search/SearchP";
import {
	filterByCategory,
	filterByType,
	filterByPrepared,
	orderByPrice,
	getProducts
} from "../../../redux/action";
import { BiDrink } from "react-icons/bi";
import { GiMilkCarton } from "react-icons/gi";
import { GiWheat } from "react-icons/gi";
import "./navbarProducts.css";

const NavbarProduc = () => {
	const dispatch = useDispatch();
	const contProducts = useSelector(state => state.products);

	let isTLactose = contProducts.map(l => l.lactose);
	let isTGluten = contProducts.map(l => l.gluten);
	let isTAlcohol = contProducts.map(l => l.alcohol);

	let includesValue = value => {
		if (value.includes(true) && value.includes(false)) return "all";
		if (value.includes(true)) return "true";
		if (value.includes(false)) return "false";
	};

	const [category, setCategory] = useState({
		status: false,
		value: ""
	});
	const [type1, setType1] = useState({
		status: false,
		value: ""
	});
	const [type2, setType2] = useState({
		status: false,
		value: ""
	});
	const [type3, setType3] = useState({
		status: false,
		value: ""
	});
	const [prepared, setPrepared] = useState({
		status: false,
		value: ""
	});
	const [orderP, setOrderP] = useState({
		status: false,
		value: ""
	});

	const filterCategory = e => {
		dispatch(filterByCategory(e));
		setCategory({
			status: true,
			value: e
		});
		setType1(false);
		setType2(false);
		setType3(false);
		setOrderP(false);
		setPrepared(false);
	};

	const filterType1 = e => {
		if (includesValue(isTAlcohol) === "all") {
			dispatch(filterByType(e));
			setType1({
				status: true,
				value: e
			});
		}
		if (includesValue(isTAlcohol) === "true" && e === "alcohol") {
			dispatch(filterByType(e));
			setType1({
				status: true,
				value: e
			});
		}
		if (includesValue(isTAlcohol) === "false" && e === "alcoholFree") {
			dispatch(filterByType(e));
			setType1({
				status: true,
				value: e
			});
		}
	};
	const filterType2 = e => {
		if (includesValue(isTLactose) === "all") {
			dispatch(filterByType(e));
			setType2({
				status: true,
				value: e
			});
		}
		if (includesValue(isTLactose) === "true" && e === "lactose") {
			dispatch(filterByType(e));
			setType2({
				status: true,
				value: e
			});
		}
		if (includesValue(isTLactose) === "false" && e === "lactoseFree") {
			dispatch(filterByType(e));
			setType2({
				status: true,
				value: e
			});
		}
	};
	const filterType3 = e => {
		if (includesValue(isTGluten) === "all") {
			dispatch(filterByType(e));
			setType3({
				status: true,
				value: e
			});
		}
		if (includesValue(isTGluten) === "true" && e === "gluten") {
			dispatch(filterByType(e));
			setType3({
				status: true,
				value: e
			});
		}
		if (includesValue(isTGluten) === "false" && e === "glutenFree") {
			dispatch(filterByType(e));
			setType3({
				status: true,
				value: e
			});
		}
	};

	const filterPrepared = e => {
		dispatch(filterByPrepared(e));
		setPrepared({
			status: true,
			value: e
		});
		setCategory(false);
		setType1(false);
		setType2(false);
		setType3(false);
		setOrderP(false);
	};
	const orderPrice = e => {
		dispatch(orderByPrice(e));
		setOrderP({
			status: true,
			value: e
		});
	};

	function statusCategory() {
		if (category.status === true) {
			return <p>{category.value}</p>;
		}
	}
	function statusType1() {
		if (type1.status === true) {
			return <p>{type1.value}</p>;
		}
	}
	function statusType2() {
		if (type2.status === true) {
			return <p>{type2.value}</p>;
		}
	}
	function statusType3() {
		if (type3.status === true) {
			return <p>{type3.value}</p>;
		}
	}
	function statusPrepared() {
		if (prepared.status === true) {
			return <p>{prepared.value}</p>;
		}
	}
	function statusOrderP() {
		if (orderP.status === true) {
			return <p>{orderP.value}</p>;
		}
	}

	function clearFilters() {
		dispatch(getProducts());
		setCategory(false);
		setType1(false);
		setType2(false);
		setType3(false);
		setPrepared(false);
		setOrderP(false);
	}

	return (
		<div className="navProduc">
			<SearchP />
			<div className="statusProductsNPC1">
				<div>Products: {contProducts.length}</div>
			</div>
			<div className="statusProductsNPC2">
				<div> Active Filters:</div>
				<div className="statusProductsNPC3">
					{statusCategory()} {statusType1()} {statusType2()}
					{statusType3()}
					{statusPrepared()} {statusOrderP()}
				</div>
			</div>
			<button className="cleanFiltersNPC" onClick={() => clearFilters()}>
				Clean Filters
			</button>
			<div>
				<div className="nameTagsNavBar">
					<div className="titleTagsNavBar">
						<p>Without</p>
						<p>With</p>
					</div>
					<p className="tagsCNBC">
						<BiDrink
							className={
								includesValue(isTAlcohol) === "false" ||
								includesValue(isTAlcohol) === "all"
									? "falseBtnNB"
									: "noExitProduct"
							}
							onClick={() => filterType1("alcoholFree")}
						/>{" "}
						Alcohol{" "}
						<BiDrink
							className={
								includesValue(isTAlcohol) === "true" ||
								includesValue(isTAlcohol) === "all"
									? "trueBtnNB"
									: "noExitProduct"
							}
							onClick={() => filterType1("alcohol")}
						/>
					</p>
					<p className="tagsCNBC">
						<GiMilkCarton
							className={
								includesValue(isTLactose) === "false" ||
								includesValue(isTLactose) === "all"
									? "falseBtnNB"
									: "noExitProduct"
							}
							onClick={() => filterType2("lactoseFree")}
						/>{" "}
						Lactose
						<GiMilkCarton
							className={
								includesValue(isTLactose) === "true" ||
								includesValue(isTLactose) === "all"
									? "trueBtnNB"
									: "noExitProduct"
							}
							onClick={() => filterType2("lactose")}
						/>
					</p>
					<p className="tagsCNBC">
						<GiWheat
							className={
								includesValue(isTGluten) === "false" || includesValue(isTGluten) === "all"
									? "falseBtnNB"
									: "noExitProduct"
							}
							onClick={() => filterType3("glutenFree")}
						/>{" "}
						Gluten{" "}
						<GiWheat
							className={
								includesValue(isTGluten) === "true" ||
								includesValue(isTGluten) === "all"
									? "trueBtnNB"
									: "noExitProduct"
							}
							onClick={() => filterType3("gluten")}
						/>
					</p>
				</div>

				<div className="selectNavProd">
					<p>Order by price</p>
					<button onClick={() => orderPrice("asc")} className="btnProdOption">
						Lower price
					</button>
					<button onClick={() => orderPrice("desc")} className="btnProdOption">
						Higher price
					</button>
				</div>

				<div className="navProductCatagory">
					<p className="titlesNavbarP">Categories</p>
					<button className="btnProductCategory" onClick={() => filterCategory("coffee")}>
						Coffee ready to drink
					</button>

					<button
						className="btnProductIsPrepared"
						onClick={() => filterPrepared("prepared")}
					>
						Coffee to prepare
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
			</div>
		</div>
	);
};

export default NavbarProduc;
