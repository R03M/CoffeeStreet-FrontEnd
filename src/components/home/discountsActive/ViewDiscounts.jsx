import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsWDiscounts } from "../../../redux/action";
import "./viewDiscounts.css";
import { valuesRDiscount } from "../../../utils/valuesRDiscount";

const ViewDiscounts = () => {
	const dispatch = useDispatch();
	const [product, setProduct] = useState(0);
	const allProducts = useSelector(state => state.productsWithDiscounts);

	const countProducts = allProducts.length;

	useEffect(() => {
		dispatch(getProductsWDiscounts());
	}, [dispatch]);

	const handlerNext = () => {
		setProduct(product === countProducts - 1 ? 0 : product + 1);
	};
	const handlerPrevious = () => {
		setProduct(product === 0 ? countProducts - 1 : product - 1);
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
												<img src={e.image} className="imgViewDiscountDC" alt={`Pic of ${e.name}`}/>
											</div>
											<div className="descripAndNameDiscountC">
												<p className="descripDiscountsC">{e.description}</p>
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
