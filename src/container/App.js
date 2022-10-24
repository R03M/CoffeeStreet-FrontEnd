import axios from "axios";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Home from "../components/home/Home.jsx";
import SignUp from "../components/signUp/SignUp.jsx";
import LogIn from "../components/logIn/LogIn.jsx";
import Landing from "../components/Landing/Landing.jsx";
import Admin from "../components/admin/Admin.jsx";
import Employee from "../components/employee/Employee.jsx";
import Client from "../components/client/Client.jsx";
import Error from "../components/error/Error.jsx";
import Products from "../components/products/Products.jsx";
import CurrentNews from "../components/new/currentNews/CurrentNews.jsx";
import About from "../components/About/About.jsx";
import ProductsDetails from "../components/productsDetails/ProductsDetails.jsx";
import { getMyFavorites, logPostData } from "../redux/action";
import ShoppingCart from "../components/ShoppingCart/ShoppingCart.jsx";

import "./App.css";
import { useEffect, useState } from "react";
const url = "http://localhost:3001";

function App() {
	const [loaded, setLoaded] = useState(false);
	const dispatch = useDispatch();
	const refresh = useSelector(state => state.refreshToken);
	const accessToken = useSelector(state => state.accessToken);

	useEffect(() => {
		const refreshToken = async function () {
			console.log("entre a refresh page en App");

			try {
				const response = await axios.post(
					`${url}/login/refresh`,
					{ refreshToken: refresh },
					{
						headers: {
							authorization: `Bearer ${accessToken}`
						}
					}
				);
				if (response.data.accessToken) {
					localStorage.setItem("accessToken", JSON.stringify(response.data.accessToken));
					dispatch(logPostData(accessToken));
				}
			} catch (error) {
				console.log(error);
			}
			setLoaded(true);
		};
		refreshToken();
	}, []);

	// console.log("app tokenRef", refreshToken);
	return (
		<div className="App">
			{loaded ? (
				<Routes>
					<Route path="/" element={<Landing />} />
					<Route path="/home" element={<Home />} />
					<Route path="/home/currentNews" element={<CurrentNews />} />
					<Route path="/menu" element={<Products />} />
					<Route path="/products/:id" element={<ProductsDetails />} />
					<Route path="/signUp" element={<SignUp />} />
					<Route path="/logIn" element={<LogIn />} />
					<Route path="/admin" element={<Admin />} />
					<Route path="/employee" element={<Employee />} />
					<Route path="/client" element={<Client />} />
					<Route path="/about" element={<About />} />
					<Route path="/cart" element={<ShoppingCart />} />
					<Route path="*" element={<Error />} />
				</Routes>
			) : (
				<h4>Loading...</h4>
			)}
		</div>
	);
}

export default App;
