import React from "react";
import SearchUsers from "../searchUsers/SearchUsers";
import "./navbarUsers.css";

const NavbarUsers = ({filterRoleCD, current}) => {

	const filterRole = e => {
		filterRoleCD(e)
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
