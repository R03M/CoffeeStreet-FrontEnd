import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Footter from "../../footter/Footter";
import "./currentNews.css";

const CurrentNews = () => {
	const dataNews = useSelector(state => state.dataNews);
	const data = dataNews[0];

	return (
		<div className="currentNewDiv">
			<div className="headerCurrentNew">
				<p className="titleCurrentNew">{data.title}</p>
			</div>

			<div className="allBodyCurrentNew">
				<div className="body1CurrentNew">
					<p className="textBody1CurrentNew">{data.paragraph1}</p>
				</div>

				<div className="bodyImageCurrentNew">
					<img src={data.image} className="imageCurrentNews" />
				</div>

				<div className="body2CurrentNew">
					<p className="textBody1CurrentNew">{data.paragraph2}</p>
				</div>

				<div className="body3CurrentNew">
					<p className="textBody1CurrentNew">{data.paragraph3}</p>
				</div>
				<div className="btnDivCurrentNewsC">
					<Link to="/home">
						<button className="buttonCurrentNewsC">Go back</button>
					</Link>
				</div>
			</div>
			<Footter />
		</div>
	);
};

export default CurrentNews;
