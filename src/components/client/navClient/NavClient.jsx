import React  from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../../navbar/navbar.css";
import { useAuth0 } from "@auth0/auth0-react";
import LogOutAuth0 from "../../logIn/logOutButtonAuth0/LogOutAuth0";
import "./navClient.css";


const NavBar = () => {
  const {user} = useAuth0();
	const [menuUsuario, setMenuUsuario] = useState(false);
 

  
	const handlerMenuUsuario = () => {
		if (menuUsuario === false) {
			setMenuUsuario(true);
		} else {
			setMenuUsuario(false);

		}
	}
	
		console.log(menuUsuario);
		console.log(user)

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
					<button className="btnNBCU">Shopping cart</button>
				</Link>

				{/* <Link to="/admin">
					<button className="btnNBCU">Admin(temp)</button>
				</Link> */}
					<div className="menu-usuario">
						<img  onClick={handlerMenuUsuario} className="img-usuario" src={user.picture} alt={user.name}/>
						{ menuUsuario ? (
							<div className="menu-usuario-activo">

								<h4 className="menu-usuario-activo-p">{user.name}</h4>
								<p className="menu-usuario-activo-p">{user.email}</p>
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
