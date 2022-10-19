import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ROLES } from "../../../models/roles.enum";
import { User } from "../../../models/user.class";
import { postUserNew } from "../../../redux/action";
import {useDispatch} from "react-redux";

const FormS = () => {
	const initialValues = {
		name: String,
		surname: String,
		role: ROLES.CLIENT,
		email: String,
		password: String,
	};
	const dispatch = useDispatch();
	const addUser = (e)	=> {
		let user = new User(e.name, e.surname, e.role, e.email, e.password, );
		dispatch(postUserNew(user));
		console.log(user)
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
		email: Yup.string()
			.email("Invalid email")
			.required("Email is required"),
		password: Yup.string()
			.min(8, "Password too short")
			.max(12, "Password too long")
			.required("Password is required"),
	})

	return (
		<div>
			<Formik
				initialValues={initialValues}
				validationSchema={userSchema}
				onSubmit={(values) => addUser(values)}
			>
			{({values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,}
			) => (
				<Form style={{fontSize:"2rem", backgroundColor: "white"}}>
					<label htmlFor="name">Name</label>
					<Field
						id="name"
						type="text"
						name="name"
						placeholder="Jhon"
						style={{fontSize:"2rem", margin: "1rem"}}
					/>
					{errors.name && touched.name && (
						<ErrorMessage name="name" component="div"/>
					)}
					<label htmlFor="surname">Surname</label>
					<Field
						id="surname"
						type="text"
						name="surname"
						placeholder="Smith"
						style={{fontSize:"2rem", margin: "1rem"}}

					/>
					{errors.surname && touched.surname && (
						<ErrorMessage name="surname" component="div"/>
					)}
					<label htmlFor="email">Email</label>
					<Field
						id="email"
						type="email"
						name="email"
						placeholder="email"
						style={{fontSize:"2rem", margin: "1rem"}}
					/>
					{errors.email && touched.email && (
						<ErrorMessage name="email" component="div"/>
					)}
					<label htmlFor="password">Password</label>
					<Field
						id="password"
						type="password"
						name="password"
						placeholder="password"
						style={{fontSize:"2rem", margin: "1rem"}}
					/>
					{errors.password && touched.password && (
						<ErrorMessage name="password" component="div"/>
					)}
					
					<button type="submit" style={{fontSize:"2rem", padding: "1rem", backgroundColor:"green"}}>Save</button>
					{isSubmitting ? <p>Register your credentials</p> : null}
				</Form>
			)
			}
			</Formik>
		</div>
	)
};

export default FormS;
