import {useState} from 'react';
import {useEffect} from 'react';
import {SendRequest} from '../../functions/getAJAX';
import CardPicture from './CardPicture';
import style from './Gallery.module.scss';

const Gallery = ({url}) => {
	const [data, setData] = useState([]);

	useEffect(() => {
		SendRequest(`${url}`, setData);
	}, [url]);

	return (
		<main className={style.pictures}>
			{data.map((el, idx) => {
				return <CardPicture key={idx} data={el} />;
			})}
		</main>
	);
};

export default Gallery;
