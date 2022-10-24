import React, { useEffect, useState } from "react";
import {
	addProductToCart,
	removeProductFromCart,
	clearCart,
	removeOneProductFromCart,
	deleteItemShoppingCart,
	addItemShoppingCart,
	emptyCart
} from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../navbar/Navbar";
import swal from "sweetalert";
import "./ShoppingCart.css";

const ShoppingCart = () => {
	const dispatch = useDispatch();
	const cart = useSelector(state => state.cart);
	const [count, setCount] = useState(1);
	const quantity = useSelector(state => state.quantity);
	const [order, setOrder] = useState([]);
	const user = useSelector(state => state.user);
	const product = useSelector(state => state.cart.items.id);
	console.log("cart " , cart)
	console.log("product " , product)

	const handleAdd = () => {
		if(user.hasOwnProperty("user") ){
			console.log("entre")
			dispatch(addItemShoppingCart({  idCart: cart.cartId, idProduct : product.id}));
		}
	};

	const handleRemove = () => {
		if(user.hasOwnProperty("user")){
			dispatch(emptyCart({  idCart: cart.cartId}));
		}
	};
	const handleRemoveOne = () => {
		if(user.hasOwnProperty("user")){
			dispatch(deleteItemShoppingCart({  idCart: cart.cartId, idProduct : product.id}));
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
				dispatch(clearCart());
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

	const handleTotal = () => {
	// 	let total = 0;
	// 	if (cart.length > 0) {
	// 		cart.map(e => {
	// 			total += e.price * e.quantity;
	// 		});
	// 		return Math.round(total);
	// 	}
	};
	// console.log(count)
	return (
		<div className="shoppingCart">
			<NavBar />
			<div className="headerCartSC">
				<p className="titleCartSC">Added products</p>
				<button className="deleteBtnAllCartSC" onClick={() => handleClear()}>
					Delete All
				</button>
			</div>

			<div className="bodyCartSC">
				{cart.items.map(e => (
					<div className="cardCartSC">
						<div className="titleCardSC">
							<h3>ud ${e.price}</h3>
							<h2>{e.name}</h2>
							<button className="removeBtnCardSC" onClick={() => handleRemove(e.id)}>
								X
							</button>
						</div>
						<img className="imgCardSC" src={e.image} alt={`Pic of ${e.name}`} />
						<div className="quantityCardSC">
							<h3>Qty</h3>
							<button className="removeOneBtnCardSC" onClick={() => handleRemoveOne(e)}>
								-
							</button>
							<h3>{e.quantity}</h3>
							<button className="addBtnCardSC" onClick={() => handleAdd(e)}>
								+
							</button>
						</div>
						<div className="totalCardSC">
							<h2>Total</h2>
							<h2>${handleTotal()}</h2>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ShoppingCart;
