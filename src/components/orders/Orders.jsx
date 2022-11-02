import React, { useEffect } from "react";
import { getAllOrders } from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import RowsOrders from "./rowsOrders/RowsOrders";
import "./orders.css";

const Orders = ({ viewDetails }) => {
	const orders = useSelector(state => state.ordenes);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllOrders());
	}, [dispatch]);

	return (
		<div className="ordersDivC">
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
					{orders.map(order => {
						return <RowsOrders order={order} viewDetailsO_R={viewDetails} />;
					})}
				</tbody>
			</table>
		</div>
	);
};
export default Orders;
