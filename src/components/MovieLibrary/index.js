import React from 'react';
import '../../assets/styles/movieLibrary.css';
import NavBar from '../NavBar';
import MovieTile from './../HomePage/MovieTile';
import LibrarySearch from './LibrarySearch';
import { getLibrary } from './../../indexedDb/indexedDbController';
import PropTypes from 'prop-types';

function MovieLibrary({ type, title }) {
    let entireLibrary = [];

    React.useEffect(async () => {
        entireLibrary = await getLibrary();
        if (type === 'loved') {
            entireLibrary = entireLibrary.filter((movie) => movie.isLiked === 1);
        }
        setLibrary(entireLibrary.slice(0, toLoad));
    }, [type]);
    
    const [searchResults, setSearchResults] = React.useState('');
    const [toLoad, setToLoad] = React.useState(30);
    const [library, setLibrary] = React.useState([]);

    function handleSearch(event) {
        const input = event.target;
        input.value.length >= 2 && setSearchResults(input.value);
        input.value === '' && setSearchResults(input.value);
    }

    function loadMore(event) {
        if (entireLibrary.length > toLoad) {
            if (event.target.scrollTop >= event.target.scrollHeight - 1100) {
                setToLoad(toLoad + 2);
                setLibrary(entireLibrary.slice(0, toLoad));
            }
        }
    }

    React.useEffect(() => {
        setLibrary(entireLibrary.slice(0, toLoad));
    }, [toLoad]);

    window.onbeforeunload = () => {
        document.querySelector('.movie-library').scrollTo(0, 0);
    };

    return (
        <section id="mainApp">
            <div className="movie-library" onScroll={() => loadMore(event)}>
                <div className="wrapper-library">
                    <div className="scrollable">
                        <div className="wrapper">
                            <h1>{title ?? 'My Movie Library'}</h1>
                            <LibrarySearch handleSearch={handleSearch}/>
                            <div className='library'>
                                {library.filter((movie) => movie.title.toLowerCase()
                                .includes(searchResults.toLowerCase()))
                                .map((movie) => <MovieTile movie={movie} key={movie.id}/>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <NavBar />
        </section>
    );
}

MovieLibrary.propTypes = {
    type: PropTypes.string,
    title: PropTypes.string.isRequired
};

export default MovieLibrary;