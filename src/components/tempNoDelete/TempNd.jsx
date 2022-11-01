import React from "react";
import img from "../../media/mk000.jpg"
import "./tempNd.css";

const TempNd = () => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				height: "100vh",
				justifyContent: "space-between"
			}}
		>
			<img src={img} width="100%" title="Logo" />
			<h1>Hi! Thanks for subscribing to our Newsletter!</h1>

			<h2>We will be sending you our news every week!</h2>
			<img src={img} width="100%" title="Logo" />
		</div>
	);
};

export default TempNd;
