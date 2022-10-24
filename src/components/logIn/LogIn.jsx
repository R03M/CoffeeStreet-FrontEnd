import React from "react";
import NavBar from "../navbar/Navbar.jsx";
import LoginAuth0 from "./loginButtonAuth0/LoginAuth0.jsx";
import FormLogin from "./formLogin/FormLogin.jsx";
import { Link } from "react-router-dom";
import "./logIn.css";

const LogIn = () => {
	return (
		<div className="logInDiv">
			<NavBar />
			<div className="logInBody">
				<LoginAuth0/>
				<hr className="hrLoginC"/>
				<FormLogin />
				<hr className="hrLoginC"/>
				<Link to="/signUp">
					<button className="btnSULC">Create account</button>
				</Link>
			</div>
		</div>
	);
};

export default LogIn;
