import React from "react";
import { BsGithub } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import "./cardA.css";

const CardA = ({ dev }) => {
	return (
		<div className="cardAboutC">
			<h3 className="nameCardAC">{dev.name}</h3>
			<img className="imgCardC" src={dev.image} />
			<div className="divSectorTCardC">
				{dev.frontEnd === true ? <p className="frontPCardC">FRONT END</p> : null}

				{dev.backEnd === true ? <p className="backtPCardC">BACK END</p> : null}

				{dev.devOps === true ? <p className="devOPCardC">DEV OPS</p> : null}
			</div>
			<div className="divBtnsCardC">
				<a href={dev.linkedIn} target="_black">
					<button className="btnLinkedInCardC">{<AiFillLinkedin />}</button>
				</a>
				<a href={dev.gitHub} target="_black">
					<button className="btngitHubInCardC">{<BsGithub />}</button>
				</a>
			</div>
		</div>
	);
};

export default CardA;
