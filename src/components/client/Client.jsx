import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { AiOutlineStar } from "react-icons/ai";
import { FaFileInvoiceDollar } from "react-icons/fa";
import MyAccount from "./myAccountsC/MyAccount";
import MyOrders from "./myOrders/MyOrders";
import MyFavourites from "./myFavourites/MyFavourites";
import "./client.css";

const Client = () => {
	let [cards, setCards] = useState(true);
	let [nav, setNav] = useState(false);

	let [favourites, setFavourites] = useState(false);
	let [orders, setOrders] = useState(false);
	let [myAcc, setMyAcc] = useState(false);

	const handlerFavourites = () => {
		if (favourites === false) {
			setFavourites(true);
			setNav(true);
			setCards(false);
			setOrders(false);
			setMyAcc(false);
		} else if (nav === true && favourites === false) {
			setFavourites(true);
			setOrders(false);
			setMyAcc(false);
		}
	};

	const handlerMyOrders = () => {
		if (orders === false) {
			setOrders(true);
			setNav(true);
			setCards(false);
			setFavourites(false);
			setMyAcc(false);
		} else if (nav === true && orders === false) {
			setOrders(true);
			setFavourites(false);
			setMyAcc(false);
		}
	};

	const handlerMyAcc = () => {
		if (myAcc === false) {
			setMyAcc(true);
			setNav(true);
			setCards(false);
			setFavourites(false);
			setOrders(false);
		} else if (nav === true && myAcc === false) {
			setMyAcc(true);
			setFavourites(false);
			setOrders(false);
		}
	};

	function handlerCards() {
		setCards(true);
		setNav(false);
		setFavourites(false);
		setOrders(false);
		setMyAcc(false);
	}

	function cardsClients() {
		if (cards === true) {
			return (
				<div className="divCardClient">
					<div className="cardsFauvoritesClients" onClick={() => handlerFavourites()}>
						<AiOutlineStar className="iconClientCards" />
						<p className="lettersCardsCli">My favourites</p>
					</div>
					<div className="cardsOrdersClient" onClick={() => handlerMyOrders()}>
						<FaFileInvoiceDollar className="iconClientCards" />
						<p className="lettersCardsCli">My orders</p>
					</div>
					<div className="cardsMyAccClient" onClick={() => handlerMyAcc()}>
						<RiAccountPinCircleFill className="iconClientCards" />
						<p className="lettersCardsCli">My account</p>
					</div>
				</div>
			);
		} else if (nav === true) {
			return (
				<div className="navbarClient">
					<p
						className={favourites === true ? "activeTabsCli" : "nbClient"}
						onClick={() => handlerFavourites()}
					>
						My favourites
					</p>
					<p
						className={orders === true ? "activeTabsCli" : "nbClient"}
						onClick={() => handlerMyOrders()}
					>
						My orders
					</p>
					<p
						className={myAcc === true ? "activeTabsCli" : "nbClient"}
						onClick={() => handlerMyAcc()}
					>
						My account
					</p>
					<p className="nbAdMoreCLient" onClick={() => handlerCards()}>
						Mode Cards
					</p>
				</div>
			);
		}
	}

	return (
		<div className="clientDiv">
			<Link className="linkClient" to={"/menu"}>
				<div className="imgBackHomeClient"></div>
			</Link>

			{cardsClients()}

			{favourites === true && nav === true ? <MyFavourites /> : null}
			{orders === true && nav === true ? <MyOrders /> : null}
			{myAcc === true && nav === true ? <MyAccount /> : null}
		</div>
	);
};

export default Client;
