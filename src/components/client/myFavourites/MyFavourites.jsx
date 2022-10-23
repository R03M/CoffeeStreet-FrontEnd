import React ,{ useEffect, useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { logPostData , getMyFavorites } from "../../../redux/action.js";
import CardP from "../../products/card/CardP.jsx";



const MyFavourites = () => {
	const accessToken = useSelector((state) => state.accessToken);
	const usuario = useSelector(state => state.user);
	const myProductsFavourites = useSelector(state => state.myFavourites);
	const [withOutFavourites, setWithOutFavourites] = useState(false);
	const dispach = useDispatch();

	// console.log("myProductsFavourites", myProductsFavourites);
	// console.log(myProductsFavourites.hasOwnProperty("errorMessage"))


	// console.log(usuario)

	// useEffect(() => {
	// 	if(accessToken){
	// 		dispach(logPostData(accessToken))
	// 	}
	// }, [dispach, accessToken])

	useEffect(() => {
		if(usuario.hasOwnProperty("user")){
			dispach(getMyFavorites(usuario.user.id))
		}


	},[ dispach, usuario])

	useEffect(() => {
		if(myProductsFavourites.hasOwnProperty("errorMessage")){
			setWithOutFavourites(true)
		}
	},[myProductsFavourites])



	return (
		<div>
					{withOutFavourites ? <h1>no hay favoritos</h1> : myProductsFavourites.map((product) =>{
						return <CardP key={product.id} product={product} />
					}
					)}



		</div>
	);
}

export default MyFavourites;
