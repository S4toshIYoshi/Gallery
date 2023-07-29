import { useEffect, useState } from 'react';
import './App.css';
import Gallery from './components/content/Gallery';
import Filters from './components/filters/Filters';
import Pagination from './components/pagination/Pagination';
import { AUTHORS, LOCATIONS, PAINTINGS } from './data/api';
import { SendRequest } from './functions/getAJAX';



function App() {

  // get data
  const [paintings, setPaintings] = useState([])
  const [authors, setAutors] = useState([])
  const [location, setLocation] = useState([])

  // request
  const [url, setUrl] = useState(PAINTINGS)


  const [isLoad, setIsload] = useState(false)
  

  useEffect(() => {
      SendRequest(url, setPaintings)
      SendRequest(AUTHORS, setAutors)
      SendRequest(LOCATIONS, setLocation)
      setIsload(true)
  }, [url])

  if(isLoad){
    return (
      <div className="App">
        <br />
        <Filters actionSetUrl={setUrl} dependencies={[authors, location]}/>
        <br />
        <Gallery data={paintings}/>
        <Pagination value={paintings.length}/>
      </div>
    
    );
  } else {
    return <div>Loading...</div>
  }
      
}

export default App;
