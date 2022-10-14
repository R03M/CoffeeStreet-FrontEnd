import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ROLES } from "../../../models/roles.enum";
import { User } from "../../../models/user.class";

const FormS = ( /*{add}*/ ) => {
	const initialValues = {
		name: String,
		surname: String,
		role: ROLES.CLIENT
	};

	const addUser = (e) => {
		let newUser = new User(e)
		// add(newUser) --> al componente padre
		// dispatch(postUserNew(e))
		console.log(e);
	}

	const userSchema = Yup.object().shape({
		name: Yup.string()
			.min(3, "Name too short")
			.max(10, "Name too long")
			.required("Name is required"),
		surname: Yup.string()
		.min(4, "Surname too short")
		.max(12, "Surname too long")
		.required("Surname is required"),


		/*
		ejemplo validacion de passW
		 password: Yup.string()
      .min(8, "Password too short")
      .required("Password is required"),
    // .matches(``),
    confirm: Yup.string()
      .when("password", {
        is: (value) => (value && value.length > 0 ? true : false),
        then: Yup.string().oneOf(
          [Yup.ref("password")],
          "Passwords must match!"
        ),
      })
      .required("You must confirm the password"),
		*/
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
