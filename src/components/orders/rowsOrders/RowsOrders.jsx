import React from "react";
import { MdPreview } from "react-icons/md";
import swal from "sweetalert";
import { getAllOrders, changeStatusOrder, detailsOrder } from "../../../redux/action";
import { useDispatch } from "react-redux";
import "./rowsOrders.css";

const RowsOrders = ({ order, viewDetailsO_R }) => {
	const dispatch = useDispatch();

	const handleChangesStatus = () => {
		if (order.id) {
			dispatch(changeStatusOrder(order.id, { statusDelivery: "complete" }));
			swal("Good job!", "You change status!", "success");
			setTimeout(() => {
				dispatch(getAllOrders());
			}, 500);
		} else {
			swal("Error!", "You not change status!", "error");
		}
	};

	const handlerViewMore = () => {
		dispatch(detailsOrder(order.id));
		setTimeout(() => {
			viewDetailsO_R();
		}, 100);
	};

	return (
		<tr key={order.id}>
			<td>{order.id}</td>
			<td>{order.date}</td>
			<td>{order.idUser}</td>
			<td>$ {order.total}</td>
			<td>{order.statusDelivery}</td>
			<td>
				<button className="btnChangeStatusOC" onClick={() => handleChangesStatus()}>
					Change Status
				</button>
			</td>
			<td>
				<button className="btnDetailsOC" onClick={() => handlerViewMore()}>
					<MdPreview />
				</button>
			</td>
		</tr>
	);
};

export default RowsOrders;
