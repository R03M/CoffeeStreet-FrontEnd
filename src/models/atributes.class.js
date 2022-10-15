import { ACIDITY } from "./acidity.enum";
import { BITTERNESS } from "./bitterness.enum";
import { BODY } from "./body.enum";
import { COLOR } from "./color.enum";
import { ROAST } from "./roast.enum";
import { TEXTURES } from "./textures.enum";

export class Atributes {
	cream = Boolean;
	texture = TEXTURES;
	body = BODY;
	acidity = ACIDITY;
	bitterness = BITTERNESS;
	roast = ROAST;
	color = COLOR;

	constructor(cream, texture, body, acidity, bitterness, roast, color) {
		this.cream = cream;
		this.texture = texture;
		this.body = body;
		this.acidity = acidity;
		this.bitterness = bitterness;
		this.roast = roast;
		this.color = color;
	}
}
