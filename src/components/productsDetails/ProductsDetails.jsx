import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addItemShoppingCart, productDetails } from "../../redux/action";
import { BsFillCartPlusFill } from "react-icons/bs";
import NavBar from "../navbar/Navbar";
import swal from "sweetalert";
import "./ProductsDetails.css";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

const ProductsDetails = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const product = useSelector(state => state.productDetails);
	const cart = useSelector(state => state.cart);
	const user = useSelector(state => state.user.user);

	useEffect(() => {
		dispatch(productDetails(id));
	}, [dispatch, id]);

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

	const handleAdd = product => {
		if (!user.id) {
			swal({
				title: "Inicia sesión",
				text: "Para poder agregar productos al carrito",
				icon: "info",
				button: "Ok"
			});
		} else {
			dispatch(addItemShoppingCart({ idCart: cart.cartId, idProduct: product.id }));
			swal({
				title: "Producto agregado",
				text: "El producto se ha agregado al carrito",
				icon: "success",
				button: "Ok"
			});
		}
    }

	function moreDetails() {
		if (product.isPrepared === true && product.category === "coffee") {
			return (
				<div>
					<p className="productDetailsIngred">The attributes for this coffee are:</p>
					<div className="attributesPDetailsC">
						<p>Texture ➡ {product.attribute.texture}</p>
						<p>Body ➡ {product.attribute.body}</p>
						<p>Acidity ➡ {product.attribute.acidity}</p>
						<p>Bitterness ➡ {product.attribute.bitterness}</p>
						<p>Roast ➡ {product.attribute.roast}</p>
						<p>Color ➡ {product.attribute.color}</p>
					</div>
						<p className="attributesPDetailsCCream">Cream ➡ {product.attribute.cream === true ? "Yes" : "No"}</p>
				</div>
			);
		} else if (product.isPrepared === false) {
			return (
				<p className="productDetailsCategory">
					This product comes from {product.originCountry}.
				</p>
			);
		}
	}

	return (
		<div className="productDetailsDiv">
			<NavBar />
			<ShoppingCart />
			<div className="productDetailsBody">
				<p className="productNameDC">{product.name}</p>

				<div className="detailsBodyPD">
					<img
						className="imgDescriptionDB"
						src={product.image}
						alt={`Pic of ${product.name}`}
					/>

					<div className="ingredientsACDescripC">
						<p className="productDetailsCategory">
							This product falls into the category of {product.category}.
						</p>

						<div>
							<p className="productDetailsIngred">Its main ingredients are:</p>
							<div className="productDetailsIngredCu">
								{product.ingredients &&
									product.ingredients.map(ingredient => {
										return <p>{`✔ ${ingredient}`}</p>;
									})}
							</div>
						</div>
					</div>

					<div className="typeDescripC">
							<p className="titleTypeDescripC">This product is:</p>
							<div className="typeDetailsProductC">
								<p>{product.lactose === false ? "● Lactose-free" : "● With lactose"}</p>
								<p>{product.gluten === false ? "● Gluten-free" : "● With gluten"}</p>
								<p>{product.alcohol === false ? "● Alcohol-free" : "● With alcohol"}</p>
						</div>
						{moreDetails()}
					</div>
				</div>

				<p className="descriptPD">{product.description}</p>

				<div className="tempPDbuyA">
					<button className="tempPDbuyAGoBack" onClick={() => window.history.back()}>
						Go Back
					</button>
					<p className="tempPDbuyAPrice">Price by unit $ {product.price}</p>
					<p className="tempPDAQty">{`Qty`}</p>
					<input className="tempPDAInput" type="number" value={1} />
					<button className={product.stock === true ? "tempPDbuyAAdd" : "tempPDbuyAAddNSPD"} onClick={() => handleAdd(product)}>
						Add to <BsFillCartPlusFill />
					</button>
					<button className={product.stock === true ? "tempPDbuyABuy" : "tempPDbuyABuyNSPD"} onClick={() => handlerTemp()}>
						Buy now
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProductsDetails;
