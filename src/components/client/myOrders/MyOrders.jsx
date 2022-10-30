import React, { useState,useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./myOrders.css";







const MyOrders = () => {
	const dispatch = useDispatch();
	const ordenes = useSelector((state) => state.ordenesFilter);
	const filter = useSelector((state) => state.filterUserOrden);
	console.log("ordenes", ordenes);

	
	
	useEffect(() => {
		if(!filter) {
			dispatch({type: "GET_ORDENES"})

		}
	}, [dispatch])
	
	const filterOrdenClient =(e) =>{
		dispatch({type: "FILTER_ORDEN_CLIENT", payload: e.target.value})
		
	}





	return (
		<div className='contenedor-principal'>
			<div	className='filtros-orden'>
				<div className='buttons-orden'>
				<button  onClick={filterOrdenClient} value="All">All</button>
				<button  onClick={filterOrdenClient} value="Completed">Completed</button>
				<button  onClick={filterOrdenClient} value="pending">Pending</button>
				<button  onClick={filterOrdenClient} value="cancelado">Cancelled</button>
			</div>
			</div>

			<div className='contenedor-ordenes'>
			{ordenes.length > 0 ? (
				ordenes.map(orden => {
					return (
						<div className='Contenedor-Orden'>
						  <div className={orden.status === "pending"? "status-orden-pending" : orden.status === "Completed" ? "status-orden-completed" : "status-orden-cancelado" }>
									<h2>{orden.status}</h2>

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
