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
import { refreshLog } from "../redux/action";
import ShoppingCart from "../components/ShoppingCart/ShoppingCart.jsx";

import "./App.css";
import { useEffect } from "react";

function App() {
	const dispatch = useDispatch();
	const refrest = useSelector(state => state.refreshToken)
	const user = useSelector(state => state.user)
 console.log("refrest", refrest === "")
  const accessToken = useSelector(state => state.accessToken);
	


	
	useEffect(() => {
    localStorage.setItem("refreshToken", JSON.stringify(refrest));
    localStorage.setItem("accessToken", JSON.stringify(accessToken));
  }, [accessToken, refrest]);

	useEffect(() => {
		if(refrest.length > 0){
			dispatch(refreshLog(accessToken, refrest));
			console.log("holaaaaaaaaaaaaaaaaaaaaaaaaa")
		}
	}, [dispatch, accessToken, refrest]);


	// console.log("app tokenRef", refreshToken);
	return (
		<div className="App">
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
		</div>
	);
}

export default App;
