import React from "react";
import { Link } from "react-router-dom";
import { RiTeamFill } from "react-icons/ri";
import { SiCoffeescript } from "react-icons/si";
import "./Landing.css";

const Landing = () => {
	return (
		<div className="landingDiv">
			<div className="bodyLandingC">
				<div className="imgLandingC"></div>
				<div className="parrfLandingC">
					Prepared and served under the highest quality standards, providing our customers
					with a service sublime.
				</div>
				<div className="btnsLandingsDivs">
					<Link to={"/about"}>
						<button className="btnLandingC"><RiTeamFill /></button>
					</Link>
					<Link to={"/home"}>
						<button className="btnLandingC">
							<SiCoffeescript/>
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Landing;
