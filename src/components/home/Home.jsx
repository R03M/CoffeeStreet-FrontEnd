import React from "react";
import NavBar from "../navbar/Navbar.jsx";
import New from "../new/New.jsx";
import "./home.css"





const descuentos = [
	{title: "descuento del 10%", id: 1},
	{title: "descuento del 20%", id: 2},
	{title: "descuento del 30%", id: 3},
	{title: "descuento del 15%", id: 4},
	{title: "descuento del 45%", id: 5},


];


const Home = () => {
	return (
		<div className="homeDiv">
				<NavBar />
			<div className="banner">
			</div>
			<div className="descuentos">
				{descuentos?.map((descuento) => (
					<div className="descuento">
						{descuento.title}
					</div>
				))}
			</div>
				
				<New/>
				
		</div>
	);
};

export default Home;
