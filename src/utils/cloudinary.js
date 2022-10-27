export const uploadImage = async e => {
	try {
		const files = e.target.files;
		const data = new FormData();
		data.append("file", files[0]);
		data.append("upload_preset", "coffeeStreetData");
		const response = await fetch(
			"https://api.cloudinary.com/v1_1/db6aq84ze/image/upload",
			{
				method: "POST",
				body: data
			}
		);
		const file = await response.json();
		return file.secure_url;
	} catch (error) {
		return "";
	}
};
