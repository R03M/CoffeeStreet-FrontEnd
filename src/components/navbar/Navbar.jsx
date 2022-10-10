import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const NavBar = () => {
	return (
		<div className="contenedor-nav">
			<Link to="/">
				{/* Link a pagina inicial en el logo */}
				<div className="logo"></div>
			</Link>

			<div className="botones">
				<Link to="/home">
					<button className="btonesHome">New</button>
				</Link>
				{/* Link a pagina de productos */}
				<Link to="/menu">
					<button className="btonesHome">Menu</button>
				</Link>

				{/* Link a pagina para registrarse */}
				<Link to="/signUp">
					<button className="btonesHome">Sign Up</button>
				</Link>

				{/* Link a pagina para ingresar */}
				<Link to="/logIn">
					<button className="btonesHome">Log In</button>
				</Link>
			</div>
		</div>
	);
};

export default NavBar;
