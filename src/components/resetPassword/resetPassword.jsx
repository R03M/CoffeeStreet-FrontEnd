import React, { useEffect } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { useSelector } from "react-redux";
// import swal from "sweetalert";
import "../signUp/formS/formS.css";
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
const url = "http://localhost:3001";


const ResetPassword = () => {
const { token } = useParams() // resetToken
	const accessToken = useSelector(state => state.accessToken);
	const navigate = useNavigate();

	const initialValues = {
		password1: String,
		password2: String
	};

	const changePassword = async e => {
		try {
			const newPassword = e.password1

			if(newPassword === e.password2){
				const response = await axios.post(`${url}/login/reset-pass`, {
				newPassword,
				token
			});
			if (response) {
				setTimeout(() => {
					navigate("/menu", { replace: true });
				}, 500);
				// SWAL mensaje de exito, password cambiado
			} else {
				// SWAL mensaje de error
				console.log("error http");
			}
			}else{
				console.log("passwords no son iguales");
			}
		} catch (error) {
			console.log("error at reseting password");
		}
	};

	const userSchema = Yup.object().shape({
		password1: Yup.string()
			.min(8, "Password too short")
			.max(12, "Password too long")
			.required("Password is required"),

		password2: Yup.string()
			.min(8, "Password too short")
			.max(12, "Password too long")
			.required("Password is required")
	});

	return (
		<div className="contenedor-principal-signUp">
			<p className="titleFormSignUpLC">Change your Password</p>
			<Formik
				initialValues={initialValues}
				validationSchema={userSchema}
				onSubmit={values => changePassword(values)}
			>
				{({ values, touched, errors, isSubmitting, handleChange, handleBlur }) => (
					<Form className="bodyFormSignUPC">
						<div className="nameFormSC">
							<label htmlFor="name" className="labelsFormSC">
								Password
							</label>
							<Field
								id="password1"
								type="text"
								name="password1"
								placeholder="New Password"
								className="inputsFormSC"
							/>
							{errors.password1 && touched.password1 && (
								<ErrorMessage name="name" component="div" className="errorsMsgFSC" />
							)}
						</div>
						<div className="">
							<label htmlFor="name" className="labelsFormSC">
								Repeat password
							</label>
							<Field
								id="password2"
								type="text"
								name="password2"
								placeholder="Repeat Password"
								className="inputsFormSC"
							/>
							{errors.password2 && touched.password2 && (
								<ErrorMessage name="name" component="div" className="errorsMsgFSC" />
							)}
						</div>

						<button type="submit" className="btnSingUpFormSC">
							Save
						</button>
						{/* {isSubmitting
							? swal({
									title: "Register your credentials",
									text: "",
									icon: "success",
									button: false,
									timer: 1500
							  })
							: null} */}
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default ResetPassword;
