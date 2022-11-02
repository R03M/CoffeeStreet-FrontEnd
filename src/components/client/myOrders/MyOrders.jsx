import React, { useState,useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./myOrders.css";
import {getOrdersByUser,getReviewByUser,deleteReviews} from "../../../redux/action";
import Reviews from "./reviews/reviews";
import ChangeDescriptionR from "./changeDescriptionR";
import ChangeRating from "./changeRating";
import swal from "sweetalert";


const MyOrders = () => {
	const dispatch = useDispatch();
	const ordenes = useSelector((state) => state.ordenes);
	const ordenesFilter = useSelector((state) => state.ordenesFilter);
	const filter = useSelector((state) => state.filterUserOrden);
	const user = useSelector((state) => state.user);
	const reviewCreated = useSelector((state) => state.reviewsUser);
	const [review, setReview] = useState(false);
	const [changeDescription, setChangeDescription] = useState(false);
	const [changeRating, setChangeRating] = useState(false);


	useEffect(() => {
		if(!filter) {
			dispatch(getOrdersByUser(user.user.id))
		}
	}, [dispatch,filter,user.user.id]);

	useEffect(() => {
		dispatch(getReviewByUser(user.user.id))
	}, [dispatch, user.user.id, ])

	const filterOrdenClient =(e) =>{
		dispatch({type: "FILTER_ORDEN_CLIENT", payload: e.target.value})

	}

	const handleReview = () => {
		if(review === false){
			setReview(true)
		}else{
			setReview(false)
		}
	}

	const changeDescriptions = () => {
		if(changeDescription === false){
			setChangeDescription(true)
		}else{
			setChangeDescription(false)
		}
	}

	const changeRatings = () => {
		if(changeRating === false){
			setChangeRating(true)
		}else{
			setChangeRating(false)
		}
	}

	const handleDelete = (id) => {
		dispatch(deleteReviews( reviewCreated[0].id))
		swal({
			title: "Review deleted",
			icon: "success",
			button: "Ok",
		})
	}

// console.log("ordenes", ordenes)
// console.log("rc", reviewCreated)

	return (
		<div className='contenedor-principal'>
			<div	className='filtros-orden'>
			  <div className="titleFilter">
					<label>Filter by status</label>
				</div>
				<div className='buttons-orden'>
					<button  onClick={filterOrdenClient} value="All">All</button>
					<button  onClick={filterOrdenClient} value="complete">Completed</button>
					<button  onClick={filterOrdenClient} value="pending">Pending</button>
				</div>
				<div className="contenedor-review">
				    {ordenes.length === 0 ? (
							<div>
								<h1>debe hacer una compra para hacer una review</h1>
							</div>
						) :  reviewCreated.length === 0 ? (
							<div className="contenedor-review-inputs">
								<button onClick={handleReview}>Make a review</button>
								{ review ? <Reviews /> : null}
							</div>
						) : (
							<div className="contenedor-user-review">
								<div className="contenedor-data-review">
									{changeDescription ? <ChangeDescriptionR setChangeDescription={setChangeDescription}  /> : <p>{reviewCreated[0].description}</p>}
									{/* <p>{reviewCreated[0].description}</p> */}
									{changeRating ? <ChangeRating setChangeRating ={setChangeRating} /> : <p>{reviewCreated[0].rating}</p>}
									{/* <p>{reviewCreated[0].rating}</p> */}
									<button onClick={handleDelete}>Delete Review</button>
								</div>

								<div className="btn-change-review">
									<button onClick={changeDescriptions}>Change Description</button>
									<button onClick={changeRatings}>Change Rating</button>
								</div>

							</div>
						)}
				</div>
			</div>




















			<div className='contenedor-ordenes'>
			{filter ? (
				ordenesFilter.map(orden => {
					return (
						<div className='Contenedor-Orden'>
						  <div className={orden.statusDelivery === "pending"? "status-orden-pending" : orden.statusDelivery === "complete" ? "status-orden-completed" : "status-orden-cancelado" }>
									<h2>{orden.statusDelivery}</h2>
							</div>
							<div className='cuerpo-Orden'>
								{orden.order_product.map(item => {
									return (
										<div className='item-orden'>
											<p>{item.product.name}</p>
											{/* <img className='image' src={item.image} alt={item.name}/> */}
											<p> Qty : {item.quantity}</p>
											<h2 className='price-item'>{item.total / item.quantity}$</h2>
										</div>
									)
								})}

							<div className='total-orden'>
								<h1>Total: {orden.total}$</h1>
							</div>
							</div>

						</div>
					)

				})
			) : (
				ordenes.map(orden => {
					return (
						<div className='Contenedor-Orden'>
						  <div className={orden.statusDelivery === "pending"? "status-orden-pending" : orden.statusDelivery === "complete" ? "status-orden-completed" : "status-orden-cancelado" }>
									<h2>{orden.statusDelivery}</h2>
							</div>
							<div className='cuerpo-Orden'>
							<thead>
							<tr className="title-orden">
								<th className="name-product-orden" >Name</th>
								<th  className="quantity-product-orden">quantity</th>
								<th className="price-product-orden" >price</th>
							</tr>
						</thead>
						 <tbody>
								{orden.order_product.map(item => {
									return (
										<div className='item-orden'>
											<h4>{item.product.name}</h4>
											<h4> {item.quantity}</h4>
											<h2 className='price-item'>{item.total / item.quantity}$</h2>
										</div>
									)
								})}
							</tbody>

							<div className='total-orden'>
								<h1>Total: {orden.total}$</h1>
							</div>
							</div>

						</div>
					)

				})
			)}

			</div>
		</div>
	);
}

export default MyOrders;



// {ordenes  ? (
// 	<div className='review-orden'>
// 		<button onClick={handleReview}>Review</button>
// 	</div>) : null}
// {review ? (
// 	<div className='review-orden'>
// 	{reviewCreated.length > 0 ? (
// 		<div>
// 			<button onClick={handleDelete}> Delete Reviews</button>
// 			<p>Description : {reviewCreated[0].description}</p>
// 			<p>Rating : {reviewCreated[0].rating}</p>
// 			<button onClick={changeDescriptions}>Change Description</button>
// 			{changeDescription ? (
// 				<div>
// 					<ChangeDescriptionR/>

// 				</div>
// 					) : null}
// 						<button onClick={changeRatings}>Change Rating</button>
// 					{changeRating ? (
// 						<div>
// 							<ChangeRating/>
// 						</div>) : null}
// 		</div>
// 	)
// 		: <Reviews/>}
// 	</div>
// ) : null }
