import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadImage } from "../../utils/cloudinary";
import swal from "sweetalert";
import { updateUser, deleteUser } from "../../redux/action.js";
import "./myAccount.css";

const MyAccount = () => {
	const dispatch = useDispatch();
	const user = useSelector(state => state.user);
	const [edit, setEdit] = useState(false);
	const [passwordConfirm, setPasswordConfirm] = useState("");

	const [userEdited, setUserEdited] = useState({
		name: user.user.name,
		lastName: user.lastName,
		image: user.user.image,
		password: ""
	});

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

	const editUser = () => {
		if (edit === false) {
			setEdit(true);
		} else {
			setEdit(false);
		}
	};

	const capturar = e => {
		setUserEdited({
			...userEdited,
			[e.target.name]: e.target.value
		});
	};

	const submitNewUser = e => {
		e.preventDefault();
		if (passwordConfirm !== userEdited.password) {
			swal("Passwords do not match", {
				button: false,
				timer: 1500,
				icon: "error"
			});
		} else {
			swal({
				text: `Are you sure to update?`,
				buttons: ["cancel", "confirm"],
				dangerMode: true,
				closeOnClickOutside: false,
				icon: "warning"
			}).then(value => {
				if (value) {
					dispatch(updateUser(user.user.auth.email));
					swal("Updated", {
						button: false,
						timer: 1500,
						icon: "success"
					});
				} else {
					swal("Operation cancelled", {
						button: false,
						timer: 1500,
						icon: "success"
					});
				}
			});
		}
	};

	const deleteMyAcount = () => {
		swal({
			text: `Are you sure you want to delete the account?`,
			buttons: ["cancel", "confirm"],
			dangerMode: true,
			closeOnClickOutside: false,
			icon: "warning"
		}).then(value => {
			if (value) {
				dispatch(
					deleteUser({
						email: user.user.auth.email
					})
				);
				swal("Deleted", {
					button: false,
					timer: 1500,
					icon: "success"
				});
			} else {
				swal("Operation cancelled", {
					button: false,
					timer: 1500,
					icon: "success"
				});
			}
		});
	};

	const confirmPassword = e => {
		setPasswordConfirm(e.target.value);
	};

	const cancel = () => {
		setEdit(false);
	};

	return (
		<div className="myAccDivAD">
			<div className="bodyMyAccAD">
				<div className="body1MyAccAD">
					<div className="imageMyAccAD">
						<img
							className="imgURLMYAccAD"
							srcSet={img !== "" ? img : userEdited.image}
							alt="imagen de perfil"
						/>
					</div>

					<p className="nameAccAD">{user.user.auth.email}</p>
				</div>

				<div className="body2MyAccAD">
					<div className="nameDivMyAcc">
						<p>Name</p>
						{edit === false ? (
							<input
								type="text"
								className="inputsMyAcc"
								disabled
								placeholder={user.user.name}
							/>
						) : (
							<input
								type="text"
								className="inputsMyAcc"
								onChange={capturar}
								name="name"
							/>
						)}
					</div>
					<div className="surnameDivMyAcc">
						<p>Surname</p>
						{edit === false ? (
							<input
								type="text"
								className="inputsMyAcc"
								disabled
								placeholder={user.user.surname}
							/>
						) : (
							<input
								type="text"
								className="inputsMyAcc"
								onChange={capturar}
								name="lastName"
							/>
						)}
					</div>

					<div className="imageURLDivMyAcc">
						{edit ? (
							img === "" ? (
								<div>
									<p>URL Image</p>
									<input
										type="search"
										name="image"
										className="inputsMyAcc"
										placeholder={user.user.image}
										onChange={capturar}
									/>
								</div>
							) : (
								"You have selected a local file, if you want to change to url, tap delete image."
							)
						) : null}
					</div>

					<div className="imageCloudDivMyAcc">
						{edit ? (
							userEdited.image === "" || userEdited.image === null ? (
								<div className="btnDivCloudinaryNP2">
									<p>Upload local file</p>
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
							)
						) : null}
					</div>

					<div className="passWDivMyAcc">
						{edit === false ? null : (
							<>
								<p>Password</p>
								<input
									type="text"
									className="inputsMyAcc"
									onChange={capturar}
									name="password"
								/>
							</>
						)}
					</div>
					<div className="passWCDivMyAcc">
						{edit === false ? null : (
							<>
								<p>Confirm password</p>
								<input
									type="text"
									className="inputsMyAcc"
									onChange={confirmPassword}
									name="repetePassworld"
								/>
							</>
						)}
					</div>
					<div className="allBtnsMyAcc">
						{edit ? null : (
							<>
								<button className="btnEditMyAcc" onClick={editUser}>
									Edit
								</button>
								<button onClick={deleteMyAcount} className="btnDeleteMyAcc">
									Delete my account
								</button>
							</>
						)}

						{edit === false ? null : (
							<>
								<button className="btnCancelMyAcc" onClick={cancel}>
									Cancel
								</button>

								<button className="btnSaveMyAcc" onClick={submitNewUser}>
									Save
								</button>
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default MyAccount;
