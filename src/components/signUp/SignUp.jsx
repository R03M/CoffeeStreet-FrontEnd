import React from "react";
import NavBar from "../navbar/Navbar.jsx";
import TempNd from "../tempNoDelete/TempNd.jsx";
import FormS from "./formS/FormS.jsx";
import "./signUp.css";

const SignUp = () => {
	return (
		<div className="signUpDiv">
			<NavBar />
			<FormS />
			<div className="signUpBody">
			<h1 style={{ fontSize: "2rem" }}>Sign Up</h1>
				<TempNd/>
			</div>
		</div>
	);
};

export default SignUp;
