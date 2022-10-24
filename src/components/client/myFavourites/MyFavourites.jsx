import React  from "react";
import { useSelector } from "react-redux";
import CardP from "../../products/card/CardP.jsx";

const MyFavourites = () => {
	const myProductsFavourites = useSelector(state => state.myFavourites);

	return (
		<div>
			{myProductsFavourites.length > 0 ? (
				myProductsFavourites.map(product => {
					return <CardP key={product.id} product={product} />;
				})
			) : (
				<div>You have not added products to your favorites list yet</div>
			)}
		</div>
	);
};

export default MyFavourites;
