import React from 'react';
import { getLibrary } from '../../indexedDb/indexedDbController';
import { Navigate } from 'react-router-dom';
import '../../assets/styles/shuffle.css';
function RandomMovie() {
    const [fullLibrary, setFullLibrary] = React.useState([]);
    const [random, setRandom] = React.useState(null);

    React.useEffect(async() => {
        setFullLibrary(await getLibrary());
    }, []);

    React.useEffect(() => {
        setRandom(fullLibrary[Math.floor(Math.random() * fullLibrary.length)]);
    }, [fullLibrary]);

    return (
        <>
            {random && <Navigate to={`/movie/${random.id}`}/>}
        </>
    );
}

export default RandomMovie;