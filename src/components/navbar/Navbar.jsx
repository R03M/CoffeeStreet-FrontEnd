import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { BsFillCartFill } from "react-icons/bs";
import "./navbar.css";

const NavBar = () => {
	const statusCart = useSelector(state => state.cart);
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

				<Link to="/logIn">
					<button className="btnNBCU">Log In</button>
				</Link>

				<Link to={"/cart"}>
					<button className="btnNBCU">
						<BsFillCartFill /> {statusCart.length}
					</button>
				</Link>
			</div>
		</div>
	);
};

export default NavBar;
