import React from "react";
import TempNd from "../tempNoDelete/TempNd.jsx";
import "./About.css";

const About = () => {
	return (
		<div className="aboutDiv">
			<div className="aboutBody">
				<button style={{fontSize: "1.5rem"}} onClick={() => window.history.back()}>
					Go Back
				</button>
				<h1 style={{ fontSize: "2rem", color: "white" }}>About</h1>
				<TempNd />
			</div>
		</div>
	);
};

export default About;
