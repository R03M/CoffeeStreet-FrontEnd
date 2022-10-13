import React from "react";
import { Link } from "react-router-dom";
import { BiDrink } from "react-icons/bi"
import { GiMilkCarton, GiWheat } from "react-icons/gi"
import { BsInfo, BsFillCartPlusFill } from "react-icons/bs"
import swal from "sweetalert";
import "./cardP.css";

const CardP = ({ product }) => {

	const alcohol = () => {
		if (product.alcohol === true) {
			return <p><BiDrink className="trueBtn"/></p>
		}
		else {
			return <p><BiDrink className="falseBtn"/></p>
		}

	}
	const lactose = () => {
		if (product.lactose === true) {
			return <p><GiMilkCarton className="trueBtn"/></p>
		}
		else {
			return <p><GiMilkCarton className="falseBtn"/></p>
		}

	}
	const gluten = () => {
		if (product.gluten === true) {
			return <p><GiWheat className="trueBtn"/></p>
		}
		else {
			return <p><GiWheat className="falseBtn"/></p>
		}

	}

	const handlerTemp = () => {
		swal({
			title: "Proximamente...",
			text: "Tal vez en el segundo Sprint",
			icon: "info",
			button: "Ok"
		});
	}

	return (
		<div className={product.stock === true ? "cardDiv" : "cardDivF" }>
			<div className="nameCard">{product.name}</div>
			<div>
				<img className="imgCard" src={product.image} alt={`Pic to ${product.name}`} />
			</div>
			<div className="divTypeCardP">
				<div>{alcohol()}</div>
				<div>{lactose()}</div>
				<div>{gluten()}</div>
				<Link className="linkCardP" to={`/products/${product.id}`}>
					<p>{<BsInfo className="btnInfoCardP"/>}</p>
				</Link>
			</div>
			<div className="divTempCart">
				<p className="pCartTemp">{`Qty`}</p>
				<input
					type="number"
					className="inputCartTemp"
					value={1}
				/>
				<p className="btnBCartTemp" onClick={(e)=> handlerTemp(e)}>Buy</p>
				<p className="btnACartTemp" onClick={(e)=> handlerTemp(e)}><BsFillCartPlusFill/></p>
			</div>
		</div>
	);
};

export default CardP;
