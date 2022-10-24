import React, { useEffect }  from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../../navbar/navbar.css";
import LogOutAuth0 from "../../logIn/logOutButtonAuth0/LogOutAuth0";
import { BsFillCartFill } from "react-icons/bs";

import "./navClient.css";
import { useSelector } from "react-redux";



const NavBar = () => {
	console.log('hello im the nav client')
	const [menuUsuario, setMenuUsuario] = useState(false);
	const statusCart = useSelector(state => state.cart);

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

				<Link to={"/cart"}>
					<button className="btnNBCU">
						<BsFillCartFill /> {statusCart.length}
					</button>
				</Link>


				{/* <Link to="/admin">
					<button className="btnNBCU">Admin(temp)</button>
				</Link> */}
					<div className="menu-usuario">

						<img  onClick={handlerMenuUsuario} className="img-usuario" src={usuario.image} alt={usuario.name}/>

						{ menuUsuario ? (
							<div className="menu-usuario-activo">

								<h4 className="menu-usuario-activo-p">{usuario.name} {usuario.surname}</h4>
								<p className="menu-usuario-activo-p">{usuario.role}</p>
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
