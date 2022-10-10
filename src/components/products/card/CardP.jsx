import React from "react";
import "./cardP.css"
const CardP = ({ product }) => {
	return (
		<div className="cardDiv">
			<div className="nameCard">{product.title}</div>
			<div className="descripCard">{product.description}</div>
			{/* <div>{product.ingredients}</div> */}
			<div>
				<img className="imgCard" src={product.image}/>
			</div>
		</div>
	);
};

export default CardP;
