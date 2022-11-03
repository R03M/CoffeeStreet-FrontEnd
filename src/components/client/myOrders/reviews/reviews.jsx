import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import {
	createReview,
	changeReviewDesc,
	changeReviewRat
} from "../../../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./reviews.css";

const Reviews = () => {
	const dispatch = useDispatch();
	const user = useSelector(state => state.user);

	const validationSchema = Yup.object({
		description: Yup.string().required("Required"),
		rating: Yup.number().min(1).max(5).required("Rating as a number between 1 and 5")
	});

	const initialValues = {
		description: "",
		rating: 0
	};

	const onSubmit = values => {
		dispatch(
			createReview({
				description: values.description,
				rating: values.rating,
				idUser: user.user.id
			})
		);
	};

	return (
		<div>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={onSubmit}
			>
				{formik => (
					<div className="contenedor-form-review">
						<form onSubmit={formik.handleSubmit}>
							<div className="input-rating-review">
								<label htmlFor="description">Description</label>
								<textarea
									type="text"
									id="description"
									name="description"
									className="textAreaReviewsFormC"
									onChange={formik.handleChange}
									value={formik.values.description}
								/>
								{formik.errors.description ? (
									<div style={{ color: "red" }}>{formik.errors.description}</div>
								) : null}
							</div>
							<div className="input-rating-review">
								<label htmlFor="rating">Rating</label>
								<input
									className={formik.errors.rating ? "errors" : "good"}
									type="number"
									id="rating"
									name="rating"
									onChange={formik.handleChange}
									value={formik.values.rating}
								/>

								{formik.errors.rating ? (
									<div style={{ color: "red" }}>{formik.errors.rating}</div>
								) : null}
							</div>
							<div className="btn-submit-review">
								<button type="submit" className="btnSubmitReviewC">
									Submit
								</button>
							</div>
						</form>
					</div>
				)}
			</Formik>
		</div>
	);
};
export default Reviews;
