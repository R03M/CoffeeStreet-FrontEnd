import React from "react";
import NavBar from "../navbar/Navbar.jsx";
import TempNd from "../tempNoDelete/TempNd.jsx";
import "./logIn.css";

const LogIn = () => {
	return (
		<div className="logInDiv">
			<NavBar />
			<div className="logInBody">
			<h1 style={{ fontSize: "2rem" }}>Log In</h1>
				<TempNd/>
			</div>
		</div>
	);
};

export default LogIn;
