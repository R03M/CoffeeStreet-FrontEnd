import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logPostData } from "../redux/action";
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
import ShoppingCart from "../components/ShoppingCart/ShoppingCart.jsx";
import ResetPassword from "../components/resetPassword/resetPassword.jsx";
import OrdersDetails from "../components/orders/ordersDetails/ordersDetails.jsx";
import "./App.css";

const url = process.env.REACT_APP_BACK_URL;

function App() {
	const [loaded, setLoaded] = useState(false);
	const dispatch = useDispatch();
	const refresh = useSelector(state => state.refreshToken);
	const accessToken = useSelector(state => state.accessToken);
	const userData = useSelector(state => state.user);
	const [role, setRole] = useState("");

	useEffect(() => {
		const refreshToken = async function () {
			try {
				const response = await axios.post(
					`${url}/login/refresh`,
					{ refreshToken: refresh },
					{ headers: { authorization: `Bearer ${accessToken}` } }
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
	}, [accessToken, dispatch, refresh]);

	setTimeout(() => {
		if (Object.keys(userData.length !== 0)) {
			setRole(userData.user?.role);
		}
	}, 1000);

	const accessPanel = rol => {
		if (rol === "") {
			return <Navigate to="/home" />;
		}
		if (rol === "admin") {
			return <Admin />;
		}
		if (rol === "employee") {
			return <Employee />;
		}
		if (rol === "client") {
			return <Client />;
		}
	};

	return (
		<div className="App">
			{loaded ? (
				<Routes>
					<Route path="/" element={<Landing />} />
					<Route path="/home" element={<Home />} />
					<Route path="/home/blogCS" element={<CurrentNews />} />
					<Route path="/menu" element={<Products />} />
					<Route path="/products/:id" element={<ProductsDetails />} />
					<Route path="/signUp" element={<SignUp />} />
					<Route path="/signIn" element={<LogIn />} />
					<Route path="/admin" element={accessPanel(role)} />
					<Route path="/employee" element={accessPanel(role)} />
					<Route path="/client" element={accessPanel(role)} />
					<Route path="/about" element={<About />} />
					<Route path="/cart" element={<ShoppingCart />} />
					<Route path="/resetPass/:token" element={<ResetPassword />} />
					<Route path="*" element={<Error />} />
					<Route path="/order/:id" element={<OrdersDetails />} />
				</Routes>
			) : (
				<h4>Loading...</h4>
			)}
		</div>
	);
}

export default App;
