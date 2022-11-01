import React from "react";
import Footter from "../footter/Footter.jsx";
import NavBar from "../navbar/Navbar.jsx";
import FormS from "./formS/FormS.jsx";
import "./signUp.css";

const SignUp = () => {
	return (
		<div className="signUpDiv">
			<NavBar />
			<div className="signUpBody">
				<FormS />
			</div>
			<Footter />
		</div>
	);
};

export default SignUp;
