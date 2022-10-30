import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { BiDrink } from "react-icons/bi";
import { GiMilkCarton, GiWheat } from "react-icons/gi";
import { BsInfo, BsFillCartPlusFill } from "react-icons/bs";
import swal from "sweetalert";
import "./cardP.css";
import {
	addProductFavourite,
	addItemShoppingCart,
	deleteProductFavourite,
	checkOut
} from "../../../redux/action";
import { useDispatch, useSelector } from "react-redux";

const CardP = ({ product, userId }) => {
	const dispatch = useDispatch();
	let navigate = useNavigate();
	const listaFavoritos = useSelector(state => state.myFavourites);
	const user = useSelector(state => state.user.user);
	const checkoutCart = useSelector(state => state.checkOut);

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

	const cart = useSelector(state => state.cart);
	const handleAdd = () => {
		if (!user) {
			swal({
				title: "You must be logged in to add products to your cart",
				icon: "info",
				button: "Ok"
			});
		} else {
			dispatch(addItemShoppingCart({ idCart: cart.cartId, idProduct: product.id }));
			swal({
				title: "Product added to cart",
				text: "You can see your cart in the top right corner",
				icon: "success",
				button: "Ok"
			});
		}
	};

	const handlerFavorite = () => {
		if (!user) {
			swal({
				title: "To add to favorites you must first register or log in",
				icon: "info",
				buttons: ["Maybe later", "Sign in"],
				dangerMode: true,
				closeOnClickOutside: false,
				icon: "warning"
			}).then(value => {
				if (value) {
					swal("Redirecting to Sign in", {
						button: false,
						timer: 1500,
						icon: "success"
					});
					navigate("/signIn");
				} else {
					swal("Staying on menu", {
						button: false,
						timer: 1200,
						icon: "success"
					});
				}
			});
		} else {
			if (listaFavoritos.map(e => e.id === product.id).includes(true)) {
				dispatch(deleteProductFavourite({ idProduct: product.id }, user.id));
			} else {
				dispatch(addProductFavourite({ idProduct: product.id }, user.id));
			}
		}
	};

	const handleCheckout = () => {
		if (user) {
			swal({
				title: "Are you sure you want to buy this product?",
				icon: "warning",
				buttons: ["Cancel", "Yes"],
				dangerMode: true,
				closeOnClickOutside: false
			}).then(value => {
				if (value) {
					dispatch(checkOut({ idUser: user.id, 
						items: [
							{
								id: product.id,
								qty: 1,
								price: product.price,
								name: product.name
							}
						] }));
					swal("Pay", {
						button: false,
						timer: 1500,
						icon: "success"
					});
				} else {
					swal("Staying on menu", {
						button: false,
						timer: 1200,
						icon: "success"
					});
				}
			});
		} else {
			swal({
				title: "You must be logged in to buy products",
				icon: "info",
				button: "Ok"
			});
		}
	};


	return (
		<div className={product.stock === true ? "cardDiv" : "cardDivF"} key={product.id}>
			<div className={product.stock === false ? "triangleColorCardPC" : ""}>
				<div className={product.stock === false ? "textTrianglePC" : ""}>
					{product.stock === true ? null : "Out Stock"}
				</div>
			</div>
			<button onClick={handlerFavorite} className="like">
				{listaFavoritos.length &&
				listaFavoritos.map(e => e.id === product.id).includes(true) ? (
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
				<p className="pCartTemp">{product.qty}</p>
				<input type="number" className="inputCartTemp" value={product.qty} />
				{checkoutCart? 
				<a href={checkoutCart} >Pay with Mercado Pago</a> : <button
					className={product.stock === true ? "btnBCartTemp" : "btnBCartTempNSCP"}
					onClick={e => handleCheckout()}
				>
					Buy
				</button>}
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
