import Cross from '../data/icons/Cross';

const style = {
	display: 'flex',
	justefiyContent: 'center',
	alignItems: 'center',
	zIndex: '3'
};

const DeleteButton = ({action, darkMode}) => {
	return (
		<button
			onClick={e => {
				action();
				e.preventDefault();
			}}
			style={style}>
			<Cross darkMode={darkMode} />
		</button>
	);
};

export default DeleteButton;
