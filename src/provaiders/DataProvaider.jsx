import {createContext, useEffect, useState} from 'react';
import {AUTHORS_URL, LOCATIONS_URL, PAINTINGS_URL} from '../data/api';
import {SendRequest} from '../functions/getAJAX';

export const DataContext = createContext({
	authors: [],
	locations: [],
	paintings: []
});

const DataProvaider = ({children}) => {
	const [paintings, setPaintings] = useState([]);
	const [authors, setAutors] = useState([]);
	const [locations, setLocations] = useState([]);

	useEffect(() => {
		SendRequest(PAINTINGS_URL, setPaintings);
		SendRequest(AUTHORS_URL, setAutors);
		SendRequest(LOCATIONS_URL, setLocations);
	}, []);

	return (
		<DataContext.Provider value={{authors, locations, paintings}}>
			{children}
		</DataContext.Provider>
	);
};

export default DataProvaider;
