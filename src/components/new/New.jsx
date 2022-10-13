import React from "react";
import { Link } from "react-router-dom";
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
	if (!Array.isArray(noticias) || noticias.length <= 0) {
		return;
	}

	return (
		<div className="contenedor-new">
			<div className="titulo-noticia">{noticias[0].title}</div>
			<div className="contenedor-descripcion-img">
				<div className="descripcion-noticia">{noticias[0].description}</div>
				<div className="img-noticia">
					<img src={noticias[0].img} width={500} alt="imagen" />
				</div>
			</div>

			<div>
				<Link to="/home/currentNews">
					<button class="learn-more">
						<span className="circle" aria-hidden="true">
							<span className="icon arrow"></span>
						</span>
						<span className="button-text">Learn More</span>
					</button>
				</Link>
			</div>
		</div>
	);
};

export default New;
