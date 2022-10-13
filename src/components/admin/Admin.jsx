import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../media/mk01.jpg";
import ProductsEdit from "../productsEdit/ProductsEdit";
import UsersE from "./usersE/UsersE";
import MyAccount from "./myAccount/MyAccount";
import News from "./news/News"
import Discounts from "../discounts/Discounts";
import Profits from "./profits/Profits"
import "./admin.css";

const Admin = () => {
	const navigate = useNavigate();

	let [cards, setCards] = useState(true);
	let [nav, setNav] = useState(false);

	let [products, setProducts] = useState(false)
	let [users, setUsers] = useState(false)
	let [news, setNews] = useState(false)
	let [discounts, setDiscounts] = useState(false)
	let [profits, setProfits] = useState(false)
	let [myAcc, setMyAcc] = useState(false)

	const handlerProducts = () => {
		if (products === false) {
			setProducts(true)
			setNav(true)
			setCards(false)
			setUsers(false)
			setNews(false)
			setDiscounts(false)
			setProfits(false)
			setMyAcc(false)
		} else if (nav === true && products === false) {
			setProducts(true)
			setUsers(false)
			setNews(false)
			setDiscounts(false)
			setProfits(false)
			setMyAcc(false)
		}
	}

	const handlerUsers = () => {
		if (users === false) {
			setUsers(true)
			setNav(true)
			setCards(false)
			setProducts(false)
			setNews(false)
			setDiscounts(false)
			setProfits(false)
			setMyAcc(false)
		} else if (nav === true && users === false ) {
			setUsers(true)
			setProducts(false)
			setNews(false)
			setDiscounts(false)
			setProfits(false)
			setMyAcc(false)
		}
	}

	const handlerNews = () => {
		if (news === false) {
			setNews(true)
			setNav(true)
			setCards(false)
			setProducts(false)
			setUsers(false)
			setDiscounts(false)
			setProfits(false)
			setMyAcc(false)
		} else if (nav === true && news === false ) {
			setNews(true)
			setProducts(false)
			setUsers(false)
			setDiscounts(false)
			setProfits(false)
			setMyAcc(false)
		}
	}

	const handlerDiscounts = () => {
		if (discounts === false) {
			setDiscounts(true)
			setNav(true)
			setCards(false)
			setProducts(false)
			setUsers(false)
			setNews(false)
			setProfits(false)
			setMyAcc(false)
		} else if (nav === true && discounts === false ) {
			setDiscounts(true)
			setProducts(false)
			setUsers(false)
			setNews(false)
			setProfits(false)
			setMyAcc(false)
		}
	}

	const handlerProfits = () => {
		if (profits === false) {
			setProfits(true)
			setCards(false)
			setProducts(false)
			setUsers(false)
			setNews(false)
			setDiscounts(false)

		setMyAcc(false)
		} else if (nav === true && profits === false ) {
			setProfits(true)
			setProducts(false)
			setUsers(false)
			setNews(false)
			setDiscounts(false)
			setMyAcc(false)
		}
	}

	const handlerMyAcc = () =>{
		if (myAcc === false) {
			setMyAcc(true)
			setNav(true)
			setCards(false)
			setProducts(false)
			setUsers(false)
			setNews(false)
			setDiscounts(false)
			setProfits(false)

		} else if (nav === true && myAcc === false ) {
			setMyAcc(true)
			setProducts(false)
			setUsers(false)
			setNews(false)
			setDiscounts(false)
			setProfits(false)
		}
	}

	function handlerCards () {
		setCards(true)
		setNav(false)
		setProducts(false)
		setUsers(false)
		setNews(false)
		setDiscounts(false)
		setProfits(false)
		setMyAcc(false)
	}

	function cardsAdmin ()  {
		if (cards === true) {
			return (
			<div className="divCardAd">
				<div className="cardsProducA" onClick={() => handlerProducts()}>Products</div>
				<div className="cardsUsersA" onClick={() => handlerUsers()}>Users</div>
				<div className="cardsNewsA" onClick={() => handlerNews()}>News</div>
				<div className="cardsDiscouA" onClick={() => handlerDiscounts()}>Discounts</div>
				<div className="cardsProfitsA" onClick={() => handlerProfits()}>Profits</div>
				<div className="cardsMyAccA" onClick={()=> handlerMyAcc()}>My account</div>
			</div>
			);
		} else if (nav === true) {
			return (
				<div className="navbarAdmin">
					<p className={ products === true ? "activeTabsA" :"nbAd"} onClick={() => handlerProducts()}>Products</p>
					<p className={ users === true ? "activeTabsA" :"nbAd"} onClick={() => handlerUsers()}>Users</p>
					<p className={ news === true ? "activeTabsA" :"nbAd"} onClick={() => handlerNews()}>News</p>
					<p className={ discounts === true ? "activeTabsA" :"nbAd"} onClick={() => handlerDiscounts()}>Discounts</p>
					<p className={ profits === true ? "activeTabsA" :"nbAd"} onClick={() => handlerProfits()}>Profits</p>
					<p className={ myAcc === true ? "activeTabsA" :"nbAd"} onClick={() => handlerMyAcc()}>My account</p>
					<p className="nbAdMoreC" onClick={() => handlerCards()}>Mode Cards</p>
				</div>
			)
		}
	};

	return (
		<div className="adminDiv">
			<div className="goHome">
				<button
					type="button"
					className="imgBtn"
					onClick={() => navigate("/menu", { replace: true })}
				>
					<img src={logo} className="btnImg" />
				</button>
			</div>

		{cardsAdmin()}

		{ products === true && nav === true ? <ProductsEdit/> : null}
		{ users === true && nav === true ? <UsersE/> : null}
		{ myAcc === true && nav === true ? <MyAccount/> : null}
		{ news === true && nav === true ? <News/> : null}
		{ discounts === true && nav === true ? <Discounts/> : null}
		{ profits === true && nav === true ? <Profits/>: null}

		</div>
	);
};

export default Admin;
