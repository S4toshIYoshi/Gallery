import {useState} from 'react';
import {arrayShift} from '../../functions/arrayShift';
import ButtonPag from '../../UI/ButtonPag';
import style from './Pagination.module.scss';

const Pagination = ({action, startPage, endPage}) => {
	const [page, setPage] = action;
	const [pages, setPages] = useState(endPage < 3 ? [1, 2] : [1, 2, 3]);

	if (page >= pages[2] && page + 1 <= endPage) {
		setPages(arrayShift(pages, page + 1));
	} else if (page <= pages[0] && page - 1 >= startPage) {
		setPages(arrayShift(pages, page - 1, false));
	}

	return (
		<div className={style.pagination}>
			<ButtonPag
				first={true}
				active={page !== startPage}
				handelClick={() => {
					setPage(startPage);
					setPages([startPage, startPage + 1, startPage + 2]);
				}}
				direction='left'
				doubleVector={true}
			/>

			<ButtonPag
				handelClick={() => setPage(page - 1)}
				active={page !== startPage}
				direction='left'
			/>

			{pages.map((el, idx) => {
				return (
					<ButtonPag
						key={idx}
						choice={el === page}
						handelClick={() => (el <= endPage ? setPage(el) : undefined)}>
						{el}
					</ButtonPag>
				);
			})}

			<ButtonPag
				handelClick={() => setPage(page + 1)}
				active={page !== endPage}
			/>

			<ButtonPag
				last={true}
				handelClick={() => {
					setPage(endPage);
					setPages([endPage - 2, endPage - 1, endPage]);
				}}
				active={page !== endPage}
				doubleVector={true}
			/>
		</div>
	);
};

export default Pagination;
