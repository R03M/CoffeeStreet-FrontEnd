import React from "react";
import NavBar from "../navbar/Navbar.jsx";
import TempNd from "../tempNoDelete/TempNd.jsx";
import FormS from "./formS/FormS.jsx";
import "./signUp.css";

const SignUp = () => {
	return (
		<div className="signUpDiv">
			<NavBar />
			<div className="signUpBody">
				<FormS />
			</div>
		</div>
	);
};

export default SignUp;
