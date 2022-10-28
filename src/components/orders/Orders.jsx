import React from 'react';
import { changeStatusOrder } from "../../redux/action";
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import{GrFormView} from "react-icons/gr";
import "./orders.css";
import swal from 'sweetalert';

const orders = [
	{
		idOrder: "018d53c0-b5ac-4b88-b101-322e915f4b8c",
		idUser: "1c3c1bbe-7068-4774-b6a2-3040130a6f25",
		total: 6.4,
		status: "pending",
		ordersByProduct: [
			{
				discount: null,
				discountedPrice: null,
				idProduct:"6a632f95-d08d-4b68-9839-7ea3e6c9eead",
				total: 6.4,
				quantity: 2,
				name: "Coca Cola",
				price: 3.2,
				image: "https://i.ibb.co/7QpKsCX/coca-cola.png",
			
			}
			
		]
	},
	{
		idOrder: "ec17a6ef-f4b5-4b1d-9fd3-01d6a8035ab7",
		idUser: "1c3c1bbe-7068-4774-b6a2-3040130a6f25",
		total: 8.4,
		status: "pending",
		ordersByProduct: [
			{
				discount: null,
				discountedPrice: null,
				idProduct:"6a632f95-d08d-4b68-9839-7ea3e6c9eead",
				total: 8.4,
				quantity: 2,
				name: "Cola",
				price: 4.2,
				image: "https://i.ibb.co/7QpKsCX/coca-cola.png",
			
			},
			{
				discount: null,
				discountedPrice: null,
				idProduct:"6a632f95-d08d-4b68-9839-7ea3e6c9eead",
				total: 1.6,
				quantity: 1,
				name: "Coca",
				price: 1.6,
				image: "https://i.ibb.co/7QpKsCX/coca-cola.png",
			
			}
			
		]
	},
	{
		idOrder: "018d53c0-b5ac-4b88-b101-322e915f4b8c",
		idUser: "1c3c1bbe-7068-4774-b6a2-3040130a6f25",
		total: 1.6,
		status: "complete",
		ordersByProduct: [
			{
				discount: null,
				discountedPrice: null,
				idProduct:"6a632f95-d08d-4b68-9839-7ea3e6c9eead",
				total: 1.6,
				quantity: 1,
				name: "Coca",
				price: 1.6,
				image: "https://i.ibb.co/7QpKsCX/coca-cola.png",
			
			},
			{
				discount: null,
				discountedPrice: null,
				idProduct:"6a632f95-d08d-4b68-9839-7ea3e6c9eead",
				total: 1.6,
				quantity: 1,
				name: "Coca",
				price: 1.6,
				image: "https://i.ibb.co/7QpKsCX/coca-cola.png",
			
			},
			{
				discount: null,
				discountedPrice: null,
				idProduct:"6a632f95-d08d-4b68-9839-7ea3e6c9eead",
				total: 1.6,
				quantity: 1,
				name: "Coca",
				price: 1.6,
				image: "https://i.ibb.co/7QpKsCX/coca-cola.png",
			
			}
			
		]
	}
];

const Orders = () => {
	const dispatch = useDispatch();
	const handleChangesStatus = (id) => {
		if (id) {
			dispatch(changeStatusOrder(id, "complete "));
			swal("Good job!", "You change status!", "success");
		} else {
			swal("Error!", "You not change status!", "error");
		}
	};


	return (
		<div className="container">
			<div className="row">
				<div className="col-12">
					<h1>Orders</h1>
				</div>
			</div>
			<div className="row">
				<div className="col-12">
					<table className="table table-striped">
						<thead>
							<tr>
								<th scope="col">Id Order</th>
								<th scope="col">Id User</th>
								<th scope="col">Total</th>
								<th scope="col">Status</th>
								<th scope="col">Actions</th>
								<th scope="col">Details</th>

							</tr>
						</thead>
						<tbody>
							{orders.map((order) => (
								<tr key={order.idOrder}>
									<td>{order.idOrder}</td>
									<td>{order.idUser}</td>
									<td>$ {order.total}</td>
									<td>{order.status}</td>
									<td>
										<button
											className="btn btn-primary"
											onClick={() => handleChangesStatus(order.idOrder)}
										>
											Change Status
										</button>
									</td>
									<td>
										<Link to={`/order/${order.idOrder}`}>View <GrFormView /> </Link>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};
export default Orders;
