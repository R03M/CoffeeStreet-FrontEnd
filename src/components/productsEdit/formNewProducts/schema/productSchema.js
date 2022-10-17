import * as Yup from "yup";
import { CATEGORIES } from "../../../../models/categories.enum";

export const productSchema = Yup.object().shape({
	name: Yup.string()
		.min(5, "Name too short")
		.max(55, "Name too long")
		.required("Name is required"),
	description: Yup.string()
		.min(15, "Description too short")
		.max(500, "Description too long")
		.required("Description is required"),
	// image: Yup.string()
	// 	.matches(
	// 		/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi, // eslint-disable-next-line
	// 		"Enter correct url!"
	// 	),
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
	// originCountry: Yup.string()
	// 	.min(5, "Country too short")
	// 	.max(15, "Country too long")
});
