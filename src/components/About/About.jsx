import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { teamDev } from "./teamDev";
import CardA from "./cardAb/CardA";
import "./About.css";

const About = () => {
	return (
		<div className="aboutDivC">
			<div className="aboutBodyC">
				<div className="headerAboutC">
					<button className="btnAboutC" onClick={() => window.history.back()}>
						<BiArrowBack />
					</button>
					<h1 className="titleAboutC">developer team</h1>
				</div>
				<div className="allCardsAboutC">
					{teamDev.map(dev => {
						return <CardA dev={dev} />;
					})}
				</div>
			</div>
		</div>
	);
};

export default About;
