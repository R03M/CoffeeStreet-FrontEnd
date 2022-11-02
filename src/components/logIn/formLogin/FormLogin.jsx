import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
	LoginUser,
	checkEmailUser,
	logPostData,
	clearGetInfEmail
} from "../../../redux/action.js";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";
// import { useAuth0 } from "@auth0/auth0-react";
import "./formLogin.css";

const url = process.env.REACT_APP_BACK_URL;

const FormLogin = () => {
	const checkEmail = useSelector(state => state.checkEmail);
	const dispatch = useDispatch();
	const [email, setEmail] = useState("");
	const [forgot, setForgot] = useState(false);
	const [password, setPassword] = useState("");
	const tokenAcc = useSelector(state => state.accessToken);
	const navigate = useNavigate();

	let validEmail =
		/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g; // eslint-disable-next-line

	const loginUser = async e => {
		e.preventDefault();
		// console.log("email", email);
		if (!email) {
			swal("Write an email", {
				button: false,
				timer: 2000,
				icon: "warning"
			});
		}
		if (forgot) {
			try {
				const response = await axios.post(`${url}/login/forgot-pass`, { email });
				if (response) {
					swal("Please, check your email's inbox", {
						button: false,
						timer: 2500,
						icon: "success"
					});
					setForgot(false);
				}
			} catch (error) {
				swal("Any account registered with this email", {
					button: false,
					timer: 2500,
					icon: "error"
				});
			}
		} else {
			if (checkEmail.email) {
				if (!password) {
					swal("Write your password", {
						button: false,
						timer: 2000,
						icon: "warning"
					});
				} else {
					try {
						const response = await axios.post(
							`${url}/register/pass?password=${password}`,
							{ email }
						);
						if (response.data.password) {
							dispatch(
								LoginUser({
									email: email,
									password: password
								})
							);
						} else {
							swal("Password invalid", {
								button: false,
								timer: 2500,
								icon: "error"
							});
						}
						setForgot(false);
					} catch (error) {
						console.log(error);
					}
				}
			} else if (email === "" || password === "") {
				swal("You need to enter your credentials, email and password", {
					button: false,
					timer: 2500,
					icon: "error"
				});
			}
		}
		// setPassword('')
		// setEmail('')
	};

	useEffect(() => {
		if (tokenAcc) {
			dispatch(logPostData(tokenAcc));
			setTimeout(() => {
				navigate("/menu", { replace: true });
			}, 1000);
		}
	}, [dispatch, tokenAcc, navigate]);

	const handleEmail = e => {
		dispatch(clearGetInfEmail());
		if (validEmail.test(e.target.value)) {
			dispatch(checkEmailUser(e.target.value));

			if (checkEmail.isGoogle === false) {
				setEmail(e.target.value);
			}
		}
	};

	const handlePassword = e => {
		if (e.target.value.length > 2) {
			setPassword(e.target.value);
		}
	};

	const forgotPass = async e => {
		setForgot(true);
	};

	const back = async e => {
		setForgot(false);
	};
	// console.log(forgot);

	const iconCheck = () => {
		if (checkEmail.email === false || checkEmail.isGoogle === true) {
			return (
				<div>
					<AiFillCloseCircle className="btnDinamicFalseFormLC" />
				</div>
			);
		} else if (checkEmail.email === true || checkEmail.isGoogle === false) {
			return <BsFillCheckCircleFill className="btnDinamicTrueFormLC" />;
		}
	};

	return (
		<div className="contenedor-principal-login">
			{!forgot ? (
				<p className="titleFormLC">Log in with your Coffee Street account</p>
			) : (
				<p className="titleFormLC">
					We got you!
					<div>Write your email and we'll send you the steps to get it back:)</div>
				</p>
			)}

			<form className="label-imput-email">
				<div className="labelsFormLC">
					<div className="labelEmailPassWLC">
						<label>Email</label>
						<div className="dicInputAndIconCkeck">
							<input
								className="inputsFormLogC"
								type="email"
								name="email"
								placeholder="coffeeStreet@gmail.com"
								onChange={handleEmail}
							/>
							{iconCheck()}
						</div>
						<div>
							{checkEmail.email === false
								? "There is no active account with this email address"
								: null}
						</div>
						{checkEmail.isGoogle === true ? (
							<p className="errorMSGGoogle">This email is registered with Google</p>
						) : null}
					</div>

					{!forgot && (
						<div className="labelEmailPassWLC">
							<label>Password</label>
							<input
								className="inputsFormLogC"
								type="password"
								name="password"
								placeholder="●●●●●●●●"
								onChange={handlePassword}
							/>
							{password.length === 0 || password.length > 2 ? null : (
								<p>password too short</p>
							)}
						</div>
					)}
					<button
						disabled={checkEmail.isGoogle === true}
						className="button-login"
						onClick={loginUser}
					>
						{!forgot ? "Login" : "Send"}
					</button>
				</div>
				{!forgot && (
					<button onClick={forgotPass} type="button" className="button-login">
						Forgot Password?
					</button>
				)}
				{forgot && (
					<button onClick={back} className="button-login">
						Back to Login
					</button>
				)}
			</form>
		</div>
	);
};

export default FormLogin;
