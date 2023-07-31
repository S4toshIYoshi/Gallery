import icon from '../images/vectorDown.svg';
import iconDark from '../images/vectorDownDark.svg';

import style from './VectorDown.module.scss';

const VectorDown = ({darkMode}) => {
	if (!darkMode) {
		return <img src={icon} alt='vector down' className={style.img} />;
	} else {
		return <img src={iconDark} alt='vector down' className={style.img} />;
	}
};

export default VectorDown;
