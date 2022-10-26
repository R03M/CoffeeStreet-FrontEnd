import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getProducts } from "../../redux/action";
import { useDispatch } from "react-redux";
import { MdOutlineInventory, MdAddBusiness } from "react-icons/md";
import { ImUsers } from "react-icons/im";
import { GiNewspaper, GiProfit } from "react-icons/gi";
import { TbDiscount2 } from "react-icons/tb";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { FaFileInvoice } from "react-icons/fa";
import ProductsEdit from "../productsEdit/ProductsEdit";
import FormEditProducts from "../productsEdit/formEditProducts/formEditProducts";
import UsersE from "./usersE/UsersE";
import News from "./news/News";
import Discounts from "../discounts/Discounts";
import Profits from "./profits/Profits";
import NewProducts from "../productsEdit/formNewProducts/NewProducts";
import Orders from "../orders/Orders";
import MyAccount from "../myAccount/MyAccount";
import "./admin.css";

const Admin = () => {
	const dispatch = useDispatch();
	let [cards, setCards] = useState(true);
	let [nav, setNav] = useState(false);

	let [products, setProducts] = useState(false);
	let [switchNewProduct, setSwitchNewProduct] = useState(false);
	let [users, setUsers] = useState(false);
	let [orders, setOrders] = useState(false);
	let [news, setNews] = useState(false);
	let [discounts, setDiscounts] = useState(false);
	let [profits, setProfits] = useState(false);
	let [myAcc, setMyAcc] = useState(false);
	let [formEdit, setFormEdit] = useState(false);

	const handlerStock = () => {
		if (orders === false) {
			setOrders(true);
			setNav(true);
			setCards(false);
			setProducts(false);
			setUsers(false);
			setNews(false);
			setDiscounts(false);
			setProfits(false);
			setMyAcc(false);
			setSwitchNewProduct(false);
			setFormEdit(false);
		} else if (nav === true && orders === false) {
			setOrders(true);
			setProducts(false);
			setUsers(false);
			setNews(false);
			setDiscounts(false);
			setProfits(false);
			setMyAcc(false);
			setSwitchNewProduct(false);
			setFormEdit(false);
		}
	};

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
			setOrders(false);
			setFormEdit(false);
		} else if (nav === true && products === false) {
			setProducts(true);
			setUsers(false);
			setNews(false);
			setDiscounts(false);
			setProfits(false);
			setMyAcc(false);
			setSwitchNewProduct(false);
			setOrders(false);
			setFormEdit(false);
		}
	};
	const handlerAddNewProduct = () => {
		if (switchNewProduct === false) {
			setSwitchNewProduct(true);
			setNav(true);
			setProducts(false);
			setCards(false);
			setUsers(false);
			setNews(false);
			setDiscounts(false);
			setProfits(false);
			setMyAcc(false);
			setOrders(false);
			setFormEdit(false);
		} else if (nav === true && switchNewProduct === false) {
			setSwitchNewProduct(true);
			setProducts(false);
			setUsers(false);
			setNews(false);
			setDiscounts(false);
			setProfits(false);
			setMyAcc(false);
			setOrders(false);
			setFormEdit(false);
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
			setOrders(false);
			setFormEdit(false);
		} else if (nav === true && users === false) {
			setUsers(true);
			setProducts(false);
			setNews(false);
			setDiscounts(false);
			setProfits(false);
			setMyAcc(false);
			setSwitchNewProduct(false);
			setOrders(false);
			setFormEdit(false);
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
			setOrders(false);
			setFormEdit(false);
		} else if (nav === true && news === false) {
			setNews(true);
			setProducts(false);
			setUsers(false);
			setDiscounts(false);
			setProfits(false);
			setMyAcc(false);
			setSwitchNewProduct(false);
			setOrders(false);
			setFormEdit(false);
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
			setFormEdit(false);
			setOrders(false);
		} else if (nav === true && discounts === false) {
			setDiscounts(true);
			setProducts(false);
			setUsers(false);
			setNews(false);
			setProfits(false);
			setMyAcc(false);
			setSwitchNewProduct(false);
			setFormEdit(false);
			setOrders(false);
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
			setOrders(false);
			setFormEdit(false);
		} else if (nav === true && profits === false) {
			setProfits(true);
			setProducts(false);
			setUsers(false);
			setNews(false);
			setDiscounts(false);
			setMyAcc(false);
			setSwitchNewProduct(false);
			setOrders(false);
			setFormEdit(false);
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
			setOrders(false);
			setSwitchNewProduct(false);
			setFormEdit(false);
		} else if (nav === true && myAcc === false) {
			setMyAcc(true);
			setProducts(false);
			setUsers(false);
			setNews(false);
			setDiscounts(false);
			setProfits(false);
			setSwitchNewProduct(false);
			setOrders(false);
			setFormEdit(false);
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
		setOrders(false);
		setFormEdit(false);
	}

	function handleFormEditProduct() {
		if (formEdit === false) {
			setFormEdit(true);
			setNav(false);
			setCards(false);
			setProducts(false);
			setUsers(false);
			setNews(false);
			setDiscounts(false);
			setProfits(false);
			setMyAcc(false);
			setSwitchNewProduct(false);
			setOrders(false);
		} else if (formEdit === true) {
			setFormEdit(false);
			setNav(true);
			setProducts(true);

		}
	}
	function cardsAdmin() {
		if (cards === true) {
			return (
				<div className="divCardAd">
					<div className="cardsProducA" onClick={() => handlerProducts()}>
						<MdOutlineInventory className="iconAdminCards" />
						<p className="lettersCardsA">Products</p>
					</div>

					<div className="cardsAddNProducA" onClick={() => handlerAddNewProduct()}>
						<MdAddBusiness className="iconAdminCards" />
						<p className="lettersCardsA">Add New Product</p>
					</div>
					<div className="cardsUsersA" onClick={() => handlerUsers()}>
						<ImUsers className="iconAdminCards" />
						<p className="lettersCardsA">Users</p>
					</div>
					<div className="cardsOrdersA" onClick={() => handlerStock()}>
						<FaFileInvoice className="iconAdminCards" />
						<p className="lettersCardsA">Orders</p>
					</div>
					<div className="cardsNewsA" onClick={() => handlerNews()}>
						<GiNewspaper className="iconAdminCards" />
						<p className="lettersCardsA">Newsletter</p>
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
						className={switchNewProduct === true ? "activeTabsA" : "nbAd"}
						onClick={() => handlerAddNewProduct()}
					>
						Add New Product
					</p>
					<p
						className={users === true ? "activeTabsA" : "nbAd"}
						onClick={() => handlerUsers()}
					>
						Users
					</p>
					<p
						className={orders === true ? "activeTabsA" : "nbAd"}
						onClick={() => handlerStock()}
					>
						Orders
					</p>
					<p
						className={news === true ? "activeTabsA" : "nbAd"}
						onClick={() => handlerNews()}
					>
						Newsletter
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
						My Account
					</p>
					<p className="nbAdMoreC" onClick={() => handlerCards()}>
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
		<div className="adminDiv">
			<Link className="linkAdmin" to={"/menu"} onClick={() => dispatch(getProducts())}>
				<div className="imgBackHome"></div>
			</Link>

			{cardsAdmin()}

			{products === true && nav === true ? (
				<div className="productsAdminPC">
					<ProductsEdit editCPe={handleFormEditProduct} />
				</div>
			) : null}

			{switchNewProduct === true && nav === true ? <NewProducts /> : null}
			{users === true && nav === true ? <UsersE /> : null}
			{orders === true && nav === true ? <Orders /> : null}
			{news === true && nav === true ? <News /> : null}
			{discounts === true && nav === true ? <Discounts /> : null}
			{profits === true && nav === true ? <Profits /> : null}
			{myAcc === true && nav === true ? <MyAccount /> : null}
			{formEdit === true ? <FormEditProducts exitF={handleFormEditProduct} /> : null}
		</div>
	);
};

export default Admin;
