import React, { useEffect } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { LoginUser, logPostData } from "../../../redux/action.js";
import * as Yup from "yup";
import { User } from "../../../models/user.class";

import { useDispatch, useSelector } from "react-redux";
// import swal from "sweetalert";
import "./formS.css";
import { useNavigate } from "react-router-dom";
const url = "http://localhost:3001";

const FormS = () => {
	const dispatch = useDispatch();
	const accessToken = useSelector(state => state.accessToken);
	const navigate = useNavigate();

	const initialValues = {
		password1: String,
		password2: String
	};
	function createHeaders(token) {
		return {
			headers: {
				Authorization: token,
				Accept: "aplication/json"
			}
		};
	}

	const changePassword = async e => {
		try {
			const headers = createHeaders(accessToken);
			const authAxios = axios.create(headers);

			const response = await authAxios.post(`${url}/login/reset-pass`, {});
			if (response) {
				dispatch();
				setTimeout(() => {
					navigate("/menu", { replace: true });
				}, 500);
			} else {
				// mensaje de error
				console.log("error at reseting password");
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
							{errors.name && touched.name && (
								<ErrorMessage name="name" component="div" className="errorsMsgFSC" />
							)}
						</div>
						<div className="nameFormSC">
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
							{errors.name && touched.name && (
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

export default FormS;
