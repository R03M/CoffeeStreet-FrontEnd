import React from "react";
import { useDispatch } from "react-redux";
import { getProductsId } from "../../../redux/action";
import swal from "sweetalert";
import "./cardPe.css";

const CardPe = ({ product, editC }) => {
	const dispatch = useDispatch();

	const handlerTemp = () => {
		swal({
			title: "Proximamente...",
			text: "Tal vez en el segundo Sprint",
			icon: "info",
			button: "Ok"
		});
	};

	const handlerEdit = () => {
		dispatch(getProductsId(product.id));
		setTimeout(() => {
			editC();
		}, 200);
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
				<button className="btnBCardPeEdit" onClick={() => handlerEdit()}>
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
