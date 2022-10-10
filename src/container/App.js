import { Route, Routes } from "react-router-dom";
import Home from "../components/home/Home.jsx";
import SignUp from "../components/signUp/SignUp.jsx";
import LogIn from "../components/logIn/LogIn.jsx";
import Landing from "../components/Landing/Landing.jsx";
<<<<<<< HEAD
import './App.css';


function App() {
  return (
    <div className="App">
          <Routes>
            <Route path="/" element={<Landing/>}/>
            <Route path="/Home" element={<Home/>}/>
            <Route path="/Sign Up" element={<SignUp/>}/>
            <Route path="/Log In" element={<LogIn/>}/>
          </Routes>
        </div>
=======
import Admin from "../components/admin/Admin.jsx";
import Employee from "../components/employee/Employee.jsx";
import Client from "../components/client/Client.jsx";
import Error from "../components/error/Error.jsx";
import Products from "../components/products/Products.jsx";
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
>>>>>>> 560f06447730c21425d720c9ef465e2b5d830f5b

			</Routes>
		</div>
	);
}

export default App;
