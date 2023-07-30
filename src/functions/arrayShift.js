export const arrayShift = (arr, value, flag = true) => {
	const result = [];
	if (flag) {
		for (let i = 1; i < arr.length; i++) {
			result.push(arr[i]);
		}
		result.push(value);
	} else {
		result.push(value);
		for (let i = 0; i < arr.length - 1; i++) {
			result.push(arr[i]);
		}
	}

	return result;
};
