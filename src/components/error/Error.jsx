import React from "react";
import { Link } from "react-router-dom";
import "./error.css";

const Error = () => {
	return (
		<div className="errorDiv">
			<p className="nro1">Page Not Found</p>
			<p className="nro2">We couldn't find what you were looking for.</p>
			<Link to={`/home`}>
				<button className="nro3">Go back</button>
			</Link>
		</div>
	);
};

export default Error;
