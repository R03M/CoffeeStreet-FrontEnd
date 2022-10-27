import React from "react";
import "./rowUser.css";

const RowUser = ({ user, deleteU, changeRole }) => {
	let rows = 1;

	return (
		<tr key={user.id}>
			<th>{rows++}</th>
			<th>{user.name}</th>
			<th>{user.surname}</th>
			<th>email</th>
			<th>
				<select onChange={(e) => changeRole(e, user)} className="selectRolesUsersC">
					<option hidden>{user.role}</option>
					<option disabled="disabled" default={true} value="">
						{user.role}
					</option>
					<option hidden={user.role === "admin"} value={"admin"}>
						admin
					</option>
					<option hidden={user.role === "client"} value={"client"}>
						client
					</option>
					<option hidden={user.role === "employee"} value={"employee"}>
						employee
					</option>
				</select>
			</th>
			<th>
				<button className="btnDeteleUsersC" onClick={() => deleteU(user)}>
					Delete
				</button>
			</th>
		</tr>
	);
};

export default RowUser;
