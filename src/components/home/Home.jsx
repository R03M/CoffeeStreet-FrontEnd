import React, { useEffect } from "react";
import NavBar from "../navbar/Navbar.jsx";
import NavBarClient from "../client/navClient/NavClient.jsx";
import New from "../new/New.jsx";
import "./home.css";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import { logPostData } from "../../redux/action.js";


const discounts = [
	{ title: "10% off", descrip: "on Salty Bakery", id: 1 },
	{ title: "20% off", descrip: "on Coffee", id: 2 },
	{ title: "15% off", descrip: "on Tea", id: 3 },
	{ title: "22% off", descrip: "on Sweet Bakery", id: 4 }
];


const Home = () => {

	const usuario = useSelector(state => state.user);

	return (
		<div className="homeDiv">
		  { usuario?.name ? (
				<NavBarClient />
		  ) : <NavBar />}

			<div className="banner"></div>
			<div className="discountsAndNews">
				<div className="discounts">
					{discounts?.map(discounts => (
						<div className="discountsC">
							<p className="titleDiscountNew">{discounts.title}</p>
							<p className="descripDiscountNew">{discounts.descrip}</p>
						</div>
					))}
				</div>
				<New />
			</div>
		</div>

	);
};

export default Home;
