import React from "react";
import { Formik, Form, Field, ErrorMessage, isString } from "formik";
import * as Yup from "yup";
import "./viewNewsL.css";

const ViewNewsL = () => {
	const initialValues = {
		email: ""
	};

	const viewNewsSchema = Yup.object().shape({
		email: Yup.string().matches(
			/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g, // eslint-disable-next-line
			"Enter correct url!"
		)
	});

	const sendMail = (values, resetForm) => {
		console.log(values);
		resetForm();
	};

	return (
		<div>
			<Formik
				initialValues={initialValues}
				validationSchema={viewNewsSchema}
				onSubmit={(values, { resetForm }) => sendMail(values, resetForm)}
			>
				{({values, touched, errors}) => (
					<Form>
						<div>
							<Field
								id="email"
								type="text"
								name="email"
								placeholder="your@mail.com"
								className="inputEmailViewNewsC"
							/>
							{errors.email && touched.email && (
								<ErrorMessage name="email" component="div" className="colorErrorMsgVNC" />
							)}
						</div>
						<div>
							<button type="submit">Send</button>
						</div>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default ViewNewsL;
