import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiDrink, BiHeart } from "react-icons/bi";
import { RiHeart3Fill } from "react-icons/ri";
import { GiMilkCarton, GiWheat } from "react-icons/gi";
import { BsInfo, BsFillCartPlusFill } from "react-icons/bs";
import { FaRegHandshake } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
	addProductFavourite,
	addItemShoppingCart,
	deleteProductFavourite,
	checkOut,
	getMyFavorites,
	getOrCreateShoppingCart
} from "../../../redux/action";
import swal from "sweetalert";
import "./cardP.css";

const CardP = ({ product }) => {
	const dispatch = useDispatch();
	let navigate = useNavigate();
	const listaFavoritos = useSelector(state => state.myFavourites);
	const user = useSelector(state => state.user.user);
	const checkoutCart = useSelector(state => state.checkOut);
	const accessToken = useSelector(state => state.accessToken);
	const [linkMp, setLinkMp] = useState(false);

	const cart = useSelector(state => state.cart);

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

	const valuesRDiscount = value => {
		if (value === 0.1) return "off 10%";
		if (value === 0.2) return "off 20%";
		if (value === 0.3) return "off 30%";
		if (value === 0.4) return "off 40%";
		if (value === 0.5) return "off 50%";
		if (value === 0.6) return "off 60%";
		if (value === 0.7) return "off 70%";
		if (value === 0.8) return "off 80%";
		if (value === 0.9) return "off 90%";
		if (value === 1) return "off 100%";
	};

	const handleAdd = () => {
		if (!user) {
			swal({
				title: "You must be logged in to add products to your cart",
				icon: "info",
				button: "Ok"
			});
		} else if (product.stock === true) {
			dispatch(addItemShoppingCart({ idCart: cart.cartId, idProduct: product.id }));
			swal({
				title: "Product added to cart",
				text: "You can see your cart in the top right corner",
				icon: "success",
				button: "Ok"
			});
			if (accessToken) {
				setTimeout(() => {
					dispatch(getOrCreateShoppingCart(user.auth.id));
				}, 500);
			}
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
		} else if (user) {
			if (
				listaFavoritos.length &&
				listaFavoritos.map(e => e.id === product.id).includes(true)
			) {
				dispatch(deleteProductFavourite({ idProduct: product.id }, user.id));
				setTimeout(() => {
					dispatch(getMyFavorites(user.id));
				}, 500);
			} else {
				dispatch(addProductFavourite({ idProduct: product.id }, user.id));
				setTimeout(() => {
					dispatch(getMyFavorites(user.id));
				}, 500);
			}
		}
	};

	const handleCheckout = () => {
		if (user && product.stock === true) {
			swal({
				title: "Are you sure you want to buy this product?",
				icon: "warning",
				buttons: ["Cancel", "Yes"],
				dangerMode: true,
				closeOnClickOutside: false
			}).then(value => {
				if (value) {
					dispatch(
						checkOut({
							idUser: user.id,
							items: [
								{
									idProduct: product.id,
									qty: 1,
									price: product.price,
									name: product.name
								}
							]
						})
					);
					swal("Pay", {
						button: false,
						timer: 1500,
						icon: "success"
					});
					setLinkMp(true);
				} else {
					swal("Staying on menu", {
						button: false,
						timer: 1200,
						icon: "success"
					});
				}
			});
		} else if (!user) {
			swal({
				title: "You must be logged in to buy products",
				icon: "info",
				button: "Ok"
			});
		}
	};

	return (
		<div className={product.stock === true ? "cardDiv" : "cardDivF"} key={product.id}>
			<div
				className={
					product.discount === null || product.discount === 0 ? "" : "triangleCardPC"
				}
			>
				<div
					className={
						product.discount === null || product.discount === 0
							? ""
							: "textTriangleCardPC"
					}
				>
					{product.discount < 0 ? null : valuesRDiscount(product.discount)}
				</div>
			</div>

			<div className={product.stock === false ? "triangleColorCardPC" : ""}>
				<div className={product.stock === false ? "textTrianglePC" : ""}>
					{product.stock === true ? null : "Out Stock"}
				</div>
			</div>
			<button onClick={handlerFavorite} className="btnlikeCardPC">
				{listaFavoritos.length &&
				listaFavoritos.map(e => e.id === product.id).includes(true) ? (
					<RiHeart3Fill className="btnLikeCardTrue" />
				) : (
					<BiHeart className="btnLikeOff" />
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
				{linkMp ? (
					<a className="btnMercadoPago" href={checkoutCart}>
						<FaRegHandshake className="iconHandsMPBTNCP" /> Pay MP
					</a>
				) : (
					<button
						className={product.stock === true ? "btnBCartTemp" : "btnBCartTempNSCP"}
						onClick={e => handleCheckout()}
					>
						Buy
					</button>
				)}
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
