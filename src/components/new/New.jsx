import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { MdReadMore } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { getDataNews } from "../../redux/action";
import "./new.css";

const New = () => {
	const dispatch = useDispatch();
	const dataNews = useSelector(state => state.dataNews);
	const data = dataNews[0];

	useEffect(() => {
		if (dataNews.length < 1) {
			dispatch(getDataNews());
		}
	}, [dispatch]);

	return (
		<div className="newDiv">
			{dataNews.length !== 0 ? (
				<>
					<div className="titleNew">{data.title}</div>
					<div className="descripAPicNew">
						<div className="descripNewBody">{data.description}</div>
						<img className="imgNewC" src={data.image} alt="imagen" />
						<div className="divBtnReadMore">
							<Link to="/home/blogCS">
								<button className="buttonNewC">
									<MdReadMore />
								</button>
							</Link>
						</div>
					</div>
				</>
			) : (
				"Loading..."
			)}
		</div>
	);
};

export default New;
