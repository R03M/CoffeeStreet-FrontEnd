import { CATEGORIES } from "./categories.enum";

export class Products {
	name = String;
	description = String;
	image = String;
	price = Number;
	category = CATEGORIES.OTHER;
	lactose = Boolean;
	gluten = Boolean;
	alcohol = Boolean;
	stock = true;
	ingredients = String;
	originCountry = String;
	isPrepared = true;
	constructor(
		name,
		description,
		image,
		price,
		category,
		lactose,
		gluten,
		alcohol,
		stock,
		ingredients
	) {
		this.name = name;
		this.description = description;
		this.image = image;
		this.price = price;
		this.category = category;
		this.laclactose = lactose;
		this.gluten = gluten;
		this.alcohol = alcohol;
		this.stostock = stock;
		this.ingredients = ingredients;
	}
}
