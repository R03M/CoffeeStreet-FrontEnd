import { Route, Routes } from "react-router-dom";
import Home from "../components/home/Home.jsx";
import SignUp from "../components/signUp/SignUp.jsx";
import LogIn from "../components/logIn/LogIn.jsx";
import Landing from "../components/Landing/Landing.jsx";
import Admin from "../components/admin/Admin.jsx";
import Employee from "../components/employee/Employee.jsx";
import Client from "../components/client/Client.jsx";
import Error from "../components/error/Error.jsx";
import Products from "../components/products/Products.jsx";
import About from "../components/About/About.jsx";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/home" element={<Home />} />
				<Route path="/menu" element={<Products />} />
				<Route path="/signUp" element={<SignUp />} />
				<Route path="/logIn" element={<LogIn />} />
				<Route path="/admin" element={<Admin />} />
				<Route path="/employee" element={<Employee />} />
				<Route path="/client" element={<Client />} />
				<Route path="*" element={<Error />} />
				<Route path="/about" element={<About />} />
			</Routes>
		</div>
	);
}

export default App;
