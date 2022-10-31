import React from "react";
import "./rowUser.css";

const RowUser = ({ user, deleteU, changeRole, rows }) => {
	return (
		<tr key={user.id}>
			<th>{rows}</th>
			<th>{user.name}</th>
			<th>{user.surname}</th>
			<th>{user.role}</th>
			<th>
				<button
					onClick={() => changeRole("admin", user)}
					hidden={user.role === "admin"}
					className="btnCRoleUsersC"
				>
					Admin
				</button>
				<button
					onClick={() => changeRole("client", user)}
					hidden={user.role === "client"}
					className="btnCRoleUsersC"
				>
					Client
				</button>
				<button
					onClick={() => changeRole("employee", user)}
					hidden={user.role === "employee"}
					className="btnCRoleUsersC"
				>
					Employee
				</button>
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
