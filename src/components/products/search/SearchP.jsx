import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getProducts, getProductsName, clearError } from "../../../redux/action";
import "./seachP.css"

const SearchP = () => {

	const dispatch = useDispatch();
	const [name, setName] = useState("");

	const handlerChange = (e) => {
		e.preventDefault();
		setName(e.target.value);
		!e.target.value
			? dispatch(getProducts())
			: dispatch(getProductsName(e.target.value));
	}

	return (
		<div>
			<input
				className='searchProduct'
				type="search"
				value={name || ""}
				placeholder= "🔎 Start typing to search..."
				onChange={(e) => handlerChange(e)}
			/>
		</div>
	);
}

export default SearchP;
