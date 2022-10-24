import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	getProducts,
	getProductsId,
	deleteProduct,
	changeStatus
} from "../../../redux/action";
import swal from "sweetalert";
import "./cardPe.css";

const CardPe = ({ product, editC }) => {
	const dispatch = useDispatch();
	let stockCurret = product.stock;
	let stockName = stockCurret ? "with stock" : "out of stock";

	const handlerStock = () => {
		swal({
			text: `Are you sure you want to change from ${stockName} to ${
				!stockCurret ? "with stock" : "out of stock"
			}?`,
			buttons: ["cancel", "confirm"],
			dangerMode: true,
			closeOnClickOutside: false,
			icon: "warning"
		}).then(value => {
			if (value) {
				// dispatch(changeStatus({ stock: product.stock }, product.id));
				// dispatch(getProducts());
				swal("Coming soon Updated (S3)", {
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
	};

	const handlerEdit = () => {
		dispatch(getProductsId(product.id));
		setTimeout(() => {
			editC();
		}, 100);
	};

	function handlerDelete(e) {
		swal({
			text: `Are you sure to delete the product ${product.name}`,
			buttons: ["cancel", "confirm"],
			dangerMode: true,
			closeOnClickOutside: false,
			icon: "warning"
		}).then(value => {
			if (value) {
				dispatch(deleteProduct(product.id));
				dispatch(getProducts());
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
				<button className="btnBCardPeStock" onClick={() => handlerStock()}>
					Stock
				</button>
				{}
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
