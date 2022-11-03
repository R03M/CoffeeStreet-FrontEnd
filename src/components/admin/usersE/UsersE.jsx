import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import {
	clearErrorSUser,
	getAllUsers,
	changeRoleUser,
	filterUsersByRole,
	deleteUserIdAdmin
} from "../../../redux/action";
import NavbarUsers from "./navbarUsers/NavbarUsers";
import RowUser from "./rows/RowUser";
import "./usersE.css";

const UsersE = () => {
	const dispatch = useDispatch();
	const currentUsers = useSelector(state => state.allUsersB);
	const errorSearch = useSelector(state => state.errorSearchUser);
	const [current, setCurrent] = useState("all");

	let rows = 1;

	useEffect(() => {
		if (currentUsers.length === 0) {
			dispatch(getAllUsers());
			setState();
		}
		dispatch(clearErrorSUser());
	}, [dispatch]);

	const filterRoleCD = e => {
		dispatch(filterUsersByRole(e));
		setCurrent(e);
	};

	const setState = () => {
		setCurrent("all");
	};

	const deleteUser = e => {
		swal({
			text: `Are you sure you want to remove the ${e.role} ${e.name} ${e.surname}?`,
			buttons: ["cancel", "confirm"],
			dangerMode: true,
			closeOnClickOutside: false,
			icon: "warning"
		}).then(value => {
			if (value) {
				dispatch(deleteUserIdAdmin(e.auth.email));
				swal("Removed", {
					button: false,
					timer: 1000,
					icon: "success"
				});
				setTimeout(() => {
					dispatch(getAllUsers());
				}, 500);
			} else {
				swal("Operation cancelled", {
					button: false,
					timer: 1000,
					icon: "success"
				});
			}
		});
	};

	const changeRole = (e, u) => {
		if (e !== e.role) {
			swal({
				text: `${u.name} ${u.surname} role will be changed from ${u.role} to ${e}?`,
				buttons: ["cancel", "confirm"],
				dangerMode: true,
				closeOnClickOutside: false,
				icon: "warning"
			}).then(value => {
				if (value) {
					dispatch(changeRoleUser(u.id, e));
					swal("Changed", {
						button: false,
						timer: 1000,
						icon: "success"
					});
					setTimeout(() => {
						dispatch(getAllUsers());
					}, 500);
					setState()
				} else {
					swal("Operation cancelled", {
						button: false,
						timer: 1000,
						icon: "success"
					});
				}
			});
		}
	};

	const tableUsers = () => {
		if (errorSearch.length > 0) {
			return <div>{errorSearch}</div>;
		} else {
			return (
				<table className="tableUserL">
					<thead className="theadUserL">
						<tr>
							<th>row</th>
							<th>name</th>
							<th>surname</th>
							<th>email</th>
							<th>role</th>
							<th>switch to</th>
							<th>account</th>
						</tr>
					</thead>
					<tbody className="tbodyUsersC">
						{currentUsers.map(user => {
							if (user.state !== "inactive") {
								return (
									<RowUser
										key={user.id}
										user={user}
										deleteU={deleteUser}
										changeRole={changeRole}
										rows={rows++}
									/>
								);
							}
						})}
					</tbody>
				</table>
			);
		}
	};

	return (
		<div className="userEDivC">
			<NavbarUsers filterRoleCD={filterRoleCD} current={current} />
			{currentUsers.length ? <>{tableUsers()}</> : "Users not found"}
		</div>
	);
};

export default UsersE;
