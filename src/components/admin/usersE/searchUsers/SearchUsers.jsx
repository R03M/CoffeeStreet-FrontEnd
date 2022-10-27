import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getAllUsers, getUsersByName } from "../../../../redux/action";
import "./searchUsers.css";

const SearchUsers = () => {
	const dispatch = useDispatch();
	const [name, setName] = useState("");

	const handlerChange = e => {
		e.preventDefault();
		setName(e.target.value);
		!e.target.value ? dispatch(getAllUsers()) : dispatch(getUsersByName(e.target.value));
	};
	return (
		<input
			className="searchUsers"
			type="search"
			value={name || ""}
			placeholder="search by name user..."
			onChange={e => handlerChange(e)}
		/>
	);
};

export default SearchUsers;
