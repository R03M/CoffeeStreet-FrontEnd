import { ROLES } from "./roles.enum";

export class User {
	name = String;
	surname = String;
	role = ROLES.CLIENT;
	email = String;
	password = String;
	image = String;

	constructor(name, surname, role, email, password, image) {
		this.name = name;
		this.surname = surname;
		this.role = role;
		this.email = email;
		this.password = password;
		this.image = image;
	}
}
