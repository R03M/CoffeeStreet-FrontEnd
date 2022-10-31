import React, { useState,useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./myOrders.css";
import {getOrdersByUser,getReviewByUser,deleteReviews} from "../../../redux/action";
import Reviews from "./reviews";
import ChangeDescriptionR from "./changeDescriptionR";
import ChangeRating from "./changeRating";
import swal from "sweetalert";


const MyOrders = () => {
	const dispatch = useDispatch();
	const ordenes = useSelector((state) => state.ordenesFilter);
	const filter = useSelector((state) => state.filterUserOrden);
	const user = useSelector((state) => state.user);
	const reviewCreated = useSelector((state) => state.reviews);
	const[review, setReview] = useState(false);
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

console.log("ordenes", ordenes)
console.log("rc", reviewCreated)

	return (
		<div className='contenedor-principal'>
			<div	className='filtros-orden'>
				<div className='buttons-orden'>
				<button  onClick={filterOrdenClient} value="All">All</button>
				<button  onClick={filterOrdenClient} value="complete">Completed</button>
				<button  onClick={filterOrdenClient} value="pending">Pending</button>
				{/* <button  onClick={filterOrdenClient} value="cancelado">Cancelled</button> */}
				</div>
							{ordenes  ? (
								<div className='review-orden'>
									<button onClick={handleReview}>Review</button>
								</div>) : null}
							{review ? (
								<div className='review-orden'>
								{reviewCreated ? (
									<div>
										<button onClick={handleDelete}> Delete Reviews</button>
										<p>Description : {reviewCreated[0].description}</p>
										<p>Rating : {reviewCreated[0].rating}</p>
										<button onClick={changeDescriptions}>Change Description</button>
										{changeDescription ? (
											<div>
												<ChangeDescriptionR/>
												
											</div>
												) : null}
													<button onClick={changeRatings}>Change Rating</button>
												{changeRating ? (
													<div>
														<ChangeRating/>
													</div>) : null}
									</div>
								)  
									: <Reviews/>} 
								</div>
							) : null }
			</div>

			<div className='contenedor-ordenes'>
			{ordenes.length > 0 ? (
				ordenes.map(orden => {
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
				<div>You still don't have orders</div>
			)}

			</div>
		</div>
	);
}

export default MyOrders;
