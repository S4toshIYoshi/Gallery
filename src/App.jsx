import {useState} from 'react';
import './App.scss';
import Gallery from './components/content/Gallery';
import Filters from './components/filters/Filters';
import Header from './components/header/Header';
import {PAINTINGS_URL} from './data/api';
import DataProvaider from './provaiders/DataProvaider';

function App() {
	const [url, setUrl] = useState(PAINTINGS_URL);
	const [isLoad, setIsload] = useState(false);
	const [page, setPage] = useState(1);

	return (
		<div className='App'>
			<div className='Container'>
				<DataProvaider>
					<Header />
					<Filters actionSetUrl={setUrl} />
					<Gallery url={url} />
				</DataProvaider>
			</div>
		</div>
	);
}

export default App;
