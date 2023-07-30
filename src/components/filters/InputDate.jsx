import cn from 'classnames';
import style from './Filters.module.scss';
import {useState} from 'react';
import VectorDown from '../../data/icons/VectorDown';

const InputDate = ({action}) => {
	const [isOpen, setIsOpen] = useState(false);

	const [date, setDate] = action;

	return (
		<div
			className={cn(
				style.standart,
				style.dateBox,
				style.light,
				isOpen ? style.open : ''
			)}>
			<div
				className={cn(style.label)}
				onClick={() => setIsOpen(isOpen ? false : true)}>
				<span>Created</span>
				<VectorDown />
			</div>
			{isOpen && (
				<>
					<form
						className={cn(style.dateMenu)}
						onClick={e => e.stopPropagation()}>
						<input
							type='text'
							placeholder={date[0] ? date[0] : 'from'}
							onChange={e => setDate([e.target.value, date[1]])}
						/>
						<span></span>
						<input
							type='text'
							placeholder={date[1] ? date[1] : 'before'}
							onChange={e => setDate([date[0], e.target.value])}
						/>
					</form>
					<div
						className={style.closeField}
						onClick={() => setIsOpen(false)}></div>
				</>
			)}
		</div>
	);
};

export default InputDate;
