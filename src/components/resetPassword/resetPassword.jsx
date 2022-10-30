import React, { useEffect } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import swal from "sweetalert";
import "../signUp/formS/formS.css";
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
const url = "http://localhost:3001";


const ResetPassword = () => {
const { token } = useParams() // resetToken
	const navigate = useNavigate();

	const initialValues = {
		password: String,
		confirm: String
	};


	const changePassword = async e => {
		try {
			const newPassword = e.password
			if(newPassword === e.confirm){
				const response = await axios.post(`${url}/login/reset-pass`, {
				newPassword,
				token
			});
			if (response) {
				setTimeout(() => {
					navigate("/signIn", { replace: true });
				}, 1000);
				swal("Password successfully changed", {
					button: false,
					timer: 2500,
					icon: "success"
				});
			} else {
				swal("Error", {
					button: false,
					timer: 2000,
					icon: "error"
				});
			}
			}else{
				swal("Error", {
					button: false,
					timer: 2000,
					icon: "error"
				});
			}
		} catch (error) {
			swal("Error", {
					button: false,
					timer: 2000,
					icon: "error"
				});
		}
	};

	const userSchema = Yup.object().shape({
		password: Yup.string()
      .min(8, "Password too short")
      .required("Password is required"),
    confirm: Yup.string()
      .when("password", {
        is: (value) => (value && value.length > 0 ? true : false),
        then: Yup.string().oneOf(
          [Yup.ref("password")],
          "Passwords must match!"
        ),
      })
      .required("You must confirm the password"),
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
							<label htmlFor="password" className="labelsFormSC">
								Password
							</label>
							<Field
								id="password"
								type="text"
								name="password"
								placeholder="New Password"
								className="inputsFormSC"
							/>
							{errors.password && touched.password && (
								<ErrorMessage name="name" component="div" className="errorsMsgFSC" />
							)}
						</div>
						<div className="">
							<label htmlFor="confirm" className="labelsFormSC">
								Repeat password
							</label>
							<Field
								id="confirm"
								type="text"
								name="confirm"
								placeholder="Repeat Password"
								className="inputsFormSC"
							/>
							{errors.confirm && touched.confirm && (
								<ErrorMessage name="confirm" component="div" className="errorsMsgFSC" />
							)}
						</div>

						<button type="submit" className="btnSingUpFormSC">
							Save
						</button>

					</Form>
				)}
			</Formik>
		</div>
	);
};

export default ResetPassword;
