import icon from '../images/cross.svg';
import iconDark from '../images/crossDark.svg';

const Cross = ({darkMode}) => {
	if (!darkMode) {
		return <img src={icon} alt='cross' />;
	} else {
		return <img src={iconDark} alt='cross' />;
	}
};

export default Cross;
