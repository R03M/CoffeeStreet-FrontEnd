import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const NavBar = () => {
	return (
		<div className="navbarDivC">
			<Link to="/">
				<div className="logo"></div>
			</Link>

			<div className="btnNavbarDiv">
				<Link to="/home">
					<button className="btnNBCU">New</button>
				</Link>
				<Link to="/menu">
					<button className="btnNBCU">Menu</button>
				</Link>

				<Link to="/signUp">
					<button className="btnNBCU">Sign Up</button>
				</Link>

				<Link to="/logIn">
					<button className="btnNBCU">Log In</button>
				</Link>
				<Link to="/admin">
					<button className="btnNBCU">Admin(temp)</button>
				</Link>
			</div>
		</div>
	);
};

export default NavBar;
