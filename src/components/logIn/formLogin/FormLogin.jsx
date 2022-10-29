import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { LoginUser, checkEmailUser, logPostData } from "../../../redux/action.js";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

// import { useAuth0 } from "@auth0/auth0-react";
import "./formLogin.css";
const url = "http://localhost:3001";


const FormLogin = () => {
	const checkEmail = useSelector(state => state.checkEmail);
	const dispatch = useDispatch();
	const [email, setEmail] = useState("");
	const [forgot, setForgot] = useState(false);
	const [password, setPassword] = useState("");
	const tokenAcc = useSelector(state => state.accessToken);
	const navigate = useNavigate();

	let validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

	const loginUser = async e => {
		console.log("email", email);
		if(forgot){
			const response = await axios.post(`${url}/login/forgot-pass`, {email})
			if(response){
				console.log('mensaje llegara a tu bandeja de correo')
				//SWAL mensaje de swal de correo llegara a tu bandeja
			}else{
				//SWAL mensaje de error , no se envio a tu correo
			}

		}else{
			dispatch(
			LoginUser({
				email: email,
				password: password
			})
		);
		}
		setForgot(false)
	};

	useEffect(() => {
		if (tokenAcc) {
			dispatch(logPostData(tokenAcc));
			setTimeout(() => {
				navigate("/menu", { replace: true });
			}, 100);
		}
	}, [dispatch, tokenAcc, navigate]);

	const handleEmail = e => {
		if (validEmail.test(e.target.value)) {
			dispatch(checkEmailUser(e.target.value));

			if (checkEmail.isGoogle === false) {
				setEmail(e.target.value);
			}
		} else {
			dispatch(checkEmailUser(e.target.value));
		}
	};

	const handlePassword = e => {
		if (e.target.value.length > 2) {
			setPassword(e.target.value);
		}
	};

	const forgotPass = async e => {
		setForgot(true)
	}

	const back = async e => {
		setForgot(false)
	}
	console.log(forgot);

	return (
		<div className="contenedor-principal-login">
				{!forgot ?
					<p className="titleFormLC">Log in with your Coffee Street account</p> :
					<p className="titleFormLC">We got you!
					<div>Write your email and we'll send you the steps to get it back:)</div></p>
				}
			<div className="label-imput-email">
				<label className="labelsFomrLC">Email</label>
				<input
					className="inputsFormLogC"
					type="email"
					name="email"
					placeholder="coffeeStreet@gmail.com"
					onChange={handleEmail}
				/>
				{checkEmail.isGoogle === true ? (
					<p>This email is registered with Google</p>
				) : null}
			</div>
			{!forgot &&
				(<div className="label-imput-password">
				<label className="labelsFomrLC">Password</label>
				<input
					className="inputsFormLogC"
					type="password"
					name="password"
					placeholder="●●●●●●●●"
					onChange={handlePassword}
				/>
				{password.length === 0 || password.length > 2 ? null : <p>password too short</p>}
			</div>)
			}
			{!forgot &&
				<button
				onClick={forgotPass}
			>
				Forgot Password?
			</button>
			}
			{forgot &&
				<button
				onClick={back}
			>
				Regresar a Login
			</button>
			}
			<button
				disabled={checkEmail.isGoogle === true}
				className="button-login"
				onClick={loginUser}
			>
				{!forgot ? "Login" : "Send"}
			</button>
		</div>
	);
};

export default FormLogin;
