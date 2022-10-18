import React from "react";
import NavBar from "../navbar/Navbar.jsx";
import NavBarClient from "../client/navClient/NavClient.jsx";
import New from "../new/New.jsx";
import "./home.css";
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from "react-redux";

const discounts = [
	{ title: "10% off", descrip: "on Salty Bakery", id: 1 },
	{ title: "20% off", descrip: "on Coffee", id: 2 },
	{ title: "15% off", descrip: "on Tea", id: 3 },
	{ title: "22% off", descrip: "on Sweet Bakery", id: 4 }
];

const Home = () => {
	const { isAuthenticated } = useAuth0();
	const user = useSelector((state) => state.user);


	

console.log(user)
	return (
		<div className="homeDiv">
			{ isAuthenticated ? (
				<NavBarClient />
			)
			: <NavBar /> }
			
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
