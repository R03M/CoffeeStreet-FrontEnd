import React from "react";
import { Link } from "react-router-dom";
import "./currentNews.css";

const CurrentNews = () => {
	return (
		<div className="currentNewDiv">
			<div className="headerCurrentNew">
				<p className="titleCurrentNew">KOPI LUWAK, THE MOST EXOTIC COFFEE IN THE WORLD</p>
			</div>
			<div className="allBodyCurrentNew">
				<div className="body1CurrentNew">
					<p className="textBody1CurrentNew">
						It is known for being the most expensive coffee in the world, but also the
						most exotic in its origin and production process. Kopi Luwak comes from
						Indonesia and the way in which the grains are obtained is not to the liking of
						many. kopi means coffee and luwak is the name of the civet in Indonesian, a
						small animal similar to cats, which lives in different parts of the world. In
						the islands of Sumatra, Java, Sulawesi and Bali there is a variety of civet
						that originated the Kopi Luwak.
					</p>
					<div className="img1CurrentNew"></div>
				</div>
				<div className="body2CurrentNew">
					<div className="img2CurrentNew"></div>
					<div>
						<p className="textBody1CurrentNew">What is Kopi Luwak?</p>
						<p className="textBody2CurrentNew">
							It is a gourmet coffee that is obtained from coffee cherries in a state of
							optimal maturation after being digested by the civet. the coffee plant it
							produces fleshy fruits, red or purple in color and rarely yellow; They are
							called cherries. These contain two nuclei or bones, each of them with a
							coffee bean. The bones are a kind of helmets transparent semi-rigid with a
							parchment-like appearance. When they withdraw they obtain the green coffee
							beans ready for roasting and packaging.
						</p>
					</div>
				</div>
				<div className="body3CurrentNew">
					<div>
						<p className="textBody1CurrentNew">How is Kopi Luwak obtained?</p>
						<p className="textBody3CurrentNew">
							Civets are mammals that feed almost exclusively on coffee. They have the
							ability to select the best grains for consumption and they tend to stuff
							themselves with them after choosing them according to their moment optimum
							maturation.
						</p>
						<p className="textBody3CurrentNew">
							After eating the coffee, the fruits pass through the digestive system in
							which some small modifications occur: the internal coffee bean is not
							digested, but it seems that it is chemically modified by the enzymes present
							in the stomach of the civet, which add flavor to the coffee by breaking the
							proteins that produce its bitterness. The waste or resulting grains from
							this process are collected by local farmers who wash and They are lightly
							roasted so as not to greatly influence their flavour. And this is what is
							sold at the price of gold throughout the world.
						</p>
					</div>
					<iframe
						title="video"
						width="600"
						height="415"
						src="https://www.youtube.com/embed/1Q7IYpLYQ7Q"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen="allowfullscreen"
					></iframe>
				</div>
				<div className="footer">
					<Link to="/home">
						<button class="learn-more">
							<span className="circle" aria-hidden="true">
								<span className="icon arrow"></span>
							</span>
							<span className="button-text">Go BACK</span>
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default CurrentNews;
