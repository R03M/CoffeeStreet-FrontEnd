import React from "react";
import { useDispatch } from "react-redux";
import SearchP from "../search/SearchP";
import {
	filterByCategory,
	filterByType,
	filterByPrepared,
	orderByPrice
} from "../../../redux/action";
import "./navbarProducts.css";

const NavbarProduc = () => {
	const dispatch = useDispatch();

	const filterCategory = e => {
		dispatch(filterByCategory(e.target.value));
	};
	const filterType = e => {
		dispatch(filterByType(e.target.value));
	};
	const filterPrepared = e => {
		dispatch(filterByPrepared(e.target.value));
	};
	const orderPrice = e => {
		dispatch(orderByPrice(e.target.value));
	};

	return (
		<div className="navProduc">
			<SearchP />

			<div>
				<select
					name="filterCategory"
					onChange={e => filterCategory(e)}
					className="selectNavProd"
				>
					<option hidden>Filter by Category</option>
					<option disabled="disabled" default={true} value="init">
						Filter by Category
					</option>
					<option value="all">All</option>
					<option value="coffee">Coffee</option>
					<option value="tea">Tea</option>
					<option value="sweetBakery">Sweet Bakery</option>
					<option value="saltyBakery">Salty Bakery</option>
					<option value="other">Other</option>
				</select>

				<select onChange={e => filterType(e)} className="selectNavProd">
					<option hidden>Filter by Type</option>
					<option disabled="disabled" default={true} value="">
						Filter by Type
					</option>
					<option value="all">All</option>
					<option value="lactose">Lactose</option>
					<option value="lactoseFree">Lactose-free</option>
					<option value="alcohol">Alcohol</option>
					<option value="alcoholFree">Alcohol-free</option>
					<option value="gluten">Gluten</option>
					<option value="glutenFree">Gluten-free</option>
				</select>

				<select onChange={e => filterPrepared(e)} className="selectNavProd">
					<option hidden>Filter by Status</option>
					<option disabled="disabled" default={true} value="">
						Filter by Status
					</option>
					<option value="all">All</option>
					<option value="prepared">To prepare</option>
					<option value="consumption">Ready to eat</option>
				</select>

				<select onChange={e => orderPrice(e)} className="selectNavProd">
					<option hidden>Order by price</option>
					<option disabled="disabled" default={true} value="">
						Order by price
					</option>
					<option value="asc"> Lower price </option>
					<option value="desc"> Higher price </option>
				</select>
			</div>
		</div>
	);
};

export default NavbarProduc;
