import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage, isString } from "formik";
import { updateNews, clearErrorUpdateN } from "../../../redux/action";
import { uploadImage } from "../../../utils/cloudinary";
import * as Yup from "yup";
import swal from "sweetalert";
import "./updateNews.css";


const UpdateNews = () => {
	const dispatch = useDispatch();
	const resUpdate = useSelector(state => state.resUpdateNews);
	const [errorNoti, setErrorNoti] = useState(false);
	const [img, setImg] = useState("");

	const initialValues = {
		title: "",
		image: "",
		description: "",
		paragraph1: "",
		paragraph2: "",
		paragraph3: ""
	};

	const newsUSchema = Yup.object().shape({
		title: Yup.string()
			.min(5, "Name too short")
			.max(55, "Name too long")
			.required("Name is required"),
		image: Yup.string().matches(
			/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi, // eslint-disable-next-line
			"Enter correct url!"
		),
		description: Yup.string()
			.min(15, "Description too short")
			.max(250, "Description too long")
			.required("Description is required"),
		paragraph1: Yup.string()
			.min(15, "Paragraph 1 too short")
			.max(800, "Paragraph 1 too long")
			.required("Paragraph 1 is required"),
		paragraph2: Yup.string(),
		paragraph3: Yup.string()
	});

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

	const notiSwal = () => {
		if (resUpdate === "Updated success") {
			swal({
				title: "Updated successfully",
				icon: "success",
				button: "Ok"
			});
			setErrorNoti(false);
			dispatch(clearErrorUpdateN());
		} else if (errorNoti === true) {
			swal({
				title: "Error",
				icon: "error",
				button: "Ok"
			});
			setErrorNoti(false);
		}
	};

	const submUpdateNews = values => {
		setErrorNoti(true);
		let data = {};
		console.log(values);
		dispatch(updateNews(data));
	};
	notiSwal();

	return (
		<div className="divUpdateNewsC">
			<Formik
				initialValues={initialValues}
				validationSchema={newsUSchema}
				onSubmit={values => submUpdateNews(values)}
			>
				{({ values, touched, errors }) => (
					<Form className="formUpdateNewsC">
						<div className="titleFielUNC">
							<label htmlFor="title">Title</label>
							<Field
								id="title"
								type="text"
								name="title"
								placeholder=""
								className="inputTitleUNC"
							/>
							{errors.title && touched.title && (
								<ErrorMessage name="title" component="div" className="colorErrorMsgUNC" />
							)}
						</div>
						<div className="descriptionFieldUNC">
							<label htmlFor="description">Description</label>
							<Field
								as="textarea"
								id="description"
								name="description"
								placeholder=""
								className="inputDescripFUNC"
							/>
							{errors.description && touched.description && (
								<ErrorMessage
									name="description"
									component="div"
									className="colorErrorMsgUNC"
								/>
							)}
						</div>
						<div className="zoneImgNP">
							<div className="titleImgZoneNp">
								You can paste the url of an image or upload a local image.
							</div>
							<div className="imageFieldNewProduct">
								{img === "" ? (
									<div className="imageFieldNewProduct2">
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
												className="colorErrorMsgSNC"
											/>
										)}
									</div>
								) : (
									"You have selected a local file, if you want to change to url, tap delete image."
								)}
							</div>

							<div className="imgURLNP">
								{values.image === "" ? (
									"URL not added"
								) : (
									<img src={values.image} className="imgViewNP" />
								)}
							</div>

							<div className="btnDivCloudinaryNP">
								{values.image === "" ? (
									<div className="btnDivCloudinaryNP2">
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

							<div className="imgCludinaryNP">
								{img === "" ? (
									"No local file uploaded"
								) : (
									<img src={img} className="imgViewNP" />
								)}
							</div>
						</div>

						<div className="paragraph1FieldUNC">
							<label htmlFor="paragraph1">Paragraph 1</label>
							<Field
								as="textarea"
								id="paragraph1"
								name="paragraph1"
								placeholder=""
								className="inputparagraphUNC"
							/>
							{errors.paragraph1 && touched.paragraph1 && (
								<ErrorMessage
									name="paragraph1"
									component="div"
									className="colorErrorMsgUNC"
								/>
							)}
						</div>
						<div className="paragraph2FieldUNC">
							<label htmlFor="paragraph2">Paragraph 2</label>
							<Field
								as="textarea"
								id="paragraph2"
								name="paragraph2"
								placeholder="optional"
								className="inputparagraphUNC"
							/>
						</div>
						<div className="paragraph3FieldUNC">
							<label htmlFor="paragraph3">Paragraph 3</label>
							<Field
								as="textarea"
								id="paragraph3"
								name="paragraph3"
								placeholder="optional"
								className="inputparagraphUNC"
							/>
						</div>
						<div className="divBtnUpdNC">
							<button type="submit" className="btnUpdateNewsC">
								Update
							</button>
						</div>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default UpdateNews;
