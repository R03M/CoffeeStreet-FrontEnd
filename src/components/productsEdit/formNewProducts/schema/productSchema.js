import * as Yup from "yup";
import { ACIDITY } from "../../../../models/acidity.enum";
import { BITTERNESS } from "../../../../models/bitterness.enum";
import { BODY } from "../../../../models/body.enum";
import { CATEGORIES } from "../../../../models/categories.enum";
import { COLOR } from "../../../../models/color.enum";
import { ROAST } from "../../../../models/roast.enum";
import { TEXTURES } from "../../../../models/textures.enum";

export const productSchema = Yup.object().shape({
	name: Yup.string()
		.min(5, "Name too short")
		.max(55, "Name too long")
		.required("Name is required"),
	//? //////////////////////////////////////////////////////////////////////////////////
	description: Yup.string()
		.min(15, "Description too short")
		.max(500, "Description too long")
		.required("Description is required"),
	//? //////////////////////////////////////////////////////////////////////////////////
	image: Yup.string().matches(
		/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi, // eslint-disable-next-line
		"Enter correct url!"
	),
	//? //////////////////////////////////////////////////////////////////////////////////
	price: Yup.number()
		.min(0.1, "The price cannot be less than 0.1")
		.max(1200, "The price cannot be higher than 1200")
		.required("Price is required"),
	//? //////////////////////////////////////////////////////////////////////////////////
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
	//? //////////////////////////////////////////////////////////////////////////////////
	isPrepared: Yup.string()
		.oneOf(["false", "true"], "You must a select a Ready to eat or not")
		.required("Ready to eat? is required"),
	//? //////////////////////////////////////////////////////////////////////////////////
	stock: Yup.string()
		.oneOf(["false", "true"], "You must select whether or not there is stock")
		.required("Stock is required"),
	//? //////////////////////////////////////////////////////////////////////////////////
	lactose: Yup.string().when("category", {
		is: CATEGORIES.COFFEE,
		then: Yup.string()
			.oneOf(["false", "true"], "You must select if it has Lactose")
			.required("Lactose is required if select coffee"),
		otherwise: Yup.string().notRequired()
	}),


	// //? //////////////////////////////////////////////////////////////////////////////////
	alcohol: Yup.string().when("category", {
		is: CATEGORIES.COFFEE,
		then: Yup.string()
			.oneOf(["false", "true"], "You must select if it has alcohol")
			.required("Alcohol is required if select coffee"),
		otherwise: Yup.string().notRequired()
	}),
	// //? //////////////////////////////////////////////////////////////////////////////////
	gluten: Yup.string().when("category", {
		is: CATEGORIES.COFFEE ,
		then: Yup.string()
			.oneOf(["false", "true"], "You must select if it has gluten")
			.required("Gluten is required if select coffee"),
		otherwise: Yup.string().notRequired()
	}),
	// //? //////////////////////////////////////////////////////////////////////////////////
	// // ingredients: Yup.array().min(1, "At least one ingredient is required").nullable(),
	// //? //////////////////////////////////////////////////////////////////////////////////
	// originCountry: Yup.string().when("category", "isPrepared", {
	// 	is: "category" === CATEGORIES.COFFEE && "isPrepared" === "false",
	// 	then: Yup.string()
	// 		.min(4, "The country name is too short")
	// 		.max(25, "The name of the country is too long")
	// 		.required("Country of origin is required if coffee is selected to be brewed"),
	// 	otherwise: Yup.string().notRequired()
	// }),
	// //? //////////////////////////////////////////////////////////////////////////////////
	// cream: Yup.string().when("category", "isPrepared", {
	// 	is: "category" === CATEGORIES.COFFEE && "isPrepared" === "true",
	// 	then: Yup.string()
	// 		.oneOf(["false", "true"], "You must select if it has cream.")
	// 		.required("Cream is required if ready-to-drink coffee is selected"),
	// 	otherwise: Yup.string().notRequired()
	// }),
	// //? //////////////////////////////////////////////////////////////////////////////////
	// texture: Yup.string().when("category", "isPrepared", {
	// 	is: "category" === CATEGORIES.COFFEE && "isPrepared" === "true",
	// 	then: Yup.string()
	// 		.oneOf(
	// 			[
	// 				TEXTURES.COARSE,
	// 				TEXTURES.DESERT_DUNES,
	// 				TEXTURES.FINE,
	// 				TEXTURES.MEDIUM,
	// 				TEXTURES.VERY_FINE
	// 			],
	// 			"You must a select a texture"
	// 		)
	// 		.required("Texture is required if ready-to-drink coffee is selected"),
	// 	otherwise: Yup.string().notRequired()
	// }),

	// //? //////////////////////////////////////////////////////////////////////////////////
	// body: Yup.string().when("category", "isPrepared", {
	// 	is: "category" === CATEGORIES.COFFEE && "isPrepared" === "true",
	// 	then: Yup.string()
	// 	.oneOf(
	// 		[BODY.LIGHT, BODY.MEDIUM, BODY.PERCEIVABLE, BODY.SIRUPY, BODY.THICK],
	// 		"You must a select a body"
	// 	)
	// 		.required("Body is required if ready-to-drink coffee is selected"),
	// 	otherwise: Yup.string().notRequired()
	// }),
	// //? //////////////////////////////////////////////////////////////////////////////////
	// acidity: Yup.string().when("category", "isPrepared", {
	// 	is: "category" === CATEGORIES.COFFEE && "isPrepared" === "true",
	// 	then: Yup.string()
	// 	.oneOf(
	// 		[
	// 			ACIDITY.FRESH,
	// 			ACIDITY.HIGH,
	// 			ACIDITY.LIGHT,
	// 			ACIDITY.NOT_FOUND,
	// 			ACIDITY.PERCEIVABLE
	// 		],
	// 		"You must a select a acidity"
	// 	)
	// 		.required("Acidity is required if ready-to-drink coffee is selected"),
	// 	otherwise: Yup.string().notRequired()
	// }),
	// //? //////////////////////////////////////////////////////////////////////////////////
	// bitterness: Yup.string().when("category", "isPrepared", {
	// 	is: "category" === CATEGORIES.COFFEE && "isPrepared" === "true",
	// 	then: Yup.string()
	// 	.oneOf(
	// 		[
	// 			BITTERNESS.HIGH,
	// 			BITTERNESS.LIGHT,
	// 			BITTERNESS.PERCEIVABLE,
	// 			BITTERNESS.MEDIUM,
	// 			BITTERNESS.VERY_HIGH
	// 		],
	// 		"You must a select a bitterness"
	// 	)
	// 		.required("Body is required if ready-to-drink coffee is selected"),
	// 	otherwise: Yup.string().notRequired()
	// }),
	// //? //////////////////////////////////////////////////////////////////////////////////
	// roast: Yup.string().when("category", "isPrepared", {
	// 	is: "category" === CATEGORIES.COFFEE && "isPrepared" === "true",
	// 	then: Yup.string()
	// 	.oneOf(
	// 		[
	// 			ROAST.CINNAMON,
	// 			ROAST.CITY,
	// 			ROAST.DARK,
	// 			ROAST.FRENCH,
	// 			ROAST.FULL_CITY,
	// 			ROAST.ITALIAN,
	// 			ROAST.LIGHT
	// 		],
	// 		"You must a select a roast"
	// 	)
	// 		.required("Body is required if ready-to-drink coffee is selected"),
	// 	otherwise: Yup.string().notRequired()
	// }),
	// //? //////////////////////////////////////////////////////////////////////////////////
	// color: Yup.string().when("category", "isPrepared", {
	// 	is: "category" === CATEGORIES.COFFEE && "isPrepared" === "true",
	// 	then: Yup.string()
	// 	.oneOf(
	// 		[
	// 			COLOR.AMBER,
	// 			COLOR.DARK,
	// 			COLOR.DARK_BROWN,
	// 			COLOR.HAZELNUT,
	// 			COLOR.LIGHT_BROWN,
	// 			COLOR.YELLOW
	// 		],
	// 		"You must a select a color"
	// 	)
	// 		.required("Body is required if ready-to-drink coffee is selected"),
	// 	otherwise: Yup.string().notRequired()
	// }),
});
