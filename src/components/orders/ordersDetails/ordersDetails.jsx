import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { detailsOrder } from "../../../redux/action";
import "./ordersDetails.css";

const OrdersDetails = ({ exitF }) => {
	const dispatch = useDispatch();
	const { id } = useParams();
	const orderDetails = useSelector(state => state.detailsOrder.order_product);

	useEffect(() => {
		dispatch(detailsOrder(id));
	}, [dispatch]);

	const handleExit = () => {
		exitF();
	};

	return (
		<div className="ordersDetailsDivC">
			<div className="row">
				<h1>Orders Details</h1>
			</div>
			<table className="tableOrdersDetailsC">
				<thead className="theadPOrdersDetailsC">
					<tr>
						<th scope="col">Id Order</th>
						<th scope="col">Id Product</th>
						<th scope="col">Name</th>
						<th scope="col">Quantity</th>
						<th scope="col">Total</th>
					</tr>
				</thead>
				<tbody className="tbodyOrdersDetailsC">
					{orderDetails?.map(order => (
						<tr key={order.id}>
							<td>{order.id}</td>
							<td>{order.idProduct}</td>
							<td>{order.product.name}</td>
							<td>{order.quantity}</td>
							<td>$ {order.total}</td>
						</tr>
					))}
				</tbody>
			</table>
			<div className="btnDivGoBackOrdersDetailsC">
				<button className="btnGoBackOrdersDetails" onClick={() => handleExit()}>
					Go back
				</button>
			</div>
		</div>
	);
};

export default OrdersDetails;
