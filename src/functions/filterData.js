export const filterData = (data, value) => {
	return data.filter(el => parseInt(el.id) === parseInt(value));
};
