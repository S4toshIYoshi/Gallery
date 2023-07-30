export const createUrl = (base, param) => {
	let resultUrl = base;

	param.forEach(el => {
		if (el[0] && el[0] !== '') {
			if (typeof el[0] === 'object') {
				el[0].forEach(element => {
					if (element !== '' && element) {
						resultUrl += `${el[1]}${element}`;
					}
				});
			} else {
				resultUrl += `${el[1]}${el[0]}`;
			}
		}
	});

	return resultUrl;
};
