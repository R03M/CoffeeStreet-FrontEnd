import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser, checkEmailUser, logPostData } from "../../../redux/action.js";
import { useNavigate } from "react-router-dom";
// import { useAuth0 } from "@auth0/auth0-react";
import "./formLogin.css";

const FormLogin = () => {
	// const usuario = useSelector(state => state.user);
	const checkEmail = useSelector(state => state.checkEmail);
	const dispatch = useDispatch();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const tokenAcc = useSelector(state => state.accessToken);
	const navigate = useNavigate();

	var validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

	const loginUser = e => {
		dispatch(
			LoginUser({
				email: email,
				password: password
			})
		);
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
	//   const handleEmail = (e) => {
	//  console.log(e.target.value)
	//  if(e.target.value === "") {

	//  }

	//     if(validEmail.test(e.target.value)){
	//       dispatch(checkEmailUser(e.target.value))
	//       console.log('valid')

	//       if(checkEmail.isGoogle === false){

	//         setEmail(e.target.value)

	//       }
	//     }
	//     else{
	//       dispatch(checkEmailUser(e.target.value))

	//     }

	//   }

	//   const handlePassword = (e) => {
	//     if(e.target.value.length > 2 )  {
	//     setPassword(e.target.value)
	//   }
	// }

	//ME ESTABA CAUSANDO QUE USER SE VACIARA EN EL REDUCER
	// useEffect(() => {
	//   if(accessToken) {
	//     window.location.href = "/menu"
	//   }
	// } , [accessToken])

	return (
		<div className="contenedor-principal-login">
				<p className="titleFormLC">Log in with your Coffee Street account</p>
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
			<div className="label-imput-password">
				<label className="labelsFomrLC">Password</label>
				<input
					className="inputsFormLogC"
					type="password"
					name="password"
					placeholder="●●●●●●●●"
					onChange={handlePassword}
				/>
				{password.length === 0 || password.length > 2 ? null : <p>password too short</p>}
			</div>
			<button
				disabled={checkEmail.isGoogle === true}
				className="button-login"
				onClick={loginUser}
			>
				Login
			</button>
		</div>
	);
};

export default FormLogin;
