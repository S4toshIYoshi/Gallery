import vector from '../images/vector.svg';
import vectorDouble from '../images/doubleVector.svg';
import vectorDark from '../images/vectorDark.svg';
import vectorDoubleDark from '../images/doubleVectorDark.svg';
import {ThemeContext} from '../../provaiders/ThemeProvaider';
import {useContext} from 'react';

const Vector = ({direction = 'right', active = true, doubleVector = false}) => {
	const {theme} = useContext(ThemeContext);

	const style = {
		transform: direction === 'left' ? 'rotate(180deg)' : 'none',
		opacity: active ? 'none' : '0.3'
	};
	if (theme === 'light') {
		return (
			<img src={doubleVector ? vectorDouble : vector} alt='' style={style} />
		);
	} else {
		return (
			<img
				src={doubleVector ? vectorDoubleDark : vectorDark}
				alt=''
				style={style}
			/>
		);
	}
};

export default Vector;
