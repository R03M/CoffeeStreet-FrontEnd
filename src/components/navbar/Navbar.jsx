import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { BsFillCartFill } from "react-icons/bs";
import LogOutAuth0 from "../logIn/logOutButtonAuth0/LogOutAuth0";
import "./navbar.css";

const NavBar = () => {
	const statusCart = useSelector(state => state.cart);
	const user = useSelector(state => state.user.user);
	const [viewUser, setViewUser] = useState(false);
	console.log(statusCart.items.length);

	const handlerUser = () => {
		if (viewUser === false) {
			setViewUser(true);
		} else {
			setViewUser(false);
		}
	};

	return (
		<div className="navbarDivC">
			<Link to="/">
				<div className="logo"></div>
			</Link>

			<div className="btnNavbarDiv">
				<Link to="/home">
					<button className="btnNBCU">Home</button>
				</Link>
				<Link to="/menu">
					<button className="btnNBCU">Menu</button>
				</Link>

				<Link to={"/cart"}>
					<button className="btnNBCU">
						<BsFillCartFill /> {statusCart.items.length}
					</button>
				</Link>
				{user ? (
					<div className="menuUserNC">
						<img
							onClick={handlerUser}
							className="imgUserNC"
							src={user.image}
							alt={user.name}
						/>
						{viewUser ? (
							<div className="menuUserOn">
								<p className="">
									{user.name} {user.surname}
								</p>
								<p className="">{user.role}</p>
								<hr />
								<Link to={`/${user.role}`}>
									<button className="btnUserNC"> My panel </button>
								</Link>

								<LogOutAuth0 />
							</div>
						) : null}
					</div>
				) : (
					<Link to="/signIn">
						<button className="btnNBCU">Sign in</button>
					</Link>
				)}
			</div>
		</div>
	);
};

export default NavBar;
