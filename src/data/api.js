export const BASE_URL = 'https://test-front.framework.team';

export const PAINTINGS_URL = `${BASE_URL}/paintings?`; //get
export const AUTHORS_URL = `${BASE_URL}/authors`; //get
export const LOCATIONS_URL = `${BASE_URL}/locations`; //get

export const ATRIBUTE_URL = {
	name: '&q=',
	author: '&authorId=',
	location: '&locationId=',
	createdGte: '&created_gte=',
	createdLte: '&created_lte='
};
