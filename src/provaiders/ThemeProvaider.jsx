import React, {createContext, useState} from 'react';

export const ThemeContext = createContext({theme: 'light'});

const ThemeProvaider = ({children}) => {
	const [theme, setTheme] = useState('light');
	return (
		<ThemeContext.Provider value={{theme, setTheme}}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvaider;
