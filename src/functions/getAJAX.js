export const SendRequest = async (path, action) => {
	const res = await fetch(path);
	const data = await res.json();
	action(data);
};
