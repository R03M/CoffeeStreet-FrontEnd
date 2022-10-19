import React from "react";
import { useDispatch } from "react-redux";
import { postNewProduct } from "../../../redux/action";
import { Formik, Form, Field, ErrorMessage, isString } from "formik";
import * as Yup from "yup";
import { CATEGORIES } from "../../../models/categories.enum";
import { TEXTURES } from "../../../models/textures.enum";
import { BODY } from "../../../models/body.enum";
import { ACIDITY } from "../../../models/acidity.enum";
import { BITTERNESS } from "../../../models/bitterness.enum";
import { ROAST } from "../../../models/roast.enum";
import { COLOR } from "../../../models/color.enum";
import { productSchema } from "./schema/productSchema";
import "./newProducts.css";

const NewProducts = () => {
	const dispatch = useDispatch();

	const initialValues = {
		name: String,
		description: String,
		image: String,
		price: "",
		category: String,
		lactose: null,
		alcohol: null,
		gluten: null,
		stock: null,
		ingredients: Array,
		originCountry: String,
		isPrepared: undefined,
		state: "active",
		cream: null,
		texture: String,
		body: String,
		acidity: String,
		bitterness: String,
		roast: String,
		color: String
	};

	const addProduct = values => {
		let newProduct = {
			name: values.name,
			description: values.description,
			image:
				values.image.length > 10
					? values.image
					: "https://www.publicdomainpictures.net/pictures/280000/nahled/not-found-image-15383864787lu.jpg",
			price: values.price,
			category: values.category,
			lactose: values.lactose ? true : false,
			gluten: values.gluten ? true : false,
			alcohol: values.alcohol ? true : false,
			stock: values.stock ? true : false,
			ingredients: values.ingredients,
			originCountry: values.originCountry,
			isPrepared: values.isPrepared ? true : false,
			state: "active",
			cream: values.cream ? true : false,
			texture: values.texture,
			body: values.body,
			acidity: values.acidity,
			bitterness: values.bitterness,
			roast: values.roast,
			color: values.color
		};
		console.log(newProduct);
		console.log(typeof newProduct);
		dispatch(postNewProduct(newProduct));
	};

	return (
		<div className="formNewProductDiv">
			<Formik
				initialValues={initialValues}
				validationSchema={productSchema}
				onSubmit={values => addProduct(values)}
			>
				{({ values, touched, errors, isSubmitting, handleChange, handleBlur }) => (
					<Form className="formNewProductBody1">
						<div className="formBodyNP">
							<div className="nameFieldNewProduct">
								<label htmlFor="name">Name</label>
								<Field
									id="name"
									type="text"
									name="name"
									placeholder="Coffee By Castle Ind."
								/>
								{errors.name && touched.name && (
									<ErrorMessage name="name" component="div" />
								)}
							</div>

							<div className="descriptionFieldNewProduct">
								<label htmlFor="description">Description</label>
								<Field
									as="textarea"
									className="textAreaDescriptionNP"
									id="description"
									type="text"
									name="description"
									placeholder="It is the best coffee in the world, not for nothing is it created and processed by Castle Industries."
								/>
								{errors.description && touched.description && (
									<ErrorMessage name="description" component="div" />
								)}
							</div>

							<div className="imageFieldNewProduct">
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
							</div>

							<div className="categoryFieldNewProduct">
								<Field
									as="select"
									id="category"
									name="category"
									className="selectcard1newProduct"
								>
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
							</div>

							<div className="priceFieldNewProduct">
								<label htmlFor="price">Price</label>
								<Field id="price" type="number" name="price" placeholder="10" />
								{errors.price && touched.price && (
									<ErrorMessage name="price" component="div" />
								)}
							</div>

							<div className="stockFieldNewProduct">
								<Field
									as="select"
									id="stock"
									name="stock"
									className="selectcard1newProduct"
								>
									<option hidden>There is stock ?</option>
									<option disabled="disabled" default={true}>
										There is stock ?
									</option>
									<option value={true}>There is stock</option>
									<option value={""}>No stock</option>
								</Field>
								{errors.stock && touched.stock && (
									<ErrorMessage name="stock" component="div" />
								)}
							</div>

							<div className="isPreparedFieldNewProduct">
								<Field
									as="select"
									id="isPrepared"
									name="isPrepared"
									className="selectcard1newProduct"
								>
									<option hidden>Ready to eat ?</option>
									<option disabled="disabled" default={true}>
										Ready to eat ?
									</option>
									<option value={""}>To prepare</option>
									<option value={true}>Ready to eat</option>
								</Field>
								{errors.isPrepared && touched.isPrepared && (
									<ErrorMessage name="isPrepared" component="div" />
								)}
							</div>
						</div>

						{values.isPrepared === "true" ? (
							<div className="ingredientsAndtypesNP">
								<div className="lactoseFieldNewProduct">
									<Field
										as="select"
										id="lactose"
										name="lactose"
										className="selectcard1newProduct"
									>
										<option hidden>Contains lactose?</option>
										<option disabled="disabled" default={true}>
											Contains lactose?
										</option>
										<option value={true}>Lactose</option>
										<option value={""}>Lactose-free</option>
									</Field>
									{errors.lactose && touched.lactose && (
										<ErrorMessage name="lactose" component="div" />
									)}
								</div>

								{values.category !== "tea" ? (
									<div className="glutenFieldNewProduct">
										<Field
											as="select"
											id="gluten"
											name="gluten"
											className="selectcard1newProduct"
										>
											<option hidden>Contains gluten ?</option>
											<option disabled="disabled" default={true}>
												Contains gluten ?
											</option>
											<option value={true}>Gluten</option>
											<option value={""}>Gluten-free</option>
										</Field>
										{errors.gluten && touched.gluten && (
											<ErrorMessage name="gluten" component="div" />
										)}
									</div>
								) : null}

								<div className="alcoholFieldNewProduct">
									<Field
										as="select"
										id="alcohol"
										name="alcohol"
										className="selectcard1newProduct"
									>
										<option hidden>Contains alcohol ?</option>
										<option disabled="disabled" default={true}>
											Contains alcohol ?
										</option>
										<option value={true}>Alcohol</option>
										<option value={""}>Alcohol-free</option>
									</Field>
								</div>

								<div className="ingredientsFieldNewProduct">
									<label htmlFor="ingredients">Ingredients</label>
									<Field
										type="text"
										id="ingredients"
										name="ingredients[0]"
										placeholder="Ingredient 1"
										className="ingredientsInputNP"
									/>
									<Field
										type="text"
										id="ingredients"
										name="ingredients[1]"
										placeholder="Ingredient 2"
										className="ingredientsInputNP"
									/>
									<Field
										type="text"
										id="ingredients"
										name="ingredients[2]"
										placeholder="Ingredient 3"
										className="ingredientsInputNP"
									/>
									<Field
										type="text"
										id="ingredients"
										name="ingredients[3]"
										placeholder="Ingredient 4"
										className="ingredientsInputNP"
									/>
									<Field
										type="text"
										id="ingredients"
										name="ingredients[4]"
										placeholder="Ingredient 5"
										className="ingredientsInputNP"
									/>
								</div>
							</div>
						) : null}

						{values.isPrepared === "" && values.category === "coffee" ? (
							<div className="originCountryFieldNewProduct">
								<label htmlFor="originCountry">Origin Country</label>
								<Field
									id="originCountry"
									type="text"
									name="originCountry"
									placeholder="Canada"
								/>
								{errors.originCountry && touched.originCountry && (
									<ErrorMessage name="originCountry" component="div" />
								)}
							</div>
						) : null}

						{/*
								// * Inicio de los Atributos
						*/}
						{values.category === "coffee" && values.isPrepared === "true" ? (
							<div className="attibutesNPC">
								<div className="creamFieldNewProduct">
									<label>Attributes</label>
									<Field as="select" name="cream" className="selectcard1newProduct">
										<option hidden>Does it contain cream?</option>
										<option disabled="disabled" default={true}>
											Does it contain cream?
										</option>
										<option value={true}>With cream</option>
										<option value={""}>No cream</option>
									</Field>
								</div>

								<div className="textureFieldNewProduct">
									<Field as="select" name="texture" className="selectcard1newProduct">
										<option hidden>Texture</option>
										<option disabled="disabled" default={true}>
											Texture
										</option>
										<option value={TEXTURES.COARSE}>Coarse</option>
										<option value={TEXTURES.DESERT_DUNES}>Desert Dunes</option>
										<option value={TEXTURES.FINE}>Fine</option>
										<option value={TEXTURES.MEDIUM}>Medium</option>
										<option value={TEXTURES.VERY_FINE}>Very Fine</option>
									</Field>
								</div>

								<div className="bodyFieldNewProduct">
									<Field as="select" name="body" className="selectcard1newProduct">
										<option hidden>Body</option>
										<option disabled="disabled" default={true}>
											Body
										</option>
										<option value={BODY.LIGHT}>light</option>
										<option value={BODY.MEDIUM}>Medium</option>
										<option value={BODY.PERCEIVABLE}>perceivable</option>
										<option value={BODY.SIRUPY}>sirupy</option>
										<option value={BODY.THICK}>thick</option>
									</Field>
								</div>

								<div className="acidityFieldNewProduct">
									<Field as="select" name="acidity" className="selectcard1newProduct">
										<option hidden>Acidity</option>
										<option disabled="disabled" default={true}>
											Acidity
										</option>
										<option value={ACIDITY.FRESH}>Fresh</option>
										<option value={ACIDITY.HIGH}>High</option>
										<option value={ACIDITY.LIGHT}>Light</option>
										<option value={ACIDITY.NOT_FOUND}>Not Found</option>
										<option value={ACIDITY.PERCEIVABLE}>Perceivable</option>
									</Field>
								</div>

								<div className="bitternessFieldNewProduct">
									<Field as="select" name="bitterness" className="selectcard1newProduct">
										<option hidden>Bitterness</option>
										<option disabled="disabled" default={true}>
											Bitterness
										</option>
										<option value={BITTERNESS.HIGH}>High</option>
										<option value={BITTERNESS.LIGHT}>Light</option>
										<option value={BITTERNESS.MEDIUM}>Medium</option>
										<option value={BITTERNESS.PERCEIVABLE}>Perceivable</option>
										<option value={BITTERNESS.VERY_HIGH}>Very High</option>
									</Field>
								</div>

								<div className="roastFieldNewProduct">
									<Field as="select" name="roast" className="selectcard1newProduct">
										<option hidden>Roast</option>
										<option disabled="disabled" default={true}>
											Roast
										</option>
										<option value={ROAST.CINNAMON}>Cinnamon</option>
										<option value={ROAST.CITY}>City</option>
										<option value={ROAST.DARK}>Dark</option>
										<option value={ROAST.FRENCH}>French</option>
										<option value={ROAST.FULL_CITY}>Full City</option>
										<option value={ROAST.ITALIAN}>Italian</option>
										<option value={ROAST.LIGHT}>Light</option>
									</Field>
								</div>

								<div className="colorFieldNewProduct">
									<Field as="select" name="color" className="selectcard1newProduct">
										<option hidden>Color</option>
										<option disabled="disabled" default={true}>
											Color
										</option>
										<option value={COLOR.AMBER}>Amber</option>
										<option value={COLOR.DARK}>Dark</option>
										<option value={COLOR.DARK_BROWN}>Dark Brown</option>
										<option value={COLOR.HAZELNUT}>Hazelnut</option>
										<option value={COLOR.LIGHT_BROWN}>Light Brown</option>
										<option value={COLOR.YELLOW}>Yellow</option>
									</Field>
								</div>
							</div>
						) : null}

						<div className="btnDivNP">
							<button type="submit" className="btnSubmitNp">
								To Create
							</button>
						</div>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default NewProducts;
