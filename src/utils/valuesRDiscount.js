const discounts = {
	0.1: "off 10%",
	0.2: "off 20%",
	0.3: "off 30%",
	0.4: "off 40%",
	0.5: "off 50%",
	0.6: "off 60%",
	0.7: "off 70%",
	0.8: "off 80%",
	0.9: "off 90%",
	1: "off 100%"
};

export const valuesRDiscount = value => {
	return discounts[value];
};
