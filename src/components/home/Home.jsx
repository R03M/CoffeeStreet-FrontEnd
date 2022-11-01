import React from "react";
import NavBar from "../navbar/Navbar.jsx";
import New from "../new/New.jsx";
import Geolocation from "../Geolocation/geolocation";
import ViewNewsL from "../home/viewNewsL/ViewNewsL";
import ViewReview from "./viewReview/ViewReview.jsx";
import ViewDiscounts from "./discountsActive/ViewDiscounts.jsx";
import "./home.css";
import Footter from "../footter/Footter.jsx";

const Home = () => {
	return (
		<div className="homeDiv">
			<NavBar />
			<div className="bodyHomeC">
				<div className="banner"></div>
				<ViewDiscounts />
				<div className="viewRAndNewDivHomeC">
					<ViewReview />
					<New />
				</div>
				<div className="geoAndViewNLHomeC">
					<Geolocation />
					<ViewNewsL />
				</div>
				<Footter />
			</div>
		</div>
	);
};

export default Home;
