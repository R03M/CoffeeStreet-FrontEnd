import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getProducts } from "../../redux/action";
import { useDispatch } from "react-redux";
import { TbDiscount2 } from "react-icons/tb";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { BsUiChecksGrid } from "react-icons/bs";
import { FaFileInvoice } from "react-icons/fa";
import Discounts from "../discounts/Discounts";
import Orders from "../orders/Orders";
import MyAccountE from "./myAccountE/MyAccountE";
import ProductsEdit from "../productsEdit/ProductsEdit";
import "./employee.css";

const Employee = () => {
	const dispatch = useDispatch();
	let [cards, setCards] = useState(true);
	let [nav, setNav] = useState(false);

	let [stock, setStock] = useState(false);
	let [orders, setOrders] = useState(false);
	let [discounts, setDiscounts] = useState(false);
	let [myAcc, setMyAcc] = useState(false);

	const handlerStock = () => {
		if (stock === false) {
			setStock(true);
			setNav(true);
			setCards(false);
			setOrders(false);
			setDiscounts(false);
			setMyAcc(false);
		} else if (nav === true && stock === false) {
			setStock(true);
			setOrders(false);
			setDiscounts(false);
			setMyAcc(false);
		}
	};

	const handlerOrders = () => {
		if (orders === false) {
			setOrders(true);
			setNav(true);
			setCards(false);
			setStock(false);
			setDiscounts(false);
			setMyAcc(false);
		} else if (nav === true && orders === false) {
			setOrders(true);
			setStock(false);
			setDiscounts(false);
			setMyAcc(false);
		}
	};

	const handlerDiscounts = () => {
		if (discounts === false) {
			setDiscounts(true);
			setNav(true);
			setCards(false);
			setStock(false);
			setOrders(false);
			setMyAcc(false);
		} else if (nav === true && discounts === false) {
			setDiscounts(true);
			setStock(false);
			setOrders(false);
			setMyAcc(false);
		}
	};

	const handlerMyAcc = () => {
		if (myAcc === false) {
			setMyAcc(true);
			setNav(true);
			setCards(false);
			setStock(false);
			setOrders(false);
			setDiscounts(false);
		} else if (nav === true && myAcc === false) {
			setMyAcc(true);
			setStock(false);
			setOrders(false);
			setDiscounts(false);
		}
	};

	function handlerCards() {
		setCards(true);
		setNav(false);
		setStock(false);
		setOrders(false);
		setDiscounts(false);
		setMyAcc(false);
	}

	function cardsEmployee() {
		if (cards === true) {
			return (
				<div className="divCardEmployee">
					<div className="cardsStockE" onClick={() => handlerStock()}>
						<BsUiChecksGrid className="iconEmployeeCards" />
						<p className="lettersCardsEp">Stock</p>
					</div>
					<div className="cardsOrdersE" onClick={() => handlerOrders()}>
						<FaFileInvoice className="iconEmployeeCards" />
						<p className="lettersCardsEp">Orders</p>
					</div>

					<div className="cardsDiscouE" onClick={() => handlerDiscounts()}>
						<TbDiscount2 className="iconEmployeeCards" />
						<p className="lettersCardsEp">Discounts</p>
					</div>

					<div className="cardsMyAccE" onClick={() => handlerMyAcc()}>
						<RiAccountPinCircleFill className="iconEmployeeCards" />
						<p className="lettersCardsEp">My account</p>
					</div>
				</div>
			);
		} else if (nav === true) {
			return (
				<div className="navbarEmployee">
					<p
						className={stock === true ? "activeTabsEmp" : "nbEmp"}
						onClick={() => handlerStock()}
					>
						Stock
					</p>
					<p
						className={orders === true ? "activeTabsEmp" : "nbEmp"}
						onClick={() => handlerOrders()}
					>
						Orders
					</p>

					<p
						className={discounts === true ? "activeTabsEmp" : "nbEmp"}
						onClick={() => handlerDiscounts()}
					>
						Discounts
					</p>

					<p
						className={myAcc === true ? "activeTabsEmp" : "nbEmp"}
						onClick={() => handlerMyAcc()}
					>
						My account
					</p>
					<p className="nbAdMoreCEmp" onClick={() => handlerCards()}>
						Mode Cards
					</p>
				</div>
			);
		}
	}

	useEffect(() => {
		dispatch(getProducts());
	}, []);

	return (
		<div className="employeeDiv">
			<Link className="linkEmployee" to={"/menu"} onClick={() => dispatch(getProducts())}>
				<div className="imgBackHomeEmployee"></div>
			</Link>

			{cardsEmployee()}

			{stock === true && nav === true ? (
				<div className="productsEmployeePC">
					<ProductsEdit />
				</div>
			) : null}
			{orders === true && nav === true ? <Orders /> : null}
			{myAcc === true && nav === true ? <MyAccountE /> : null}
			{discounts === true && nav === true ? <Discounts /> : null}
		</div>
	);
};

export default Employee;
