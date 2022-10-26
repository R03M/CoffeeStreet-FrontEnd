import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./miAccount.css";
import { RiImageEditLine } from "react-icons/ri";
import swal from "sweetalert";
import { useDispatch } from "react-redux";
import {updateUser , deleteUser} from "../../../redux/action.js"

const MyAccount = () => {
	const user = useSelector(state => state.user);
	const [edit, setEdit] = useState(false);
	const [inputEditImage, setInputEditImage] = useState(false);
	const [passwordConfirm, setPasswordConfirm] = useState("");
	const [userEdited, setUserEdited] = useState({
		name: user.user.name,
		lastName: user.lastName,
		image: user.user.image,
		password: ""
	});
	const dispatch =  useDispatch()

	const editUser = () => {
		if (edit === false) {
			setEdit(true);
		} else {
			setEdit(false);
			setInputEditImage(false);
			setUserEdited({
				name: user.user.name,
				lastName: user.user.surname,
				image: user.user.image,
				password: ""
			});
		}
	};

	const editImage = () => {
		if (inputEditImage === false) {
			setInputEditImage(true);
		} else {
			setInputEditImage(false);
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
			alert("La contraseña no coincide");
		} else {
			swal({
				text: `Are you sure you want to delete your entire cart ?`,
				buttons: ["cancel", "confirm"],
				dangerMode: true,
				closeOnClickOutside: false,
				icon: "warning"
			}).then(value => {
				if (value) {
					dispatch(updateUser(user.user.auth.email));
					swal("Removed", {
						button: false,
						timer: 1500,
						icon: "success"
					});
				} else {
					swal("Operation cancelled", {
						button: false,
						timer: 1500,
						icon: "error"
					});
				}
			});
		}
	};

	const confirmPassword = e => {
		setPasswordConfirm(e.target.value);
	};

	const borrado = () => {
		setEdit(false);
		setInputEditImage(false);

	};

	const deleteMyAcount =() => {
		swal({
			text: `Are you sure you want to delete the account?`,
			buttons: ["cancel", "confirm"],
			dangerMode: true,
			closeOnClickOutside: false,
			icon: "warning"
		}).then(value => {
			if (value) {
				dispatch(deleteUser({
					email:user.user.auth.email
				}));
				swal("Delete", {
					button: false,
					timer: 1500,
					icon: "success"
				});
			} else {
				swal("Operation cancelled", {
					button: false,
					timer: 1500,
					icon: "error"
				});
			}
		});

	}



		return (
			<div className="contenedor-principal-mi-cuenta">
			<div className="contenedor-mi-cuenta">
				<div className="contenedor-mi-cuenta-izquierda">
					<div>
						<img className="imagen-cuenta" src={user.user.image} alt="imagen de perfil" />
						{edit ? (
							<button onClick={editImage}>
								{" "}
								<RiImageEditLine className="icono-editar-imagen" />
							</button>
						) : null}
						{inputEditImage === true ? (
							<input
								type="text"
								name="image"
								placeholder={user.user.image}
								onChange={capturar}
							/>
						) : null}
					</div>
					<h1 className="nombre-cuenta">{user.user.auth.email}</h1>
				</div>
				<div className="contenedor-mi-cuenta-derecha">
					<div className={edit ? "contenedor-mi-cuenta-derecha-arriba-borrar-cuenta" : "contenedor-mi-cuenta-derecha-arriba"}>
						{edit ? (
							<button onClick={deleteMyAcount} className="btn-borrar-cuenta">Delete Acount</button>
						) : (
							<button className="btn-Edit" onClick={editUser}>
   						 <svg class="css-i6dzq1" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-width="2" stroke="#FFFFFF" height="24" width="24" viewBox="0 0 24 24">
        				<path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
    						</svg>
    Edit
</button>
						)}
					</div>

					<div className="contenedor-mi-cuenta-derecha-abajo">
						<label>
							{" "}
							Name{" "}
							{edit === false ? (
								<input type="text" disabled placeholder={user.user.name} />
								) : (
								<input type="text" onChange={capturar} name="name" />
							)}
						</label>
						<label>
							{" "}
							Surname{" "}
							{edit === false ? (
								<input type="text" disabled placeholder={user.user.surname} />
							) : (
								<input type="text" onChange={capturar} name="lastName" />
							)}
						</label>
						<label>
							{" "}
							Password{" "}
							{edit === false ? (
								<input type="password" disabled placeholder="*********" />
								) : (
								<input type="password" onChange={capturar} name="password" />
								)}
						</label>
						<label>
							{" "}
							Confirm password{" "}
							{edit === false ? (
								<input type="password" disabled placeholder="*********" />
							) : (
								<input
									type="password"
									onChange={confirmPassword}
									name="repetePassworld"
								/>
							)}
						</label>
						<div className="btn-form-edit">
							<button className="button" onClick={submitNewUser}>
								<div class="svg-wrapper-1">
									<div class="svg-wrapper">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											width="24"
											height="24"
										>
											<path fill="none" d="M0 0h24v24H0z"></path>
											<path
												fill="currentColor"
												d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
											></path>
										</svg>
									</div>
								</div>
								<span>Send</span>
							</button>

							<button onClick={borrado} className="noselect">
								<span class="text">Cancel</span>
								<span class="icon">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										>
										<path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path>
									</svg>
								</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};



export default MyAccount;
