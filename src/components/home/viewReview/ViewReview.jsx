import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReview } from "../../../redux/action";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import "./viewReview.css";

const ViewReview = () => {
	const dispatch = useDispatch();
	const [card, setCard] = useState(0);
	const allReview = useSelector(state => state.reviews);

	const countReview = allReview.length;

	useEffect(() => {
		dispatch(getReview());
	}, []); // eslint-disable-next-line

	const iconStar = value => {
		if (value === 1) {
			return (
				<div className="iconsStarViewReviewC">
					<AiFillStar /> <AiOutlineStar /> <AiOutlineStar /> <AiOutlineStar />
					<AiOutlineStar />
				</div>
			);
		}
		if (value === 2) {
			return (
				<div className="iconsStarViewReviewC">
					<AiFillStar /> <AiFillStar /> <AiOutlineStar /> <AiOutlineStar />
					<AiOutlineStar />
				</div>
			);
		}
		if (value === 3) {
			return (
				<div className="iconsStarViewReviewC">
					<AiFillStar /> <AiFillStar /> <AiFillStar /> <AiOutlineStar />
					<AiOutlineStar />
				</div>
			);
		}
		if (value === 4) {
			return (
				<div className="iconsStarViewReviewC">
					<AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />
					<AiOutlineStar />
				</div>
			);
		}
		if (value === 5) {
			return (
				<div className="iconsStarViewReviewC">
					<AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />
				</div>
			);
		}
	};

	const handlerNext = () => {
		setCard(card === countReview - 1 ? 0 : card + 1);
	};
	const handlerPrevious = () => {
		setCard(card === 0 ? countReview - 1 : card - 1);
	};

	return (
		<div className="viewReviewDivC">
			<div className="titleviewReviewC">Latest reviews</div>
			<div className="bodyCardsReviewsC">
				<button onClick={handlerPrevious} className="btnsSlideVRC">
					◀
				</button>
				{allReview.length > 0
					? allReview.map((e, index) => {
							return (
								<div className={card === index ? `${"slideVRC"} ${"activeVRC"}` : "slideVRC"}>
									{card === index && (
										<div className="cardsReviewsC" key={index}>
											<div>{iconStar(e.rating)}</div>
											<div className="descripReviewC">"{e.description}"</div>
											<p className="nameReviewC">{e.name}</p>
										</div>
									)}
								</div>
							);
					  })
					: null}
				<button onClick={handlerNext} className="btnsSlideVRC">
					▶
				</button>
			</div>
		</div>
	);
};

export default ViewReview;
