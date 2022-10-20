import React from "react";
import NavBar from "../navbar/Navbar.jsx";
import "./logIn.css";
import LoginAuth0 from "./loginButtonAuth0/LoginAuth0.jsx";
import FormLogin from "./formLogin/FormLogin.jsx";
import { Link } from "react-router-dom";


const LogIn = () => {
	

	return (
		<div className="logInDiv">
			<NavBar />
			<div className="logInBody">
			<FormLogin/>
			<LoginAuth0/>
			<Link to="/signUp">
					<button>Sign Up</button>
			</Link>
			</div>

		</div>
	);
};

export default LogIn;
