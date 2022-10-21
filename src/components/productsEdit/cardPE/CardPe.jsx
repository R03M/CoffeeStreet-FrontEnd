import React from "react";
import { useDispatch } from "react-redux";
import { getProducts, getProductsId, deleteProduct } from "../../../redux/action";
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
		}, 100);
	};

	function handlerDelete(e) {
		e.preventDefault();
		swal({
			text: `Are you sure to delete the product ${product.name}`,
			buttons: ["cancel", "confirm"],
			dangerMode: true,
			closeOnClickOutside: false,
			icon: "warning"

		}).then((value) => {
			if (value) {
				dispatch(deleteProduct(product.id))
				dispatch(getProducts())
				swal("Removed", {
					button: false,
					timer: 1500,
					icon: "success"
				});
			} else {
				swal("Operation cancelled", {
					button: false,
					timer: 1500,
					icon: "error"
				});
			}
		});
	}

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
				<button className="btnBCardPeDelete" onClick={e => handlerDelete(e)}>
					Delete
				</button>
			</div>
		</div>
	);
};

export default CardPe;
