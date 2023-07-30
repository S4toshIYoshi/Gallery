import {useContext, useState} from 'react';
import './App.scss';
import Gallery from './components/content/Gallery';
import Filters from './components/filters/Filters';
import Header from './components/header/Header';
import Pagination from './components/pagination/Pagination';
import {PAINTINGS_URL} from './data/api';
import {DataContext} from './provaiders/DataProvaider';
import {ThemeContext} from './provaiders/ThemeProvaider';

function App() {
	const [url, setUrl] = useState(PAINTINGS_URL);
	const [page, setPage] = useState(1);

	const {paintings} = useContext(DataContext);
	const endPage = Math.ceil(paintings.length / 12);

	const {theme} = useContext(ThemeContext);

	return (
		<div className={`App ${theme}`}>
			<div className='Container'>
				<Header />
				<Filters handelSetUrl={setUrl} />
				<Gallery url={`${url}&_page=${page}&_limit=12`} />

				{endPage >= 2 && (
					<Pagination
						action={[page, setPage]}
						startPage={1}
						endPage={endPage}
					/>
				)}
			</div>
		</div>
	);
}

export default App;
