import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineInventory } from "react-icons/md";
import { ImUsers } from "react-icons/im";
import { GiNewspaper, GiProfit } from "react-icons/gi";
import { TbDiscount2 } from "react-icons/tb";
import { RiAccountPinCircleFill } from "react-icons/ri";
import ProductsEdit from "../productsEdit/ProductsEdit";
import UsersE from "./usersE/UsersE";
import MyAccount from "./myAccount/MyAccount";
import News from "./news/News";
import Discounts from "../discounts/Discounts";
import Profits from "./profits/Profits";
import "./admin.css";
import NewProducts from "../productsEdit/formNewProducts/NewProducts";

const Admin = () => {
	let [cards, setCards] = useState(true);
	let [nav, setNav] = useState(false);

	const [switchNewProduct, setSwitchNewProduct] = useState(false);

	let [products, setProducts] = useState(false);
	let [users, setUsers] = useState(false);
	let [news, setNews] = useState(false);
	let [discounts, setDiscounts] = useState(false);
	let [profits, setProfits] = useState(false);
	let [myAcc, setMyAcc] = useState(false);

	const handlerProducts = () => {
		if (products === false) {
			setProducts(true);
			setNav(true);
			setCards(false);
			setUsers(false);
			setNews(false);
			setDiscounts(false);
			setProfits(false);
			setMyAcc(false);
			setSwitchNewProduct(false);
		} else if (nav === true && products === false) {
			setProducts(true);
			setUsers(false);
			setNews(false);
			setDiscounts(false);
			setProfits(false);
			setMyAcc(false);
			setSwitchNewProduct(false);
		}
	};

	const handlerUsers = () => {
		if (users === false) {
			setUsers(true);
			setNav(true);
			setCards(false);
			setProducts(false);
			setNews(false);
			setDiscounts(false);
			setProfits(false);
			setMyAcc(false);
			setSwitchNewProduct(false);
		} else if (nav === true && users === false) {
			setUsers(true);
			setProducts(false);
			setNews(false);
			setDiscounts(false);
			setProfits(false);
			setMyAcc(false);
			setSwitchNewProduct(false);
		}
	};

	const handlerNews = () => {
		if (news === false) {
			setNews(true);
			setNav(true);
			setCards(false);
			setProducts(false);
			setUsers(false);
			setDiscounts(false);
			setProfits(false);
			setMyAcc(false);
			setSwitchNewProduct(false);
		} else if (nav === true && news === false) {
			setNews(true);
			setProducts(false);
			setUsers(false);
			setDiscounts(false);
			setProfits(false);
			setMyAcc(false);
			setSwitchNewProduct(false);
		}
	};

	const handlerDiscounts = () => {
		if (discounts === false) {
			setDiscounts(true);
			setNav(true);
			setCards(false);
			setProducts(false);
			setUsers(false);
			setNews(false);
			setProfits(false);
			setMyAcc(false);
			setSwitchNewProduct(false);
		} else if (nav === true && discounts === false) {
			setDiscounts(true);
			setProducts(false);
			setUsers(false);
			setNews(false);
			setProfits(false);
			setMyAcc(false);
			setSwitchNewProduct(false);
		}
	};

	const handlerProfits = () => {
		if (profits === false) {
			setProfits(true);
			setNav(true);
			setCards(false);
			setProducts(false);
			setUsers(false);
			setNews(false);
			setDiscounts(false);
			setMyAcc(false);
			setSwitchNewProduct(false);
		} else if (nav === true && profits === false) {
			setProfits(true);
			setProducts(false);
			setUsers(false);
			setNews(false);
			setDiscounts(false);
			setMyAcc(false);
			setSwitchNewProduct(false);
		}
	};

	const handlerMyAcc = () => {
		if (myAcc === false) {
			setMyAcc(true);
			setNav(true);
			setCards(false);
			setProducts(false);
			setUsers(false);
			setNews(false);
			setDiscounts(false);
			setProfits(false);
			setSwitchNewProduct(false);
		} else if (nav === true && myAcc === false) {
			setMyAcc(true);
			setProducts(false);
			setUsers(false);
			setNews(false);
			setDiscounts(false);
			setProfits(false);
			setSwitchNewProduct(false);
		}
	};

	function handlerCards() {
		setCards(true);
		setNav(false);
		setProducts(false);
		setUsers(false);
		setNews(false);
		setDiscounts(false);
		setProfits(false);
		setMyAcc(false);
		setSwitchNewProduct(false);
	}

	function cardsAdmin() {
		if (cards === true) {
			return (
				<div className="divCardAd">
					<div className="cardsProducA" onClick={() => handlerProducts()}>
						<MdOutlineInventory className="iconAdminCards" />
						<p className="lettersCardsA">Products</p>
					</div>
					<div className="cardsUsersA" onClick={() => handlerUsers()}>
						<ImUsers className="iconAdminCards" />
						<p className="lettersCardsA">Users</p>
					</div>
					<div className="cardsNewsA" onClick={() => handlerNews()}>
						<GiNewspaper className="iconAdminCards" />
						<p className="lettersCardsA">News</p>
					</div>
					<div className="cardsDiscouA" onClick={() => handlerDiscounts()}>
						<TbDiscount2 className="iconAdminCards" />
						<p className="lettersCardsA">Discounts</p>
					</div>
					<div className="cardsProfitsA" onClick={() => handlerProfits()}>
						<GiProfit className="iconAdminCards" />
						<p className="lettersCardsA">Profits</p>
					</div>
					<div className="cardsMyAccA" onClick={() => handlerMyAcc()}>
						<RiAccountPinCircleFill className="iconAdminCards" />
						<p className="lettersCardsA">My account</p>
					</div>
				</div>
			);
		} else if (nav === true) {
			return (
				<div className="navbarAdmin">
					<p
						className={products === true ? "activeTabsA" : "nbAd"}
						onClick={() => handlerProducts()}
					>
						Products
					</p>
					<p
						className={users === true ? "activeTabsA" : "nbAd"}
						onClick={() => handlerUsers()}
					>
						Users
					</p>
					<p
						className={news === true ? "activeTabsA" : "nbAd"}
						onClick={() => handlerNews()}
					>
						News
					</p>
					<p
						className={discounts === true ? "activeTabsA" : "nbAd"}
						onClick={() => handlerDiscounts()}
					>
						Discounts
					</p>
					<p
						className={profits === true ? "activeTabsA" : "nbAd"}
						onClick={() => handlerProfits()}
					>
						Profits
					</p>
					<p
						className={myAcc === true ? "activeTabsA" : "nbAd"}
						onClick={() => handlerMyAcc()}
					>
						My account
					</p>
					<p className="nbAdMoreC" onClick={() => handlerCards()}>
						Mode Cards
					</p>
				</div>
			);
		}
	}

	function activeNewProduct() {
		setSwitchNewProduct(true);
		setProducts(false);
	}

	return (
		<div className="adminDiv">
			<Link className="linkAdmin" to={"/menu"}>
				<div className="imgBackHome"></div>
			</Link>

			{cardsAdmin()}

			{products === true && nav === true ? (
				<div>
					<div className="newProductBtnPeDiv">
						<button className="newProductBtnPe" onClick={() => activeNewProduct()}>
							Add New Product
						</button>
					</div>
					<div className="divProductsAdmin">
						<ProductsEdit />
					</div>
				</div>
			) : null}
			{switchNewProduct === true && nav === true ? <NewProducts /> : null}
			{users === true && nav === true ? <UsersE /> : null}
			{myAcc === true && nav === true ? <MyAccount /> : null}
			{news === true && nav === true ? <News /> : null}
			{discounts === true && nav === true ? <Discounts /> : null}
			{profits === true && nav === true ? <Profits /> : null}
		</div>
	);
};

export default Admin;
