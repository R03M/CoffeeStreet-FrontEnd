import React from "react";
import "./cardDiscount.css";

const CardDiscount = ({ product, changeDiscount, removeDiscount }) => {
	const valuesRDiscount = value => {
		if (value === 0.1) return "off 10%";
		if (value === 0.2) return "off 20%";
		if (value === 0.3) return "off 30%";
		if (value === 0.4) return "off 40%";
		if (value === 0.5) return "off 50%";
		if (value === 0.6) return "off 60%";
		if (value === 0.7) return "off 70%";
		if (value === 0.8) return "off 80%";
		if (value === 0.9) return "off 90%";
		if (value === 1) return "off 100%";
	};

	return (
		<div className={product.stock === true ? "cardDiscountDiv" : "cardDiscountDivOutS"}>
			<div className={product.stock === false ? "triangleColorCardDC" : ""}>
				<div className={product.stock === false ? "textTriangleCDC" : ""}>
					{product.stock === true ? null : "Out Stock"}
				</div>
			</div>

			<div
				className={
					product.discount === null || product.discount === 0
						? ""
						: "triangleDiscountCardDC"
				}
			>
				<div
					className={
						product.discount === null || product.discount === 0
							? ""
							: "textTriangleDiscCDC"
					}
				>
					{product.discount < 0 ? null : valuesRDiscount(product.discount)}
				</div>
			</div>

			<p className="titleCardDC">{product.name}</p>
			<p className="priceTextCardDC">$ {product.price}</p>

			<img className="imgCardDC" src={product.image} />
			<p className="categoryCardDC">Category: {product.category}</p>
			<div className="sectorDiscountCardDC">
				<button
					onClick={() => removeDiscount(0, product.id)}
					className="btnDiscontCardDC"
				>
					Remove discount
				</button>
				<select
					onChange={e => changeDiscount(e.target.value, product.id)}
					className="applyDiscountCardDC"
				>
					<option hidden>Apply discount</option>
					<option disabled="disabled" defaultValue={true} value="">
						Apply discount
					</option>
					<option value="0.1">10%</option>
					<option value="0.2">20%</option>
					<option value="0.3">30%</option>
					<option value="0.4">40%</option>
					<option value="0.5">50%</option>
					<option value="0.6">60%</option>
					<option value="0.7">70%</option>
					<option value="0.8">80%</option>
					<option value="0.9">90%</option>
					<option value="1.0">100%</option>
				</select>
			</div>
		</div>
	);
};

export default CardDiscount;
