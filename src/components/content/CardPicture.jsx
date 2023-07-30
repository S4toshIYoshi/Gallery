import {useContext, useState, useCallback, useMemo} from 'react';
import {BASE_URL} from '../../data/api';
import {filterData} from '../../functions/filterData';
import {DataContext} from '../../provaiders/DataProvaider';
import style from './CardPicture.module.scss';

const CardPicture = ({data}) => {
	const {authors, locations} = useContext(DataContext);

	const author = filterData(authors, data.authorId);
	const location = filterData(locations, data.locationId);

	return (
		<div className={style.card}>
			<img src={`${BASE_URL}${data.imageUrl}`} alt='1' />
			<div className={style.description}>
				<h3>{data.name}</h3>
				<p>
					Author: <span>{author[0].name ? author[0].name : 'loading...'}</span>
				</p>
				<p>
					Created: <span>{data.created}</span>
				</p>
				<p>
					Location:{' '}
					<span>
						{location[0].location ? location[0].location : 'loading...'}
					</span>
				</p>
			</div>
		</div>
	);
};

export default CardPicture;
