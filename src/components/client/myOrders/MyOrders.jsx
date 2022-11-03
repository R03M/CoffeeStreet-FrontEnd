import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getOrdersByUser, getReviewByUser, deleteReviews } from "../../../redux/action";
import Reviews from "./reviews/reviews";
import { AiFillStar } from "react-icons/ai";
import ChangeDescriptionR from "./changeDescriptionR";
import ChangeRating from "./changeRating";
import swal from "sweetalert";
import RowsMyOrder from "./rowsMyOrder/RowsMyOrder";
import "./myOrders.css";

const MyOrders = () => {
	const dispatch = useDispatch();
	const ordenes = useSelector(state => state.ordenes);
	const ordenesFilter = useSelector(state => state.ordenesFilter);
	const filter = useSelector(state => state.filterUserOrden);
	const user = useSelector(state => state.user);
	const reviewCreated = useSelector(state => state.reviewsUser);
	const [review, setReview] = useState(false);
	const [changeDescription, setChangeDescription] = useState(false);
	const [changeRating, setChangeRating] = useState(false);

	useEffect(() => {
		if (!filter) {
			dispatch(getOrdersByUser(user.user.id));
		}
	}, [dispatch, filter, user.user.id]);

	useEffect(() => {
		dispatch(getReviewByUser(user.user.id));
	}, [dispatch, user.user.id]);

	const filterOrdenClient = e => {
		dispatch({ type: "FILTER_ORDEN_CLIENT", payload: e.target.value });
	};

	const handleReview = () => {
		if (review === false) {
			setReview(true);
		} else {
			setReview(false);
		}
	};

	const changeDescriptions = () => {
		if (changeDescription === false) {
			setChangeDescription(true);
		} else {
			setChangeDescription(false);
		}
	};

	const changeRatings = () => {
		if (changeRating === false) {
			setChangeRating(true);
		} else {
			setChangeRating(false);
		}
	};

	const handleDelete = id => {
		dispatch(deleteReviews(reviewCreated[0].id));
		swal({
			title: "Review deleted",
			icon: "success",
			button: "Ok"
		});
	};

	// console.log("ordenes", ordenes)
	// console.log("rc", reviewCreated)

	return (
		<div className="myOrdersDivC">
			<div className="reviewOrdersDivC">
				{ordenes.length === 0 ? (
					<div>
						<h2>
							You must make a purchase to qualify for Coffee Street
						</h2>
					</div>
				) : reviewCreated.length === 0 ? (
					<div className="contenedor-review-inputs">
						<h2>
							You can now leave your rating for Coffee Street
						</h2>
						<button className="btn-change-review" onClick={handleReview}>Make a review</button>
						{review ? <Reviews /> : null}
					</div>
				) : (
					<>
						<div className="reviewDivMyOrderC">
							<p className="titleReviewMOC">Your current rating for coffee street</p>
							<div className="contenedor-data-review">
								{changeDescription ? (
									<ChangeDescriptionR setChangeDescription={setChangeDescription} />
								) : (
									<p>Description ➡ {reviewCreated[0].description}</p>
								)}
								{/* <p>{reviewCreated[0].description}</p> */}
								{changeRating ? (
									<ChangeRating setChangeRating={setChangeRating} />
								) : (
									<p>
										Rating ➡ {reviewCreated[0].rating}{" "}
										<AiFillStar
											style={{
												color: "#f5c04d",
												fontSize: "1.2rem"
											}}
										/>
									</p>
								)}
								{/* <p>{reviewCreated[0].rating}</p> */}
								<button className="btn-delete-review" onClick={handleDelete}>
									Delete Review
								</button>
							</div>
						</div>

						<div>
							<button className="btn-change-review" onClick={changeDescriptions}>
								Change Description
							</button>
							<button className="btn-change-review" onClick={changeRatings}>
								Change Rating
							</button>
						</div>
					</>
				)}
			</div>

			<div className="bodyMyOrdersC">
				<div className="navOrdersC">
					<p style={{ fontWeight: "700" }}>Filter by status</p>
					<button className="btnNavbarMyOrdersC" onClick={filterOrdenClient} value="All">
						All
					</button>
					<button
						className="btnNavbarMyOrdersC"
						onClick={filterOrdenClient}
						value="complete"
					>
						Completed
					</button>
					<button
						className="btnNavbarMyOrdersC"
						onClick={filterOrdenClient}
						value="pending"
					>
						Pending
					</button>
				</div>
				<div className="cardsMyOrdersC">
					{filter
						? ordenesFilter.map(orden => {
								return (
									<div className="tableCardMyOrdersC">
										<div className="totalMyOrderTC">
											<p className="statusMyOrderC">Status:</p>
											<p
												className={
													orden.statusDelivery === "complete"
														? "completeStyleMyOrdC"
														: "pendingStyleMyOrdC"
												}
											>
												{orden.statusDelivery}
											</p>
										</div>
										<table style={{ width: "100%" }}>
											<thead className="theadMyOrdersC">
												<tr>
													<th>Name</th>
													<th>Quantity</th>
													<th>Price</th>
												</tr>
											</thead>
											<tbody>
												{orden.order_product.map(item => {
													return <RowsMyOrder item={item} />;
												})}
											</tbody>
										</table>
										<div className="totalMyOrderTC">
											<p className="totalMyOrderC">Total:</p>
											<p className="totalMyOrderC">$ {orden.total}</p>
										</div>
									</div>
								);
						  })
						: ordenes.map(orden => {
								return (
									<div className="tableCardMyOrdersC">
										<table style={{ width: "100%" }}>
											<thead className="theadMyOrdersC">
												<tr>
													<th>Name</th>
													<th>Quantity</th>
													<th>Price</th>
												</tr>
											</thead>
											<tbody>
												{orden.order_product.map(item => {
													return <RowsMyOrder item={item} />;
												})}
											</tbody>
										</table>
										<div className="totalMyOrderTC">
											<p className="statusMyOrderC">Status:</p>
											<p
												className={
													orden.statusDelivery === "complete"
														? "completeStyleMyOrdC"
														: "pendingStyleMyOrdC"
												}
											>
												{orden.statusDelivery}
											</p>
											<p className="totalMyOrderC">Total:</p>
											<p className="totalMyOrderC">{orden.total}$</p>
										</div>
									</div>
								);
						  })}
				</div>
			</div>
		</div>
	);
};

export default MyOrders;
