import {useContext, useEffect, useState} from 'react';
import './App.scss';
import Gallery from './components/content/Gallery';
import Filters from './components/filters/Filters';
import Header from './components/header/Header';
import Pagination from './components/pagination/Pagination';
import {PAINTINGS_URL} from './data/api';
import {SendRequest} from './functions/getAJAX';
import {DataContext} from './provaiders/DataProvaider';
import {ThemeContext} from './provaiders/ThemeProvaider';

function App() {
	const [url, setUrl] = useState(PAINTINGS_URL);
	const [length, setLength] = useState([]);
	const [page, setPage] = useState(1);
	const [isLoad, setIsLoad] = useState(false);
	const [endPage, setEndPage] = useState(3);

	const [dataPicture, setDataPicture] = useState([]);

	const {theme} = useContext(ThemeContext);

	useEffect(() => {
		setIsLoad(false);
		SendRequest(`${url}&_page=${page}&_limit=12`, setDataPicture);
		setIsLoad(true);
	}, [url, page]);

	return (
		<div className={`App ${theme}`}>
			<div className='Container'>
				<Header />
				<Filters handelSetUrl={setUrl} />
				{isLoad ? (
					<>
						<Gallery data={dataPicture} />

						{endPage >= 2 && (
							<Pagination
								action={[page, setPage]}
								startPage={1}
								endPage={endPage}
							/>
						)}
					</>
				) : (
					<div>Load...</div>
				)}
			</div>
		</div>
	);
}

export default App;
