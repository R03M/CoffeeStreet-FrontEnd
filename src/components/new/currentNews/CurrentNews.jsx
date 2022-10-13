import React from "react";
import "./currentNews.css";
import { Link } from "react-router-dom";

const CurrentNews = () => {
	return (
		<div className="contenedor-CurrentNews">
			<div className="hedder">
				<p>.</p>
			</div>
			<div>
				<p>KOPI LUWAK, EL CAFÉ MÁS EXÓTICO DEL MUNDO</p>
				<p>
					Se conoce por ser el café más costoso del mundo, pero también el más exótico en
					su origen y proceso de elaboración. El Kopi Luwak proviene de Indonesia y la
					forma en cómo se obtienen los granos no es del agrado de muchos. Kopi significa
					café y luwak es el nombre de la civeta en indonesio, un pequeño animal parecido
					a los gatos, que vive en distintas zonas del mundo. En las islas de Sumatra,
					Java, Sulawesi y Bali existe una variedad de civeta que originó el Kopi Luwak.
				</p>
			</div>
			<img
				src="https://www.cafetearte.es/img/cms/Fotos%20Blog%20Caf%C3%A9/kopiluwak-cafe-te-arte.jpg"
				alt="Heces de civeta"
			/>
			<h3>¿Qué es el Kopi Luwak?</h3>
			<p>
				Es un café gourmet que se obtiene de las cerezas del café en un estado de
				maduración óptimo tras ser digeridas por la civeta. La planta del café produce
				unos frutos carnosos, de color rojo o púrpura y raramente amarillo; son las
				llamadas cerezas. Estas contienen dos núcleos o huesos, cada uno de ellos con un
				grano de café. Los huesos son una especie de cascos semirrígidos transparentes de
				aspecto apergaminado. Cuando se retiran se obtienen los granos de café verde
				listos para tostar y envasar.
			</p>
			<img
				src="https://www.cafetearte.es/img/cms/Fotos%20Blog%20Caf%C3%A9/planta-cafe-cafe-te-arte.jpeg"
				alt="Fruto de la planta de cafe"
			/>
			<h3>¿Cómo se obtiene el Kopi Luwak?</h3>
			<p>
				Las civetas son mamíferos que se alimentan casi exclusivamente de café. Tienen la
				capacidad de seleccionar los mejores granos para su consumo y suelen atiborrarse
				con ellos después de elegirlos de acuerdo a su momento óptimo de maduración
			</p>
			<p>
				Tras comerse el café, los frutos pasan por el sistema digestivo en el que ocurren
				algunas pequeñas modificaciones: el grano interno del café no es digerido, pero
				parece ser que sí es modificado químicamente por las enzimas presentes en el
				estómago de la civeta, que añaden sabor al café rompiendo las proteínas que
				producen su amargor. Los desperdicios o granos resultantes de este proceso son
				recogidos por los agricultores locales que los lavan y someten a una ligera
				tostación para no influir mucho en su sabor. Y esto es lo que se vende a precio de
				oro en todo el mundo.
			</p>
			<iframe
        title="video"
				width="560"
				height="315"
				src="https://www.youtube.com/embed/1Q7IYpLYQ7Q"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen="allowfullscreen"
			></iframe>
			<div className="footer">
        <div className="butonlike">
          <span>Te gusto este articulo ?</span>
          <button className="like">
            
          </button>
        </div>

				<div>
					<Link to="/home">
						<button class="learn-more">
							<span className="circle" aria-hidden="true">
								<span className="icon arrow"></span>
							</span>
							<span className="button-text">BACK</span>
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default CurrentNews;
