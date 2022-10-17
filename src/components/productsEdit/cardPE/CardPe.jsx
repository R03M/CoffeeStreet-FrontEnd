import React from "react";
import swal from "sweetalert";
import "./cardPe.css";

const CardPe = ({ product }) => {
	const handlerTemp = () => {
		swal({
			title: "Proximamente...",
			text: "Tal vez en el segundo Sprint",
			icon: "info",
			button: "Ok"
		});
	};

	return (
		<div
			className={product.stock === true ? "cardPeDivT" : "cardPeDivF"}
			key={product.id}
		>
			<div className="nameCardPe">{product.name}</div>
			<div className="priceCardPe"> $ {product.price}</div>
			<img className="imgCardPe" src={product.image} alt={`Pic to ${product.name}`} />

			<div className="divTempCardPe">
				<button className="btnBCardPeStock" onClick={() => handlerTemp()}>
					Stock
				</button>
				<button className="btnBCardPeEdit" onClick={() => handlerTemp()}>
					Edit
				</button>
				<button className="btnBCardPeDelete" onClick={() => handlerTemp()}>
					Delete
				</button>
			</div>
		</div>
	);
};

export default CardPe;
