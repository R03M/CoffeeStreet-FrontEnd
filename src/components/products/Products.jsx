import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
	clearError,
	getProducts,
	clearDetails,
	checkEmailUser,
	registerUserGoogle,
	logPostData,
	LoginUser,
	getOrCreateShoppingCart,
	getMyFavorites
} from "../../redux/action";

import NavBar from "../navbar/Navbar";
import CardP from "./card/CardP";
import NavbarProduc from "./navbarProducts/NavbarProduc";
import Pagination from "../pagination/Pagination";
import Loading from "../loading/Loading";
import ErrorSearch from "../errorSearch/ErrorSearch";
import { useAuth0 } from "@auth0/auth0-react";
import Footter from "../footter/Footter";
import "./products.css";

// import ShoppingCart from "../ShoppingCart/ShoppingCart.jsx";

const Products = () => {
	const dispatch = useDispatch();
	const allProducts = useSelector(state => state.products);
	const errorMessage = useSelector(state => state.errorSProducts);
	const checkEmail = useSelector(state => state.checkEmail);
	const cart = useSelector(state => state.cart);
	const accessToken = useSelector(state => state.accessToken);
	const newlyCreated = useSelector(state => state.newlyCreated);
	const usuario = useSelector(state => state.user);
	const { isAuthenticated, user } = useAuth0();
	// console.log('user de auth0 ')
	// console.log(user)
	// console.log('isAuthenticated');
	// console.log(isAuthenticated)
	// console.log('checkemail')
	// console.log(checkEmail);
	// console.log('newlyCreated')
	// console.log(newlyCreated)
	// console.log('usuario')
	// console.log(accessToken);

	const [currentPage, setCurrentPage] = useState(1);
	const [productsPerPage, setProductsPerPage] = useState(9);
	const max = Math.ceil(allProducts.length / productsPerPage);
	const dataEnd = allProducts.length
		? allProducts.slice(
				(currentPage - 1) * productsPerPage,
				(currentPage - 1) * productsPerPage + productsPerPage
		  )
		: null;

	useEffect(() => {
		if (isAuthenticated) {
			// console.log(user.email);
			dispatch(checkEmailUser(user.email));
		}
	}, [dispatch, isAuthenticated]);

	useEffect(() => {
		if (isAuthenticated) {
			if (checkEmail.isGoogle === false && checkEmail.email === false) {
				dispatch(
					registerUserGoogle({
						email: user.email,
						name: user.given_name,
						surname: user.family_name,
						image: user.picture,
						isGoogle: true
					})
				);
			}
		}
		if (checkEmail.isGoogle === true && checkEmail.email === true) {
			dispatch(
				LoginUser({
					email: user.email,
					isGoogle: true
					// password:"12465"
				})
			);
		}
	}, [dispatch, checkEmail]);

	useEffect(() => {
		if (newlyCreated) {
			dispatch(
				LoginUser({
					email: user.email,
					isGoogle: true
					// password:"12465"
				})
			);
			dispatch({
				type: "REGISTER_USER_GOOGLE",
				payload: false
			});
		}
	}, [dispatch, newlyCreated, user]);

	useEffect(() => {
		if (accessToken) {
			dispatch(logPostData(accessToken));
		}
	}, [dispatch, accessToken]);

	useEffect(() => {
		if (accessToken) {
			setTimeout(() => {
			dispatch(getOrCreateShoppingCart(usuario.user.auth.id));
			}, 500);
		}
	}, [ dispatch, accessToken, usuario]);

	useEffect(() => {
		if (allProducts.length === 0) {
			dispatch(getProducts());
		}
		if (usuario.user) {
			dispatch(getMyFavorites(usuario.user.id));
		}
		// setCurrentPage(1);
		dispatch(clearError());
		dispatch(clearDetails());
	}, [dispatch]);

	function pagACards() {
		if (errorMessage === "There is no product with that name") {
			return (
				<div className="productsDivErrorPC">
					<ErrorSearch />
				</div>
			);
		} else {
			if (allProducts.length) {
				return (
					<>
						<div className="navbarProduc">
							<NavbarProduc currentPage={currentPage} />
							<div className="cardsProd">
								{dataEnd.map(data => {
									return <CardP key={data.id} product={data} />;
								})}
							</div>
						</div>
						<Pagination currentPage={currentPage} setPage={setCurrentPage} max={max} />
					</>
				);
			} else {
				return <Loading />;
			}
		}
	}

	return (
		<div className="productsDiv">
			<NavBar />
			{pagACards()}
			<Footter />
		</div>
	);
};

export default Products;
