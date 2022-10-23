import React, { useEffect }  from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../../navbar/navbar.css";
import LogOutAuth0 from "../../logIn/logOutButtonAuth0/LogOutAuth0";

import "./navClient.css";
import { useSelector } from "react-redux";



const NavBar = () => {
	const [menuUsuario, setMenuUsuario] = useState(false);

  const usuario = useSelector(state => state.user);

 

	const handlerMenuUsuario = () => {
		if (menuUsuario === false) {
			setMenuUsuario(true);
		} else {
			setMenuUsuario(false);

		}
	}


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

				<Link to="/shoppingCart">
					<button className="btnNBCU">Shopping cart</button>
				</Link>

				{/* <Link to="/admin">
					<button className="btnNBCU">Admin(temp)</button>
				</Link> */}
					<div className="menu-usuario">

						<img  onClick={handlerMenuUsuario} className="img-usuario" src={usuario.user.image} alt={usuario.user.name}/> 
						
						{ menuUsuario ? (
							<div className="menu-usuario-activo">

								<h4 className="menu-usuario-activo-p">{usuario.user.name} {usuario.user.surname}</h4>
								<p className="menu-usuario-activo-p">{usuario.user.role}</p>
								<hr/>
								<Link to="/client">
									<button className="btn-perfil"> Profile </button>
								</Link>
							  <LogOutAuth0/> 
								
							</div>

						) : null }
					</div>
			</div>

		</div>
	);
};

export default NavBar;
