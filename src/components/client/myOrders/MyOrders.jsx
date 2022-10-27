import React from 'react';
import "./myOrders.css";

const allOrders = [
	{
		cartId: 1,
		idUser: 1,
		cartTotal: 20,
		status: "pending",
		items: [
			{
				discount: null,
				discountedPrice: null,
				idproduct: 1,
				image: "https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG",
				name: "capuchino",
				price: 2,
				qty: 3,
			},
			{
				discount: null,
				discountedPrice: null,
				idproduct: 2,
				image: "https://elcoctelero.com/wp-content/uploads/2021/06/coctel-cafe-irlandes.jpg",
				name: "irlandes",
				price: 4,
				qty: 2,
			},
			{
				discount: 20,
				discountedPrice: 8,
				idproduct: 3,
				image: "https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG",
				name: "mermelada",
				price: 10,
				qty: 2,
			},
			{
				discount: null,
				discountedPrice: null,
				idproduct: 1,
				image: "https://elcoctelero.com/wp-content/uploads/2021/06/coctel-cafe-irlandes.jpg",
				name: "capuchino",
				price: 2,
				qty: 10,
			},
		]
	},
	{
		cartId: 1,
		idUser: 1,
		cartTotal: 20,
		status: "Completed",
		items: [
			{
				discount: null,
				discountedPrice: null,
				idproduct: 1,
				image: "https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG",
				name: "mermelada",
				price: 2,
				qty: 3,
			},
			{
				discount: null,
				discountedPrice: null,
				idproduct: 2,
				image: "https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG",
				name: "coca",
				price: 4,
				qty: 2,
			},
			{
				discount: 20,
				discountedPrice: 8,
				idproduct: 3,
				image: "https://elcoctelero.com/wp-content/uploads/2021/06/coctel-cafe-irlandes.jpg",
				name: "te",
				price: 10,
				qty: 2,
			},
			{
				discount: null,
				discountedPrice: null,
				idproduct: 1,
				image: "https://elcoctelero.com/wp-content/uploads/2021/06/coctel-cafe-irlandes.jpg",
				name: "galletas",
				price: 2,
				qty: 10,
			},
			
		]
	},
	{
		cartId: 1,
		idUser: 1,
		cartTotal: 20,
		status: "Completed",
		items: [
			{
				discount: null,
				discountedPrice: null,
				idproduct: 1,
				image: "https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG",
				name: "galletas",
				price: 2,
				qty: 3,
			},
			{
				discount: null,
				discountedPrice: null,
				idproduct: 2,
				image: "https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG",
				name: "cortado",
				price: 4,
				qty: 2,
			},
			{
				discount: 20,
				discountedPrice: 8,
				idproduct: 3,
				image: "https://elcoctelero.com/wp-content/uploads/2021/06/coctel-cafe-irlandes.jpg",
				name: "pastel",
				price: 10,
				qty: 2,
			},
			{
				discount: null,
				discountedPrice: null,
				idproduct: 1,
				image: "https://elcoctelero.com/wp-content/uploads/2021/06/coctel-cafe-irlandes.jpg",
				name: "capuchino",
				price: 2,
				qty: 10,
			},
			
		]
	},
	{
		cartId: 1,
		idUser: 1,
		cartTotal: 20,
		status: "cancelado",
		items: [
			{
				discount: null,
				discountedPrice: null,
				idproduct: 1,
				image: "https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG",
				name: "capuchino",
				price: 2,
				qty: 3,
			},
			{
				discount: null,
				discountedPrice: null,
				idproduct: 2,
				image: "https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG",
				name: "irlandes",
				price: 4,
				qty: 2,
			},
			{
				discount: 20,
				discountedPrice: 8,
				idproduct: 3,
				image: "https://elcoctelero.com/wp-content/uploads/2021/06/coctel-cafe-irlandes.jpg",
				name: "mermelada",
				price: 10,
				qty: 2,
			},
			{
				discount: null,
				discountedPrice: null,
				idproduct: 1,
				image: "https://elcoctelero.com/wp-content/uploads/2021/06/coctel-cafe-irlandes.jpg",
				name: "capuchino",
				price: 2,
				qty: 10,
			},
			
			
		]
	},
	{
		cartId: 1,
		idUser: 1,
		cartTotal: 20,
		status: "cancelado",
		items: [
			{
				discount: null,
				discountedPrice: null,
				idproduct: 1,
				image: "https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG",
				name: "capuchino",
				price: 2,
				qty: 3,
			},
			{
				discount: null,
				discountedPrice: null,
				idproduct: 2,
				image: "https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG",
				name: "irlandes",
				price: 4,
				qty: 2,
			},
			{
				discount: 20,
				discountedPrice: 8,
				idproduct: 3,
				image: "https://elcoctelero.com/wp-content/uploads/2021/06/coctel-cafe-irlandes.jpg",
				name: "mermelada",
				price: 10,
				qty: 2,
			},
			{
				discount: null,
				discountedPrice: null,
				idproduct: 1,
				image: "https://elcoctelero.com/wp-content/uploads/2021/06/coctel-cafe-irlandes.jpg",
				name: "capuchino",
				price: 2,
				qty: 10,
			},
			
			
		]
	},
	{
		cartId: 1,
		idUser: 1,
		cartTotal: 20,
		status: "cancelado",
		items: [
			{
				discount: null,
				discountedPrice: null,
				idproduct: 1,
				image: "https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG",
				name: "capuchino",
				price: 2,
				qty: 3,
			},
			{
				discount: null,
				discountedPrice: null,
				idproduct: 2,
				image: "https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG",
				name: "irlandes",
				price: 4,
				qty: 2,
			},
			{
				discount: 20,
				discountedPrice: 8,
				idproduct: 3,
				image: "https://elcoctelero.com/wp-content/uploads/2021/06/coctel-cafe-irlandes.jpg",
				name: "mermelada",
				price: 10,
				qty: 2,
			},
			{
				discount: null,
				discountedPrice: null,
				idproduct: 1,
				image: "https://elcoctelero.com/wp-content/uploads/2021/06/coctel-cafe-irlandes.jpg",
				name: "capuchino",
				price: 2,
				qty: 10,
			},
			
			
		]
	}

]



const MyOrders = () => {


	return (
		<div className='contenedor-principal'>
			<div	className='filtros-orden'>
				<button>Completed</button>
				<button>Pending</button>
				<button>Cancelled</button>
				
			</div>

			{allOrders.length > 0 ? (
				allOrders.map(orden => {
				console.log(orden.name)
					return (
						<div className='Contenedor-Orden'>
						  <div className={orden.status === "pending"? "status-orden-pending" : orden.status === "Completed" ? "status-orden-completed" : "status-orden-cancelado" }>
									<h1>{orden.status}</h1>

							</div>
							<div className='cuerpo-Orden'>
								{orden.items.map(item => {
									return (
										<div className='item-orden'>
											<p>{item.name}</p>
											<img className='image' src={item.image} alt={item.name}/>
											<p>{item.qty}</p>
											<h2 className='price-item'>{item.price}$</h2>
										</div>
									)
								})}

							<div className='total-orden'>
								<h1>Total: {orden.cartTotal}$</h1>
							</div>
							
							</div>

						</div>
					)

				})
			) : (
				<div>You have not added products to your favorites list yet</div>
			)}
			
			  
		</div>
	);
}

export default MyOrders;
