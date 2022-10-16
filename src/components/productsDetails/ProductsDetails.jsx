import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { productDetails } from "../../redux/action";
import { BsFillCartPlusFill } from "react-icons/bs";
import NavBar from "../navbar/Navbar";
import swal from "sweetalert";
import "./ProductsDetails.css";

const ProductsDetails = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const product = useSelector(state => state.productDetails);

	useEffect(() => {
		dispatch(productDetails(id));
	}, [dispatch, id]);

	const handlerTemp = () => {
		swal({
			title: "Proximamente...",
			text: "Tal vez en el segundo Sprint",
			icon: "info",
			button: "Ok"
		});
	};

	return (
		<div className="productDetailsDiv">
			<NavBar />
			<div className="productDetailsBody">
				<p className="productNameDC">{product.name}</p>

				<div className="detailsBodyPD">
					<img
						className="imgDescriptionDB"
						src={product.image}
						alt={`Pic of ${product.name}`}
					/>
					<div className="ingredientsACDescripC">
						<div>
							<p>This product falls into the category of {product.category}</p>
						</div>

						<div>
							Its main ingredients are:
							{product.ingredients &&
								product.ingredients.map(ingredient => {
									return <p>{`✔ ${ingredient}`}</p>;
								})}
						</div>
					</div>

					<div className="typeDescripC">
						<div>
							<p>This product is:</p>
							<p>{product.lactose === false ? "Lactose-free" : "With lactose"}</p>
							<p>{product.gluten === false ? "Gluten-free" : "With gluten"}</p>
							<p>{product.alcohol === false ? "Alcohol-free" : "With alcohol"}</p>
						</div>
						<div>
							{product.isPrepared === true ? (
								<div>
									<p>{product.attribute.cream}</p>
									<p>{product.attribute.texture}</p>
									<p>{product.attribute.body}</p>
									<p>{product.attribute.acidity}</p>
									<p>{product.attribute.bitterness}</p>
									<p>{product.attribute.roast}</p>
									<p>{product.attribute.color}</p>
								</div>
							) : (
								<p>This product comes from {product.originCountry}</p>
							)}
						</div>
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
					<button className="tempPDbuyAAdd" onClick={() => handlerTemp()}>
						Add to <BsFillCartPlusFill />
					</button>
					<button className="tempPDbuyABuy" onClick={() => handlerTemp()}>
						Buy now
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProductsDetails;
