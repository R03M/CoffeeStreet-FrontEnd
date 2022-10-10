import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import Logo from "./img/coffeeStreet.png";

const NavBar = () => {
    return (
        <div className="contenedor-nav">
            <div className="logo">
              <Link to="/">
                {/* Link a pagina inicial se puede poner en el logo */}
                <img src={Logo} alt="not found" width={100} />  
              </Link>
            </div>
            
            <div className="botones">
              {/* Link a pagina de productos */}
              <Link to="/Home">       
                <button>Home</button>
              </Link>

              {/* Link a pagina para registrarse */}
              <Link to="/Sing Up">
                  <button>Sing Up</button>
              </Link>

              {/* Link a pagina para ingresar */}
              <Link to="/Log In">
                  <button>Log In</button>
              </Link>
            </div>
        </div>
    );
}

export default NavBar;
