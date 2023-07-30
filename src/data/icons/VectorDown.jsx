import icon from '../images/vectorDown.svg';
import iconDark from '../images/vectorDownDark.svg';
const VectorDown = ({darkMode}) => {
	if (!darkMode) {
		return (
			<img
				src={icon}
				alt='vector down'
				style={{
					cursor: 'pointer',
					zIndex: '3'
				}}
			/>
		);
	} else {
		return (
			<img
				src={iconDark}
				alt='vector down'
				style={{
					cursor: 'pointer',
					zIndex: '3'
				}}
			/>
		);
	}
};

export default VectorDown;
