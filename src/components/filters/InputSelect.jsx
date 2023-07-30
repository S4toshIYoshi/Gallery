import {useContext, useState} from 'react';
import style from './Filters.module.scss';
import cn from 'classnames';
import VectorDown from '../../data/icons/VectorDown';
import DeleteButton from '../../UI/DeleteButton';
import {ThemeContext} from '../../provaiders/ThemeProvaider';

const InputSelect = ({name, data, ObjectName, action}) => {
	const {theme} = useContext(ThemeContext);
	const [dataId, setDataId] = action;

	const [selected, setSelected] = useState([]);

	const [isOpen, setIsOpen] = useState(false);

	function choice(e, id) {
		if (dataId.indexOf(id) !== -1) {
			setSelected(selected.filter(el => el !== e.target.innerText));
			setDataId(dataId.filter(el => el !== id));
		} else {
			setSelected([...selected, e.target.innerText]);
			setDataId([...dataId, id]);
		}
	}

	function deleteLastElement() {
		setSelected(selected.slice(0, -1));
		setDataId(dataId.slice(0, -1));
	}

	return (
		<div
			className={cn(
				style.select,
				style.light,
				style.standart,
				isOpen ? style.open : '',
				theme === 'light' ? style.light : style.dark
			)}>
			<div
				className={cn(
					style.label,
					theme === 'light' ? style.light : style.dark
				)}
				onClick={() => setIsOpen(isOpen ? false : true)}>
				<div className={style.selectedChoce}>
					{!selected[0] && <span>{name}</span>}
					{selected.map((el, idx) => {
						return <span key={idx}>{el}</span>;
					})}
				</div>
				{selected.length > 0 && (
					<DeleteButton
						action={() => deleteLastElement()}
						darkMode={theme === 'dark'}
					/>
				)}
				<VectorDown darkMode={theme === 'dark'} />
			</div>

			{isOpen && (
				<>
					<div
						className={cn(
							style.selectMenu,
							theme === 'light' ? style.light : style.dark
						)}>
						{data.map(el => {
							return (
								<div
									key={el.id}
									onClick={e => {
										choice(e, el.id);
										e.stopPropagation();
									}}>
									{el[`${ObjectName}`]}
								</div>
							);
						})}
					</div>
					<div
						className={style.closeField}
						onClick={() => setIsOpen(false)}></div>
				</>
			)}
		</div>
	);
};

export default InputSelect;
