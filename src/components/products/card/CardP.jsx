import React, { useState, useEffect } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { Link } from "react-router-dom";
import { BiDrink } from "react-icons/bi";
import { GiMilkCarton, GiWheat } from "react-icons/gi";
import { BsInfo, BsFillCartPlusFill } from "react-icons/bs";
import swal from "sweetalert";
import "./cardP.css";
import {
	addProductToCart,
	addProductFavourite,
	deleteProductFavourite
} from "../../../redux/action";
import { useDispatch, useSelector } from "react-redux";

const CardP = ({ product }) => {
	const dispatch = useDispatch();
	const listaFavoritos = useSelector(state => state.myFavourites);
	const quantity = useSelector(state => state.quantity);
	const user = useSelector(state => state.user);

	const alcohol = () => {
		if (product.alcohol === true) {
			return (
				<p>
					<BiDrink className="trueBtn" />
				</p>
			);
		} else {
			return (
				<p>
					<BiDrink className="falseBtn" />
				</p>
			);
		}
	};
	const lactose = () => {
		if (product.lactose === true) {
			return (
				<p>
					<GiMilkCarton className="trueBtn" />
				</p>
			);
		} else {
			return (
				<p>
					<GiMilkCarton className="falseBtn" />
				</p>
			);
		}
	};
	const gluten = () => {
		if (product.gluten === true) {
			return (
				<p>
					<GiWheat className="trueBtn" />
				</p>
			);
		} else {
			return (
				<p>
					<GiWheat className="falseBtn" />
				</p>
			);
		}
	};

	const handlerTemp = () => {
		if (product.stock === true) {
			swal({
				title: "Proximamente...",
				text: "Tal vez en el segundo Sprint",
				icon: "info",
				button: "Ok"
			});
		}
	};
	const handleAdd = id => {
		dispatch(addProductToCart(id));
	};
	const handleQuantity = id => {
		let count = 0;
		quantity.map(q =>  {
			if (q.id === id) {
				count = q.quantity;
			}
		});
		return count;
	};

	const handlerFavorite = () => {
		if (listaFavoritos.map(e => e.id === product.id).includes(true)) {
			dispatch(deleteProductFavourite({ idProduct: product.id }, user.id));
		} else {
			dispatch(addProductFavourite({ idProduct: product.id }, user.id));
		}
	};

	return (
		<div className={product.stock === true ? "cardDiv" : "cardDivF"} key={product.id}>
			<button onClick={handlerFavorite} className="like">
				{listaFavoritos.map(e => e.id === product.id).includes(true) ? (
					<FcLike />
				) : (
					<FcLikePlaceholder />
				)}
			</button>

			<div className="nameCard">{product.name}</div>
			<img
				className={product.stock === true ? "imgCard" : "imgCardNSCP"}
				src={product.image}
				alt={`Pic to ${product.name}`}
			/>
			<div className="divTypeCardP">
				<div>{alcohol()}</div>
				<div>{lactose()}</div>
				<div>{gluten()}</div>
				<Link className="linkCardP" to={`/products/${product.id}`}>
					<p>{<BsInfo className="btnInfoCardP" />}</p>
				</Link>
			</div>

			<p className="priceCardPC">Price by unit $ {product.price}</p>

			<div className="divTempCart">
				<p className="pCartTemp">{`Qty`}</p>
				<input type="number" className="inputCartTemp" value={handleQuantity} />
				<button
					className={product.stock === true ? "btnBCartTemp" : "btnBCartTempNSCP"}
					onClick={e => handlerTemp(e)}
				>
					Buy
				</button>
				<button
					className={product.stock === true ? "btnACartTemp" : "btnACartTempNSCP"}
					onClick={() => handleAdd(product)}
				>
					<BsFillCartPlusFill />
				</button>
			</div>
		</div>
	);
};

export default CardP;
