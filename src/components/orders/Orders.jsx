import React, { useEffect } from "react";
import { getAllOrders, changeStatusOrder } from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { MdPreview } from "react-icons/md";
import swal from "sweetalert";
import "./orders.css";

const Orders = () => {
	const orders = useSelector(state => state.ordenes);
	const product = orders.map(order => order.order_product);
	const dispatch = useDispatch();
	// console.log(orders);
	useEffect(() => {
		dispatch(getAllOrders());
	}, [dispatch]);

	const handleChangesStatus = id => {
		if (id) {
			dispatch(changeStatusOrder(id, { statusDelivery: "complete" }));
			swal("Good job!", "You change status!", "success");
			setTimeout(() => {
				dispatch(getAllOrders());
			}, 500);
		} else {
			swal("Error!", "You not change status!", "error");
		}
	};

	return (
		<div className="container">
			<table className="tableOrdersC">
				<thead className="theadPOrdersC">
					<tr>
						<th scope="col">Id Order</th>
						<th scope="col">Date</th>
						<th scope="col">Id User</th>
						<th scope="col">Total</th>
						<th scope="col">Status</th>
						<th scope="col">Actions</th>
						<th scope="col">Details</th>
					</tr>
				</thead>
				<tbody className="tbodyOrdersC">
					{orders.map(order => (
						<tr key={order.id}>
							<td>{order.id}</td>
							<td>{order.date}</td>
							<td>{order.idUser}</td>
							<td>$ {order.total}</td>
							<td>{order.statusDelivery}</td>
							<td>
								<button
									className="btnChangeStatusOC"
									onClick={() => handleChangesStatus(order.id)}
								>
									Change Status
								</button>
							</td>
							<td>
								<Link to={`/order/${order.id}`}>
									<MdPreview className="btnDetailsOC"/>
								</Link>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};
export default Orders;
