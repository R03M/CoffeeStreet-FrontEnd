import React from "react";
import { Link } from "react-router-dom";
import { MdReadMore } from "react-icons/md";
import "./new.css";

const noticias = [
	{
		title: " KOPI LUWAK, EL CAFÉ MÁS EXÓTICO DEL MUNDO ",

		description:
			"Se conoce por ser el café más costoso del mundo, pero también el más exótico en su origen y proceso de elaboración. El Kopi Luwak proviene de Indonesia y la forma en cómo se obtienen los granos no es del agrado de muchos.",
		img: "https://cc1.cafetearte.es/img/ybc_blog/post/civeta-cab.jpg"
	}
];

const New = () => {
	return (
		<div className="newDiv">
			<div className="titleNew">{noticias[0].title}</div>
			<div className="descripAPicNew">
				<div className="descripNewBody">{noticias[0].description}</div>
				<img className="imgNewC" src={noticias[0].img} width={500} alt="imagen" />
				<Link to="/home/currentNews">
					<button className="buttonNewC">
						<MdReadMore />
					</button>
				</Link>
			</div>
		</div>
	);
};

export default New;
