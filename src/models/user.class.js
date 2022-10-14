import { ROLES } from "./roles.enum";

export class User {
	name = String;
	surname = String;
	role = ROLES.CLIENT;

	constructor(name, surname, role) {
		this.name = name;
		this.surname = surname;
		this.role = role;
	}
}
