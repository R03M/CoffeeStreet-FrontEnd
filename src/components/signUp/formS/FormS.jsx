import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ROLES } from "../../../models/roles.enum";
import { User } from "../../../models/user.class";
import { postUserNew } from "../../../redux/action";
import { useDispatch } from "react-redux";
import swal from "sweetalert";
import "./formS.css";

const FormS = () => {
	const dispatch = useDispatch();

	const initialValues = {
		name: String,
		surname: String,
		role: ROLES.CLIENT,
		email: String,
		password: String
	};
	const addUser = e => {
		let user = new User(e.name, e.surname, e.role, e.email, e.password);
		dispatch(postUserNew(user));
	};

	const userSchema = Yup.object().shape({
		name: Yup.string()
			.min(3, "Name too short")
			.max(10, "Name too long")
			.required("Name is required"),
		surname: Yup.string()
			.min(4, "Surname too short")
			.max(12, "Surname too long")
			.required("Surname is required"),
		email: Yup.string().email("Invalid email").required("Email is required"),
		password: Yup.string()
			.min(8, "Password too short")
			.max(12, "Password too long")
			.required("Password is required")
	});

	return (
		<div className="contenedor-principal-signUp">
			<p className="titleFormSignUpLC">Create your Coffee Street account</p>
			<Formik
				initialValues={initialValues}
				validationSchema={userSchema}
				onSubmit={values => addUser(values)}
			>
				{({ values, touched, errors, isSubmitting, handleChange, handleBlur }) => (
					<Form className="bodyFormSignUPC">
						<div className="nameFormSC">
							<label htmlFor="name" className="labelsFormSC">
								Name
							</label>
							<Field
								id="name"
								type="text"
								name="name"
								placeholder="Jhon"
								className="inputsFormSC"
							/>
							{errors.name && touched.name && (
								<ErrorMessage name="name" component="div" className="errorsMsgFSC" />
							)}
						</div>
						<div className="surnameFormSC">
							<label htmlFor="surname" className="labelsFormSC">
								Surname
							</label>
							<Field
								id="surname"
								type="text"
								name="surname"
								placeholder="Smith"
								className="inputsFormSC"
							/>
							{errors.surname && touched.surname && (
								<ErrorMessage name="surname" component="div" className="errorsMsgFSC" />
							)}
						</div>
						<div className="emailFormSC">
							<label htmlFor="email" className="labelsFormSC">
								Email
							</label>
							<Field
								id="email"
								type="email"
								name="email"
								placeholder="jhonSmith@yahoo.com"
								className="inputsFormSC"
							/>
							{errors.email && touched.email && (
								<ErrorMessage name="email" component="div" className="errorsMsgFSC" />
							)}
						</div>
						<div className="passWFormSC">
							<label htmlFor="password" className="labelsFormSC">
								Password
							</label>
							<Field
								id="password"
								type="password"
								name="password"
								placeholder="●●●●●●●●●●"
								className="inputsFormSC"
							/>
							{errors.password && touched.password && (
								<ErrorMessage name="password" component="div" className="errorsMsgFSC" />
							)}
						</div>

						<button type="submit" className="btnSingUpFormSC">
							Save
						</button>
						{isSubmitting
							? swal({
									title: "Register your credentials",
									text: "",
									icon: "success",
									button: false,
									timer: 1500
							  })
							: null}
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default FormS;
