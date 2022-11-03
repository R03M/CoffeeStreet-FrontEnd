import React from "react";
import "./rowsMyOrder.css";

const RowsMyOrder = ({ item }) => {
	return (
		<tr>
			<th>{item.product.name}</th>
			<th> {item.quantity}</th>
			<th>{item.total / item.quantity}$</th>
		</tr>
	);
};

export default RowsMyOrder;
