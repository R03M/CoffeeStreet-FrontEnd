import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterUsersByRole } from "../../../../redux/action";
import SearchUsers from "../searchUsers/SearchUsers";
import "./navbarUsers.css";

const NavbarUsers = () => {
	const dispatch = useDispatch();
	const [current, setCurrent] = useState("all");

	const filterRole = e => {
		dispatch(filterUsersByRole(e));
		setCurrent(e);
	};

	return (
		<div className="navbarUsersC">
			<SearchUsers />
			<div className="titleFiltersRUC">Filter by Role ➡</div>
			<button
				onClick={() => filterRole("all")}
				className={current === "all" ? "btnCurrentUsers" : "btnOUsers"}
			>
				All
			</button>
			<button
				onClick={() => filterRole("admin")}
				className={current === "admin" ? "btnCurrentUsers" : "btnOUsers"}
			>
				Admin
			</button>
			<button
				onClick={() => filterRole("employee")}
				className={current === "employee" ? "btnCurrentUsers" : "btnOUsers"}
			>
				Employee
			</button>
			<button
				onClick={() => filterRole("client")}
				className={current === "client" ? "btnCurrentUsers" : "btnOUsers"}
			>
				Client
			</button>
		</div>
	);
};

export default NavbarUsers;
