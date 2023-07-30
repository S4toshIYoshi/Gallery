import {useState, useContext} from 'react';
import {ATRIBUTE_URL, PAINTINGS_URL} from '../../data/api';
import {createUrl} from '../../functions/createUrl';
import InputDate from './InputDate';
import InputSelect from './InputSelect';
import style from './Filters.module.scss';
import cn from 'classnames';
import {DataContext} from '../../provaiders/DataProvaider';
import {ThemeContext} from '../../provaiders/ThemeProvaider';

const Filters = ({handelSetUrl}) => {
	const {authors, locations} = useContext(DataContext);

	const {theme} = useContext(ThemeContext);

	const [namePicture, setNamePicture] = useState('');
	const [selectedAuthor, setSelectedAuthor] = useState(['']);
	const [selectedLocation, setSelectedLocation] = useState(['']);
	const [created, setCreated] = useState([0, 0]);

	let url = createUrl(PAINTINGS_URL, [
		[namePicture, ATRIBUTE_URL.name],
		[selectedAuthor, ATRIBUTE_URL.author],
		[selectedLocation, ATRIBUTE_URL.location],
		[created[0], ATRIBUTE_URL.createdGte],
		[created[1], ATRIBUTE_URL.createdLte]
	]);

	setTimeout(() => handelSetUrl(url), 0); //без таймаута будет ошибка bed setState()

	return (
		<div className={style.filters}>
			<input
				type='text'
				placeholder='Name'
				onChange={e => setNamePicture(e.target.value)}
				className={cn(
					style.name,
					style.standart,
					style.light,
					theme === 'light' ? style.light : style.dark
				)}
			/>
			<InputSelect
				name='Authors'
				data={authors}
				ObjectName='name'
				action={[selectedAuthor, setSelectedAuthor]}
			/>
			<InputSelect
				name='locations'
				data={locations}
				ObjectName='location'
				action={[selectedLocation, setSelectedLocation]}
			/>
			<InputDate action={[created, setCreated]} />
		</div>
	);
};

export default Filters;
