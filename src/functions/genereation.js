export const generation = value => {
	const result = [];
	const lte = value > 3 ? 3 : value;
	for (let i = 1; i <= lte; i++) {
		result.push(i);
	}
	return result;
};
