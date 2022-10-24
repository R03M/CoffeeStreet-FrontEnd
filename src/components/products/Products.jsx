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
	logOutUser
} from "../../redux/action";

import NavBar from "../navbar/Navbar";
import NavBarClient from "../client/navClient/NavClient";
import CardP from "./card/CardP";
import NavbarProduc from "./navbarProducts/NavbarProduc";
import Pagination from "../pagination/Pagination";
import Loading from "../loading/Loading";
import ErrorSearch from "../errorSearch/ErrorSearch";
import { useAuth0 } from "@auth0/auth0-react";
import "./products.css";
import ShoppingCart from "../ShoppingCart/ShoppingCart.jsx";

const Products = () => {
	const dispatch = useDispatch();
	const allProducts = useSelector(state => state.products);
	const errorMessage = useSelector(state => state.errorSProducts);
	const checkEmail = useSelector(state => state.checkEmail);

	const accessToken = useSelector(state => state.accessToken);
	const newlyCreated = useSelector(state => state.newlyCreated);
	const usuario = useSelector(state => state.user);
	const  { isAuthenticated, user } = useAuth0();



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

				dispatch(checkEmailUser(user.email));
			}

	}, [dispatch, isAuthenticated]);

	useEffect(() => {


		if(checkEmail.isGoogle === false && checkEmail.email === false){
			dispatch(registerUserGoogle({
				email: user.email,
				name: user.given_name,
				surname: user.family_name,
				image: user.picture,
				isGoogle: true,
			}))

		}
		if(checkEmail.isGoogle === true && checkEmail.email === true){
			dispatch(LoginUser({
				email: user.email,
				isGoogle: true,
				// password:"12465"
			}))

		}
	}, [dispatch, checkEmail]);


	useEffect(() => {

		if(newlyCreated){
			dispatch(LoginUser({
				email: user.email,
				isGoogle: true,
				// password:"12465"
			}))
			dispatch({
				type: "REGISTER_USER_GOOGLE",
				payload: false
			});
		}
	}, [dispatch, newlyCreated, user]);

	useEffect(()=>{
			if(accessToken) {
				dispatch(logPostData(accessToken));
			}
  	}, [dispatch, accessToken])



			useEffect(() => {
				if (allProducts.length === 0) {
			dispatch(getProducts());
		}
		setCurrentPage(1);
		dispatch(clearError());
		dispatch(clearDetails());
	}, [dispatch, allProducts]);


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
					<div>

						<div className="cardsProd">
							{dataEnd.map(data => {
								return <CardP key={data.id} product={data}
								 				userId={ usuario?.name ? usuario.id : null}
								/>;
							})}
						</div>
						<Pagination currentPage={currentPage} setPage={setCurrentPage} max={max} />
					</div>
				);
			} else {
				<Loading />;
			}
		}
	}

	return (
		<div className="productsDiv">
		{ usuario?.name ? (

				<NavBarClient />


		  ) : (
				<NavBar />
				)}

			<div className="navbarProduc">
				<NavbarProduc />
				{pagACards()}
			</div>
		</div>
	);
};

export default Products;
