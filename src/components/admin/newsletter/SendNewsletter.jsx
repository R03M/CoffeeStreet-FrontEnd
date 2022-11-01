import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadImage } from "../../../utils/cloudinary";
import { clearErrorSendNL, sendNewsLetter } from "../../../redux/action";
import { Formik, Form, Field, ErrorMessage, isString } from "formik";
import * as Yup from "yup";
import swal from "sweetalert";
import "./sendNewwletter.css";

const SendNewsletter = () => {
	const dispatch = useDispatch();
	const resSendNL = useSelector(state => state.resSendNewsL);
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

	const initialValues = {
		title: "",
		image: "",
		description: ""
	};

	const notiSwal = () => {
		if (
			resSendNL ===
			"The newsletter was successfully sentThe newsletter was successfully sent"
		) {
			swal({
				title: "Sent successfully",
				icon: "success",
				button: "Ok"
			});
			setErrorNoti(false);
			dispatch(clearErrorSendNL());
		} else if (errorNoti === true) {
			swal({
				title: "Error",
				icon: "error",
				button: "Ok"
			});
			setErrorNoti(false);
		}
	};

	const newsletterSchema = Yup.object().shape({
		title: Yup.string()
			.min(5, "Title too short")
			.max(55, "Title too long")
			.required("Title is required"),
		image: Yup.string().matches(
			/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi, // eslint-disable-next-line
			"Enter correct url!"
		),
		description: Yup.string()
			.min(15, "Description too short")
			.max(500, "Description too long")
			.required("Description is required")
	});

	const selectUrlImg = (formImg, cloudImg) => {
		if (formImg !== "") {
			return formImg;
		} else if (cloudImg !== "") {
			return cloudImg;
		} else {
			return "https://res.cloudinary.com/db6aq84ze/image/upload/v1667006895/coffeeStreetData/mk0_kvqxrk.jpg";
		}
	};

	const sendNews = (values, resetForm) => {
		setErrorNoti(true);
		let data = {
			title: values.title,
			image: selectUrlImg(values.image, img),
			description: values.description
		};
		console.log(data);
		dispatch(sendNewsLetter(data));
		// resetForm();
	};
	notiSwal();

	return (
		<div className="divSendNLC">
			<Formik
				initialValues={initialValues}
				validationSchema={newsletterSchema}
				onSubmit={(values, { resetForm }) => sendNews(values, resetForm)}
			>
				{({ values, touched, errors }) => (
					<Form className="formSendNLC">

						<div className="titleFieldSendNC">
							<label htmlFor="title">Title</label>
							<Field id="title" type="text" name="title" placeholder="" className="inputTitleFSNC"/>
							{errors.title && touched.title && (
								<ErrorMessage name="title" component="div" className="colorErrorMsgSNC" />
							)}
						</div>

						<div className="descriptionFieldSendNC">
							<label htmlFor="description">Description</label>
							<Field as="textarea" id="description" name="description" placeholder="" className="inputDescripFSNC"/>
							{errors.description && touched.description && (
								<ErrorMessage
									name="description"
									component="div"
									className="colorErrorMsgSNC"
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

						<div className="btnDivSNC">
							<button type="submit" className="btnSubmitSNC">
								Send
							</button>
						</div>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default SendNewsletter;
