import React from "react";
import { useDispatch } from "react-redux";
import SearchP from "../search/SearchP";
import {
	filterByCategory,
	filterByType,
	orderByName,
	orderByPrice
} from "../../../redux/action";
import "./navbarProducts.css";

const NavbarProduc = () => {
	const dispatch = useDispatch();

	const filterCategory = e => {
		e.preventDefault();
		dispatch(filterByCategory(e.target.value));
	};
	const filterType = e => {
		e.preventDefault();
		dispatch(filterByType(e.target.value));
	};
	const orderName = e => {
		e.preventDefault();
		dispatch(orderByName(e.target.value));
	};
	const orderPrice = e => {
		e.preventDefault();
		dispatch(orderByPrice(e.target.value));
	};

	return (
		<div className="navProduc">
			<SearchP />

			<div>
				<select onClick={e => filterCategory(e)} className="selectNavProd">
					<option hidden>Filter by Category</option>
					<option disabled="disabled" default={true} value="">
						Filter by Category
					</option>
					<option value="all">All</option>
					<option value="Coffee">Coffee</option>
					<option value="Tea">Tea</option>
					<option value="Sweet Bakery">Sweet Bakery</option>
					<option value="Snacks">Snacks</option>
					<option value="Other">Other</option>
				</select>

				<select onClick={e => filterType(e)} className="selectNavProd">
					<option hidden>Filter by Type</option>
					<option disabled="disabled" default={true} value="">
						Filter by Type
					</option>
					<option value="all">All</option>
					<option value="Lactose">Lactose</option>
					<option value="Lactose-free">Lactose-free</option>
					<option value="Alcohol">Alcohol</option>
					<option value="Alcohol-free">Alcohol-free</option>
					<option value="Gluten">Gluten</option>
					<option value="Gluten-free">Gluten-free</option>
				</select>

				<select onClick={e => orderName(e)} className="selectNavProd">
					<option hidden>Order by name</option>
					<option disabled="disabled" default={true} value="">
						Order by name
					</option>
					<option value="asc"> Ascending (A-Z) </option>
					<option value="desc"> Descending (Z-A) </option>
				</select>

				<select onClick={e => orderPrice(e)} className="selectNavProd">
					<option hidden>Order by price</option>
					<option disabled="disabled" default={true} value="">
						Order by price
					</option>
					<option value="asc"> Ascending (1-9) </option>
					<option value="desc"> Descending (9-1) </option>
				</select>
			</div>
		</div>
	);
};

export default NavbarProduc;
