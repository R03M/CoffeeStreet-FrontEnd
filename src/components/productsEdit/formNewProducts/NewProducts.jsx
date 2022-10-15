import React from "react";
import { Formik, Form, Field, ErrorMessage, isString } from "formik";
import * as Yup from "yup";
import { Product } from "../../../models/product.class";
import { CATEGORIES } from "../../../models/categories.enum";
import "./newProducts.css";

const NewProducts = () => {
	const initialValues = {
		name: String,
		description: String,
		image: String,
		price: Number,
		category: String,
		lactose: Boolean,
		gluten: Boolean,
		alcohol: Boolean,
		stock: Boolean,
		ingredients: Array,
		originCountry: String,
		isPrepared: Boolean,
		state: "active"
	};

	const addProduct = values => {
		let newProduct = new Product(values);
		console.log(newProduct);
	};

	const productSchema = Yup.object().shape({
		name: Yup.string()
			.min(5, "Name too short")
			.max(15, "Name too long")
			.required("Name is required"),
		description: Yup.string()
			.min(15, "Description too short")
			.max(500, "Description too long")
			.required("Description is required"),
		image: Yup.string()
			.matches(
				/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig,
				"Enter correct url!"
			)
			.required("Image is required"),
		category: Yup.string()
			.oneOf(
				[
					CATEGORIES.COFFEE,
					CATEGORIES.TEA,
					CATEGORIES.SWEET_BACKERY,
					CATEGORIES.SALTY_BACKERY,
					CATEGORIES.OTHER
				],
				"You must a select a Category"
			)
			.required("Category is required"),
		price: Yup.number()
			.min(0.1, "The price cannot be less than 0.1")
			.max(1200, "The price cannot be higher than 1200")
			.required("Price is required"),
		originCountry: Yup.string()
			.min(5, "Country too short")
			.max(15, "Country too long")
			.required("Country is required")
	});

	return (
		<div>
			<Formik
				initialValues={initialValues}
				validationSchema={productSchema}
				onSubmit={values => addProduct(values)}
			>
				{({ values, touched, errors, isSubmitting, handleChange, handleBlur }) => (
					<Form>
						<label htmlFor="name">Name</label>
						<Field
							id="name"
							type="text"
							name="name"
							placeholder="Coffee By Castle Ind."
						/>
						{errors.name && touched.name && <ErrorMessage name="name" component="div" />}
						<label htmlFor="description">Description</label>
						<Field
							as="textarea"
							id="description"
							type="text"
							name="description"
							placeholder="It is the best coffee in the world, not for nothing is it created and processed by Castle Industries."
						/>
						{errors.description && touched.description && (
							<ErrorMessage name="description" component="div" />
						)}
						<label htmlFor="image">Image</label>
						<Field
							id="image"
							type="text"
							name="image"
							placeholder="castleInd.com/coffee.jpg"
						/>
						{errors.image && touched.image && (
							<ErrorMessage name="image" component="div" />
						)}
						<Field as="select" id="category" name="category">
							<option hidden>Category</option>
							<option disabled="disabled" default={true} value="">
								Category
							</option>
							<option value={CATEGORIES.COFFEE}>Coffee</option>
							<option value={CATEGORIES.TEA}>Tea</option>
							<option value={CATEGORIES.SWEET_BACKERY}>Sweet Backery</option>
							<option value={CATEGORIES.SALTY_BACKERY}>Salty Backery</option>
							<option value={CATEGORIES.OTHER}>Other</option>
						</Field>
						{errors.category && touched.category && (
							<ErrorMessage name="category" component="div" />
						)}

						<label htmlFor="price">Price</label>
						<Field id="price" type="number" name="price" placeholder="10" />
						{errors.price && touched.price && (
							<ErrorMessage name="price" component="div" />
						)}

						<Field as="select" id="lactose" name="lactose">
							<option hidden>Contains lactose?</option>
							<option disabled="disabled" default={true}>
								Contains lactose?
							</option>
							<option value={true}>Lactose</option>
							<option value={false}>Lactose-free</option>
						</Field>
						{errors.lactose && touched.lactose && (
							<ErrorMessage name="lactose" component="div" />
						)}

						<Field as="select" id="gluten" name="gluten">
							<option hidden>Contains gluten ?</option>
							<option disabled="disabled" default={true}>
								Contains gluten ?
							</option>
							<option value={true}>Gluten</option>
							<option value={false}>Gluten-free</option>
						</Field>
						{errors.gluten && touched.gluten && (
							<ErrorMessage name="gluten" component="div" />
						)}

						<Field as="select" id="alcohol" name="alcohol">
							<option hidden>Contains alcohol ?</option>
							<option disabled="disabled" default={true}>
								Contains alcohol ?
							</option>
							<option value={true}>Alcohol</option>
							<option value={false}>Alcohol-free</option>
						</Field>

						<Field as="select" id="stock" name="stock">
							<option hidden>There is stock ?</option>
							<option disabled="disabled" default={true}>
								There is stock ?
							</option>
							<option value={true}>There is stock</option>
							<option value={false}>No stock</option>
						</Field>
						{errors.stock && touched.stock && (
							<ErrorMessage name="stock" component="div" />
						)}

						{/* <Field
							type = "text"
							id="ingredients"
							name="ingredients"
						/>
						{errors.ingredients && touched.ingredients && <ErrorMessage name="ingredients" component="div" />} */}

						<label htmlFor="originCountry">originCountry</label>
						<Field
							id="originCountry"
							type="text"
							name="originCountry"
							placeholder="Canada"
						/>
						{errors.originCountry && touched.originCountry && (
							<ErrorMessage name="originCountry" component="div" />
						)}

						<Field as="select" id="isPrepared" name="isPrepared">
							<option hidden>Ready to eat ?</option>
							<option disabled="disabled" default={true}>
								Ready to eat ?
							</option>
							<option value={true}>To prepare</option>
							<option value={false}>Ready to eat</option>
						</Field>
						{errors.isPrepared && touched.isPrepared && (
							<ErrorMessage name="isPrepared" component="div" />
						)}
						<button type="submit">To Create</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};
/**

		state: "active" / "inactive"
 */
export default NewProducts;
