import './App.css';
import axios from "axios";
import { useState, useEffect } from "react";
import SearchBox from './components/SearchBox';
import ResidentsList from './components/ResidentsList'
import LocationInfo from './components/LocationInfo';

const randomID = Math.floor(Math.random() * 126) + 1;

const App = () => {
    const [location, setLocation] = useState(null);

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/location/${randomID}`)
            .then(res => setLocation(res.data));
    }, []);

    return (

        <div className='app'>
            <h1>Rick and Morthy App</h1>
            <SearchBox setLocation={setLocation} />
            <h2>{location?.name}</h2>
            {location && <LocationInfo name={location.name} type={location.type} dimension={location.dimension} population={location.residents.length} />}
            {location && <ResidentsList location={location} />}
        </div>
    )
}

export default App;
