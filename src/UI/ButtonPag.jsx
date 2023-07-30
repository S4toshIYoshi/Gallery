import style from './ButtonPag.module.scss';
import cn from 'classnames';
import Vector from '../data/icons/Vector';
import {useContext} from 'react';
import {ThemeContext} from '../provaiders/ThemeProvaider';

const ButtonPag = ({
	children,
	handelClick,
	first = false,
	last = false,
	doubleVector = false,
	active = true,
	choice = false,
	direction = 'right'
}) => {
	const {theme} = useContext(ThemeContext);

	const color = theme === 'light' ? 'white' : 'black';
	const bg = theme === 'ligth' ? 'black' : 'white';

	const variableStyle = {
		borderRadius: first ? '10px 0 0 10px' : last ? '0 10px 10px 0' : 'none',
		background: choice ? bg : '',
		color: choice ? color : ''
	};

	return (
		<button
			onClick={active ? handelClick : undefined}
			className={cn(
				style.button,
				active ? style.active : style.none,
				theme === 'dark' ? style.dark : ''
			)}
			style={variableStyle}>
			{children ? (
				children
			) : (
				<Vector
					direction={direction}
					doubleVector={doubleVector}
					active={active}
				/>
			)}
		</button>
	);
};

export default ButtonPag;
