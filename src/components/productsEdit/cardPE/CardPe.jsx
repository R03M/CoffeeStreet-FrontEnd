import React from "react";
import { useDispatch } from "react-redux";
import { getProductsId } from "../../../redux/action";
import "./cardPe.css";

const urlBase = process.env.REACT_APP_FRONT_URL;

const CardPe = ({ product, editC, handlerChangeStock, handlerDelete }) => {
	const dispatch = useDispatch();
	const urlC = `${urlBase}/admin`;
	const currentURL = window.location.href;

	const handlerEdit = () => {
		dispatch(getProductsId(product.id));
		setTimeout(() => {
			editC();
		}, 100);
	};

	return (
		<div
			className={product.stock === true ? "cardPeDivT" : "cardPeDivF"}
			key={product.id}
		>
			<div className={product.stock === false ? "triangleColorCardPEC" : ""}>
				<div className={product.stock === false ? "textTrianglePEC" : ""}>
					{product.stock === true ? null : "Out Stock"}
				</div>
			</div>
			<div className="nameCardPe">{product.name}</div>
			<div className="priceCardPe"> $ {product.price}</div>
			<img className="imgCardPe" src={product.image} alt={`Pic to ${product.name}`} />

			<div className="divTempCardPe">
				<button className="btnBCardPeStock" onClick={() => handlerChangeStock(product)}>
					Stock
				</button>

				{currentURL !== urlC ? null : (
					<>
						<button className="btnBCardPeEdit" onClick={() => handlerEdit()}>
							Edit
						</button>
						<button className="btnBCardPeDelete" onClick={() => handlerDelete(product)}>
							Delete
						</button>
					</>
				)}
			</div>
		</div>
	);
};

export default CardPe;
