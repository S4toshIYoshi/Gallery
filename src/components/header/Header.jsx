import {useContext} from 'react';
import LightIcon from '../../data/icons/LightIcon';
import Logo from '../../data/icons/Logo';
import {ThemeContext} from '../../provaiders/ThemeProvaider';
import style from './Header.module.scss';

const Header = () => {
	const {theme, setTheme} = useContext(ThemeContext);

	return (
		<header className={style.header}>
			<Logo />
			<button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
				<LightIcon darkTheme={theme === 'dark'} />
			</button>
		</header>
	);
};

export default Header;
