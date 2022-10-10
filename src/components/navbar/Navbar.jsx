import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";


const NavBar = () => {
    return (
        <div className="contenedor-nav">
            <div className="contenedor-logo">
              <Link to="/">
                {/* Link a pagina inicial en el logo */}
                <div className="logo"></div>
              </Link>
            </div>
            
            <div className="botones">
              {/* Link a pagina de productos */}
              <Link to="/Home">       
                <button>Home</button>
              </Link>

              {/* Link a pagina para registrarse */}
              <Link to="/Sign Up">
                  <button>Sign Up</button>
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
