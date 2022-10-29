import React from "react";
import { Formik, Form, Field, ErrorMessage, isString } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { saveEmailNL } from "../../../redux/action";
import swal from "sweetalert";
import "./viewNewsL.css";

const ViewNewsL = () => {
	const dispatch = useDispatch();

	const initialValues = {
		email: ""
	};

	const viewNewsSchema = Yup.object().shape({
		email: Yup.string()
			.matches(
				/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g, // eslint-disable-next-line
				"Invalid email!"
			)
			.required("An email address is required to subscribe.")
	});

	const sendMail = (values, resetForm) => {
		dispatch(saveEmailNL(values));
		resetForm();
		swal({
			title: "Successful subscription, from now on I will be aware of all the news",
			icon: "success",
			button: "ok",
			timer: 2500
		});
	};

	return (
		<div className="viewNewsDivC">
			<Formik
				initialValues={initialValues}
				validationSchema={viewNewsSchema}
				onSubmit={(values, { resetForm }) => sendMail(values, resetForm)}
			>
				{({ values, touched, errors }) => (
					<Form className="viewNewsbodyC">
						<div>
							Subscribe to our newsletter to receive news about new products and more
						</div>
						<div className="viewNewsbodyC2">
							<Field
								id="email"
								type="text"
								name="email"
								placeholder="coffeeStreet@email.com"
								className="inputEmailViewNewsC"
							/>
							<button type="submit" className="btnToSubsCribeVNC">
								to subscribe
							</button>
						</div>
						{errors.email && touched.email && (
							<ErrorMessage name="email" component="div" className="colorErrorMsgVNC" />
						)}
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default ViewNewsL;
