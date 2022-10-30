import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsWDiscounts } from "../../../redux/action";
import "./viewDiscounts.css";

const ViewDiscounts = () => {
	const dispatch = useDispatch();
	const [product, setProduct] = useState(0);
	const allProducts = useSelector(state => state.productsWithDiscounts);

	const countProducts = allProducts.length;

	useEffect(() => {
		dispatch(getProductsWDiscounts());
	}, []); // eslint-disable-next-line

	const handlerNext = () => {
		setProduct(product === countProducts - 1 ? 0 : product + 1);
	};
	const handlerPrevious = () => {
		setProduct(product === 0 ? countProducts - 1 : product - 1);
	};

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
		<div className="viewDiscountsDivC">
			<div className="titleviewDiscountsC">Latest discounts</div>
			<div className="bodyproductsDiscountssC">
				<button onClick={handlerPrevious} className="btnsSlideVDC">
					◀
				</button>
				{allProducts.length > 0
					? allProducts.map((e, index) => {
							return (
								<div
									className={
										product === index ? `${"slideVDC"} ${"activeVDC"}` : "slideVDC"
									}
								>
									{product === index && (
										<div className="productsDiscountssC" key={index}>
											<div
												className={
													e.discount === null || e.discount === 0
														? ""
														: "triangleViewDiscountCardDC"
												}
											>
												<div
													className={
														e.discount === null || e.discount === 0
															? ""
															: "textTriangleViewDiscCDC"
													}
												>
													{e.discount < 0 ? null : valuesRDiscount(e.discount)}
												</div>
											</div>
											<div>
												<img src={e.image} className="imgViewDiscountDC"/>
											</div>
											<div>
												<div className="descripDiscountsC">{e.description}</div>
												<p className="nameDiscountsC">{e.name}</p>

											</div>
										</div>
									)}
								</div>
							);
					  })
					: null}
				<button onClick={handlerNext} className="btnsSlideVDC">
					▶
				</button>
			</div>
		</div>
	);
};

export default ViewDiscounts;
