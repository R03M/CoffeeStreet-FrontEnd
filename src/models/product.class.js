import { CATEGORIES } from "./categories.enum";

export class Product {
	name = String;
	description = String;
	image = String;
	price = Number;
	category = CATEGORIES;
	lactose = Boolean;
	gluten = Boolean;
	alcohol = Boolean;
	stock = true;
	ingredients = String;
	originCountry = String;
	isPrepared = true;
	state = "active"
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
		ingredients,
		originCountry,
		isPrepared,
		state
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
		this.originCountry = originCountry;
		this.isPrepared = isPrepared;
		this.state = state;
	}
}
