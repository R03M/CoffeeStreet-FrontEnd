import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage, isString } from "formik";
import {
	putProducts,
	clearResPutProducts,
	clearDetailsProductId,
	getProducts
} from "../../../redux/action";
import { CATEGORIES } from "../../../models/categories.enum";
import { TEXTURES } from "../../../models/textures.enum";
import { BODY } from "../../../models/body.enum";
import { ACIDITY } from "../../../models/acidity.enum";
import { BITTERNESS } from "../../../models/bitterness.enum";
import { ROAST } from "../../../models/roast.enum";
import { COLOR } from "../../../models/color.enum";
import { productEditSchema } from "./schemaEp/formEditProductSchema.js";
import { uploadImage } from "../../../utils/cloudinary";
import swal from "sweetalert";
import "./formEditProducts.css";

const EditProducts = ({ exitF }) => {
	const dispatch = useDispatch();
	const responseOFUpdatedP = useSelector(state => state.resUpdatedProduct);
	const dataProduct = useSelector(state => state.productsDataId);
	const [errorNoti, setErrorNoti] = useState(false);
	const [img, setImg] = useState("");

	const handlerImg = async e => {
		const res = await uploadImage(e);
		if (img === "") {
			setImg(res);
		} else {
			setImg("");
		}
	};

	const deleteImg = () => {
		setImg("");
	};

	const handleExit = () => {
		dispatch(clearDetailsProductId());
		exitF();
	};

	function categorySwith(category, isPrepared) {
		if (category === "coffee" && isPrepared === true) {
			return CATEGORIES.COFFEE_READY_TO_DRINK;
		} else if (category === "coffee" && isPrepared === false) {
			return CATEGORIES.COFFEE_TO_PREPARED;
		} else {
			return category;
		}
	}

	let initialValues = {
		name: dataProduct.name,
		description: dataProduct.description,
		image: dataProduct.image,
		price: dataProduct.price,
		category: categorySwith(dataProduct.category, dataProduct.isPrepared),
		lactose: dataProduct.lactose,
		alcohol: dataProduct.alcohol,
		gluten: dataProduct.gluten,
		stock: dataProduct.stock,
		ingredients: dataProduct.ingredients,
		originCountry: dataProduct.originCountry ? dataProduct.originCountry : "",
		cream:
			dataProduct.category === "coffee" && dataProduct.isPrepared === true
				? dataProduct.attribute.cream
				: "null",
		texture:
			dataProduct.category === "coffee" && dataProduct.isPrepared === true
				? dataProduct.attribute.texture
				: "null",
		body:
			dataProduct.category === "coffee" && dataProduct.isPrepared === true
				? dataProduct.attribute.body
				: "null",
		acidity:
			dataProduct.category === "coffee" && dataProduct.isPrepared === true
				? dataProduct.attribute.acidity
				: "null",
		bitterness:
			dataProduct.category === "coffee" && dataProduct.isPrepared === true
				? dataProduct.attribute.bitterness
				: "null",
		roast:
			dataProduct.category === "coffee" && dataProduct.isPrepared === true
				? dataProduct.attribute.roast
				: "null",
		color:
			dataProduct.category === "coffee" && dataProduct.isPrepared === true
				? dataProduct.attribute.color
				: "null"
	};

	const notiSwal = () => {
		if (responseOFUpdatedP === "Success Update") {
			swal({
				title: "Update",
				text: "",
				icon: "success",
				button: "Ok"
			});
			setTimeout(() => {
				exitF();
			}, 1000);
			dispatch(clearResPutProducts());
			setErrorNoti(false);
			setTimeout(()=>{
				dispatch(getProducts())
			},500)
		} else if (errorNoti === true) {
			swal({
				title: "Error",
				text: "",
				icon: "error",
				button: "Ok"
			});
			setErrorNoti(false);
		}
	};

	const selectUrlImg = (formImg, cloudImg) => {
		if (formImg !== "") {
			return formImg;
		} else if (cloudImg !== "") {
			return cloudImg;
		} else {
			return "https://res.cloudinary.com/db6aq84ze/image/upload/v1666550286/coffeeStreet_vhewoj.png";
		}
	};

	const addProduct = values => {
		setErrorNoti(true);
		let newProduct = {
			name: values.name,
			description: values.description,
			image: selectUrlImg(values.image, img),

			price: values.price,
			category:
				values.category === CATEGORIES.COFFEE_READY_TO_DRINK ||
				values.category === CATEGORIES.COFFEE_TO_PREPARED
					? "coffee"
					: values.category,
			lactose:
				values.category === CATEGORIES.COFFEE_TO_PREPARED
					? null
					: values.lactose === "true"
					? true
					: false,
			gluten:
				values.category === CATEGORIES.COFFEE_TO_PREPARED ||
				values.category === CATEGORIES.TEA
					? null
					: values.gluten === "true"
					? true
					: false,
			alcohol:
				values.category === CATEGORIES.COFFEE_TO_PREPARED
					? null
					: values.alcohol === "true"
					? true
					: false,
			stock: values.stock === "true" ? true : false,
			ingredients:
				values.category === CATEGORIES.COFFEE_TO_PREPARED ? null : values.ingredients,
			originCountry:
				values.category === CATEGORIES.COFFEE_TO_PREPARED ? values.originCountry : null,
			isPrepared: values.category === CATEGORIES.COFFEE_TO_PREPARED ? false : true,
			cream:
				values.category === CATEGORIES.COFFEE_READY_TO_DRINK
					? values.cream === "true"
						? true
						: false
					: null,
			texture:
				values.category === CATEGORIES.COFFEE_READY_TO_DRINK ? values.texture : null,
			body: values.category === CATEGORIES.COFFEE_READY_TO_DRINK ? values.body : null,
			acidity:
				values.category === CATEGORIES.COFFEE_READY_TO_DRINK ? values.acidity : null,
			bitterness:
				values.category === CATEGORIES.COFFEE_READY_TO_DRINK ? values.bitterness : null,
			roast: values.category === CATEGORIES.COFFEE_READY_TO_DRINK ? values.roast : null,
			color: values.category === CATEGORIES.COFFEE_READY_TO_DRINK ? values.color : null
		};
		dispatch(putProducts(dataProduct.id, newProduct));
	};
	notiSwal();

	return (
		<div className="formEditProductDiv">
			<h1>Edit Product</h1>
			<Formik
				initialValues={initialValues}
				validationSchema={productEditSchema}
				onSubmit={values => addProduct(values)}
			>
				{({ values, touched, errors, isSubmitting, handleChange, handleBlur }) => (
					<Form className="formEditProductBody1">
						<div className="formBodyEP">
							<div className="nameFieldEditProduct">
								<label htmlFor="name">Name</label>
								<Field id="name" type="text" name="name" placeholder="product name" />
								{errors.name && touched.name && (
									<ErrorMessage name="name" component="div" className="colorErrorMsgEP" />
								)}
							</div>

							<div className="descriptionFieldEditProduct">
								<label htmlFor="description">Description</label>
								<Field
									as="textarea"
									className="textAreaDescriptionEP"
									id="description"
									type="text"
									name="description"
									placeholder="product description"
								/>
								{errors.description && touched.description && (
									<ErrorMessage
										name="description"
										component="div"
										className="colorErrorMsgEP"
									/>
								)}
							</div>

							<div className="zoneImgEP">
								<div className="titleImgZoneEP">
									You can paste the url of an image or upload a local image.
								</div>
								<div className="imageFieldEditProduct">
									{img === "" ? (
										<div className="imageFieldEditProduct2">
											<label htmlFor="image">Image</label>
											<Field
												id="image"
												type="seach"
												name="image"
												placeholder="www.castleInd.com/coffee.jpg"
											/>
											{errors.image && touched.image && (
												<ErrorMessage
													name="image"
													component="div"
													className="colorErrorMsgEP"
												/>
											)}
										</div>
									) : (
										"You have selected a local file, if you want to change to url, tap delete image."
									)}
								</div>

								<div className="imgURLEP">
									{values.image === "" ? (
										"URL not added"
									) : (
										<img src={values.image} className="imgViewEP" />
									)}
								</div>

								<div className="btnDivCloudinaryEP">
									{values.image === "" ? (
										<div className="btnDivCloudinaryEP2">
											<input
												type="file"
												name="file"
												onChange={handlerImg}
												accept="image/png, image/jpeg"
											/>
											<button type="button" onClick={deleteImg}>
												Delete file local
											</button>
										</div>
									) : (
										"You have entered a url, if you want to change it by local file, delete the entered url."
									)}
								</div>

								<div className="imgCludinaryEP">
									{img === "" ? (
										"No local file uploaded"
									) : (
										<img src={img} className="imgViewEP" />
									)}
								</div>
							</div>

							<div className="categoryFieldEditProduct">
								<Field
									as="select"
									id="category"
									name="category"
									className="selectcard1EditProduct"
								>
									<option hidden>Category</option>
									<option disabled="disabled" default={true} value="null">
										Category
									</option>
									<option value={CATEGORIES.COFFEE_TO_PREPARED}>Coffee to prepare</option>
									<option value={CATEGORIES.COFFEE_READY_TO_DRINK}>
										Coffee ready to drink
									</option>
									<option value={CATEGORIES.SWEET_BACKERY}>Sweet Backery</option>
									<option value={CATEGORIES.SALTY_BACKERY}>Salty Backery</option>
									<option value={CATEGORIES.TEA}>Tea</option>

									<option value={CATEGORIES.OTHER}>Other</option>
								</Field>
								{errors.category && touched.category && (
									<ErrorMessage
										name="category"
										component="div"
										className="colorErrorMsgEP"
									/>
								)}
							</div>

							<div className="priceFieldEditProduct">
								<label htmlFor="price">Price</label>
								<Field id="price" type="number" name="price" placeholder="10" />
								{errors.price && touched.price && (
									<ErrorMessage name="price" component="div" className="colorErrorMsgEP" />
								)}
							</div>

							<div className="stockFieldEditProduct">
								<Field
									as="select"
									id="stock"
									name="stock"
									className="selectcard1EditProduct"
								>
									<option hidden>There is stock ?</option>
									<option disabled="disabled" default={true} value={"null"}>
										There is stock ?
									</option>
									<option value={true}>There is stock</option>
									<option value={false}>No stock</option>
								</Field>
								{errors.stock && touched.stock && (
									<ErrorMessage name="stock" component="div" className="colorErrorMsgEP" />
								)}
							</div>
						</div>

						{values.category === CATEGORIES.COFFEE_TO_PREPARED ||
						values.category === "null" ? null : (
							<div className="ingredientsAndtypesEP">
								<div className="lactoseFieldEditProduct">
									<Field
										as="select"
										id="lactose"
										name="lactose"
										className="selectcard1EditProduct"
									>
										<option hidden>Contains lactose?</option>
										<option disabled="disabled" default={true} value={"null"}>
											Contains lactose?
										</option>
										<option value={true}>Lactose</option>
										<option value={false}>Lactose-free</option>
									</Field>
									{errors.lactose && touched.lactose && (
										<ErrorMessage
											name="lactose"
											component="div"
											className="colorErrorMsgEP"
										/>
									)}
								</div>

								{values.category !== CATEGORIES.TEA ? (
									<div className="glutenFieldEditProduct">
										<Field
											as="select"
											id="gluten"
											name="gluten"
											className="selectcard1EditProduct"
										>
											<option hidden>Contains gluten ?</option>
											<option disabled="disabled" default={true} value={"null"}>
												Contains gluten ?
											</option>
											<option value={true}>Gluten</option>
											<option value={false}>Gluten-free</option>
										</Field>
										{errors.gluten && touched.gluten && (
											<ErrorMessage
												name="gluten"
												component="div"
												className="colorErrorMsgEP"
											/>
										)}
									</div>
								) : null}

								<div className="alcoholFieldEditProduct">
									<Field
										as="select"
										id="alcohol"
										name="alcohol"
										className="selectcard1EditProduct"
									>
										<option hidden>Contains alcohol ?</option>
										<option disabled="disabled" default={true} value={"null"}>
											Contains alcohol ?
										</option>
										<option value={true}>Alcohol</option>
										<option value={false}>Alcohol-free</option>
									</Field>
									{errors.alcohol && touched.alcohol && (
										<ErrorMessage
											name="alcohol"
											component="div"
											className="colorErrorMsgEP"
										/>
									)}
								</div>

								<div className="ingredientsFieldEditProduct">
									<label htmlFor="ingredients">Ingredients</label>
									<Field
										type="text"
										id="ingredients"
										name="ingredients[0]"
										placeholder="Ingredient 1"
										className="ingredientsInputEP"
									/>
									<Field
										type="text"
										id="ingredients"
										name="ingredients[1]"
										placeholder="Ingredient 2"
										className="ingredientsInputEP"
									/>
									<Field
										type="text"
										id="ingredients"
										name="ingredients[2]"
										placeholder="Ingredient 3"
										className="ingredientsInputEP"
									/>
									<Field
										type="text"
										id="ingredients"
										name="ingredients[3]"
										placeholder="Ingredient 4"
										className="ingredientsInputEP"
									/>
									<Field
										type="text"
										id="ingredients"
										name="ingredients[4]"
										placeholder="Ingredient 5"
										className="ingredientsInputEP"
									/>
									<Field
										type="text"
										id="ingredients"
										name="ingredients[5]"
										placeholder="Ingredient 6"
										className="ingredientsInputEP"
									/>
									<Field
										type="text"
										id="ingredients"
										name="ingredients[6]"
										placeholder="Ingredient 7"
										className="ingredientsInputEP"
									/>
									<Field
										type="text"
										id="ingredients"
										name="ingredients[7]"
										placeholder="Ingredient 8"
										className="ingredientsInputEP"
									/>
									<Field
										type="text"
										id="ingredients"
										name="ingredients[8]"
										placeholder="Ingredient 9"
										className="ingredientsInputEP"
									/>
									<Field
										type="text"
										id="ingredients"
										name="ingredients[9]"
										placeholder="Ingredient 10"
										className="ingredientsInputEP"
									/>
									{errors.ingredients && touched.ingredients && (
										<ErrorMessage
											name="ingredients"
											component="div"
											className="colorErrorMsgEP"
										/>
									)}
								</div>
							</div>
						)}

						{values.category === CATEGORIES.COFFEE_TO_PREPARED ? (
							<div className="originCountryFieldNewProduct">
								<label htmlFor="originCountry">Origin Country</label>
								<Field
									id="originCountry"
									type="text"
									name="originCountry"
									placeholder="Canada"
								/>
								{errors.originCountry && touched.originCountry && (
									<ErrorMessage
										name="originCountry"
										component="div"
										className="colorErrorMsgEP"
									/>
								)}
							</div>
						) : null}

						{/*
								// * Inicio de los Atributos
						*/}
						{values.category === CATEGORIES.COFFEE_READY_TO_DRINK ? (
							<div className="attibutesEPC">
								<div className="creamFieldEditProduct">
									<label>Attributes</label>
									<Field as="select" name="cream" className="selectcard1EditProduct">
										<option hidden>Does it contain cream?</option>
										<option disabled="disabled" default={true} value={"null"}>
											Does it contain cream?
										</option>
										<option value={true}>With cream</option>
										<option value={false}>No cream</option>
									</Field>
									{errors.cream && touched.cream && (
										<ErrorMessage
											name="cream"
											component="div"
											className="colorErrorMsgEP"
										/>
									)}
								</div>

								<div className="textureFieldEditProduct">
									<Field as="select" name="texture" className="selectcard1EditProduct">
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
									{errors.texture && touched.texture && (
										<ErrorMessage
											name="texture"
											component="div"
											className="colorErrorMsgEP"
										/>
									)}
								</div>

								<div className="bodyFieldEditProduct">
									<Field as="select" name="body" className="selectcard1EditProduct">
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
									{errors.body && touched.body && (
										<ErrorMessage name="body" component="div" className="colorErrorMsgEP" />
									)}
								</div>

								<div className="acidityFieldEditProduct">
									<Field as="select" name="acidity" className="selectcard1EditProduct">
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
									{errors.acidity && touched.acidity && (
										<ErrorMessage
											name="acidity"
											component="div"
											className="colorErrorMsgEP"
										/>
									)}
								</div>

								<div className="bitternessFieldEditProduct">
									<Field as="select" name="bitterness" className="selectcard1EditProduct">
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
									{errors.bitterness && touched.bitterness && (
										<ErrorMessage
											name="bitterness"
											component="div"
											className="colorErrorMsgEP"
										/>
									)}
								</div>

								<div className="roastFieldEditProduct">
									<Field as="select" name="roast" className="selectcard1EditProduct">
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
									{errors.roast && touched.roast && (
										<ErrorMessage
											name="roast"
											component="div"
											className="colorErrorMsgEP"
										/>
									)}
								</div>

								<div className="colorFieldEditProduct">
									<Field as="select" name="color" className="selectcard1EditProduct">
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
									{errors.color && touched.color && (
										<ErrorMessage
											name="color"
											component="div"
											className="colorErrorMsgEP"
										/>
									)}
								</div>
							</div>
						) : null}

						<div className="btnDivEP">
							<button type="button" className="btnCanceltEp" onClick={() => handleExit()}>
								Cancel
							</button>
							<button type="submit" className="btnSubmitEp">
								To Create
							</button>
						</div>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default EditProducts;
