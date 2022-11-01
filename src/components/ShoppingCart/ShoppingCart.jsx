import React, { useEffect } from "react";
import {
	deleteItemShoppingCart,
	addItemShoppingCart,
	emptyCart,
	getOrCreateShoppingCart,
	checkOut,
	deleteItemCompletedCart,
	createOrder
} from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../navbar/Navbar";
import swal from "sweetalert";
import "./ShoppingCart.css";


const ShoppingCart = () => {
	const dispatch = useDispatch();
	const cart = useSelector(state => state.cart);
	const user = useSelector(state => state.user);
	const checkoutCart = useSelector(state => state.checkOut);
	const localAccessToken = JSON.parse(localStorage.getItem("accessToken"));
	const [actualCart, setActualCart] = React.useState(false);


	useEffect(() => {
		if (localAccessToken) {
				setTimeout(() => {
					dispatch(getOrCreateShoppingCart(user.user.auth.id))
				}, 100);
			}
			else{
				swal({
				title: "You must be logged in to access your shopping cart",
				text: "You will be redirected to the menu",
				icon: "info",
				button: "Ok"
			}).then(() => {
				return window.location.href = "/menu";
			});
		}
	}, [dispatch,user,localAccessToken, actualCart]);


	const handleAdd = e => {
		if (user.hasOwnProperty("user")) {
			dispatch(addItemShoppingCart({ idCart: cart.cartId, idProduct: e.idProduct }));
			if (actualCart === false) {
				setActualCart(true);
			} else {
				setActualCart(false);
			}
		}
	};
	const handleRemove = e => {
		if (user.hasOwnProperty("user")) {
			dispatch(deleteItemCompletedCart({ idCart: cart.cartId, idProduct: e.idProduct }));
			if (actualCart === false) {
				setActualCart(true);
			} else {
				setActualCart(false);
			}
			swal({
				title: "Product removed",
				text: "The product has been removed from the cart",
				icon: "success",
				button: "Ok",
			})
		}
	};
	const handleRemoveOne = e => {
		if (user.hasOwnProperty("user")) {
			dispatch(deleteItemShoppingCart({ idCart: cart.cartId, idProduct: e.idProduct }));
			if (actualCart === false) {
				setActualCart(true);
			} else {
				setActualCart(false);
			}
		}
	};
	const handleClear = () => {
		swal({
			text: `Are you sure you want to delete your entire cart ?`,
			buttons: ["cancel", "confirm"],
			dangerMode: true,
			closeOnClickOutside: false,
			icon: "warning"
		}).then(value => {
			if (value) {
				dispatch(emptyCart({ idCart: cart.cartId }));
				if (actualCart === false) {
					setActualCart(true);
				} else {
					setActualCart(false);
				}
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
	};

	const handleCheckout = ()	=> {
		if (user.hasOwnProperty("user")) {
			swal({
				text: `Are you sure you want to checkout your cart ?`,
				buttons: ["cancel", "confirm"],
				dangerMode: true,
				closeOnClickOutside: false,
				icon: "warning"
			}).then(value => {
				if (value) {
					dispatch(checkOut({ idUser: user.user.id, items: cart.items }));
					swal("Checkout", {
						button: false,
						timer: 1500,
						icon: "success"
					});
					// dispatch(emptyCart({ idCart: cart.cartId }));
				} else {
					swal("Operation cancelled", {
						button: false,
						timer: 1500,
						icon: "error"
					});
				}
			});
		}
	};

// console.log("checkoutCart", checkoutCart)
	return (
		<div className="shoppingCart">
			<NavBar />
			<div className="headerCartSC">
				<p className="titleCartSC">Added products</p>
				<button className="deleteBtnAllCartSC" onClick={() => handleClear()}>
					Delete All
				</button>
				{checkoutCart?
				<a href={checkoutCart} >Pay with Mercado Pago</a> : <button className="btnBCartTemp" onClick={()=> handleCheckout()}>Create Order</button> }
			</div>
			<div className="containerCartSC">
				<h2>Total</h2>
				<h2>{cart.cartTotal}$</h2>
			</div>
			<div className="bodyCartSC">
				{cart.items?.map(e => (
					<div key={e.id} className="cardCartSC">
						<div className="titleCardSC">
							<h3>ud ${e.price / e.qty}</h3>
							<h2>{e.name}</h2>
							<button className="removeBtnCardSC" onClick={() => handleRemove(e)}>
								X
							</button>
						</div>
						<img className="imgCardSC" src={e.image} alt={`Pic of ${e.name}`} />
						<div className="quantityCardSC">
							<h3>Qty</h3>
							<button className="removeOneBtnCardSC" onClick={() => handleRemoveOne(e)}>
								-
							</button>
							<h3>{e.qty}</h3>
							<button className="addBtnCardSC" onClick={() => handleAdd(e)}>
								+
							</button>
						</div>
						<div className="totalCardSC">
							<h2>Subtotal</h2>
							<h2>{e.price}</h2>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ShoppingCart;
