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

const NavbarProduc = ({currentPage}) => {
	console.log('currentPage', currentPage)
	const dispatch = useDispatch();
	const contProducts = useSelector(state => state.products);

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
	};

	const filterType1 = e => {
		dispatch(filterByType(e));
		setType1({
			status: true,
			value: e
		});
	};
	const filterType2 = e => {
		dispatch(filterByType(e));
		setType2({
			status: true,
			value: e
		});
	};
	const filterType3 = e => {
		dispatch(filterByType(e));
		setType3({
			status: true,
			value: e
		});
	};

	const filterPrepared = e => {
		dispatch(filterByPrepared(e));
		setPrepared({
			status: true,
			value: e
		});
	};
	const orderPrice = e => {
		dispatch(orderByPrice(e.target.value));
		setOrderP({
			status: true,
			value: e.target.value
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
						<BiDrink className="falseBtnNB" onClick={() => filterType1("alcoholFree")} />{" "}
						Alcohol{" "}
						<BiDrink className="trueBtnNB" onClick={() => filterType1("alcohol")} />
					</p>
					<p className="tagsCNBC">
						<GiMilkCarton
							className="falseBtnNB"
							onClick={() => filterType2("lactoseFree")}
						/>{" "}
						Lactose
						<GiMilkCarton className="trueBtnNB" onClick={() => filterType2("lactose")} />
					</p>
					<p className="tagsCNBC">
						<GiWheat className="falseBtnNB" onClick={() => filterType3("glutenFree")} />{" "}
						Gluten <GiWheat className="trueBtnNB" onClick={() => filterType3("gluten")} />
					</p>
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

				<div className="navProductCatagory">
					<p className="titlesNavbarP">Categories</p>
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
