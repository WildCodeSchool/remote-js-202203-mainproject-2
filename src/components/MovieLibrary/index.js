import React from 'react';
import '../../assets/styles/movieLibrary.css';
import MovieTile from './../HomePage/MovieTile';
import { Link } from 'react-router-dom';
import LibrarySearch from './LibrarySearch';

function MovieLibrary() {
    const entireLibrary = [
        {id: 'tt0361748', title: 'Inglourious Basterds', image: 'https://imdb-api.com/images/original/MV5BOTJiNDEzOWYtMTVjOC00ZjlmLWE0NGMtZmE1OWVmZDQ2OWJhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_Ratio0.7273_AL_.jpg'},
        {id: 'tt0133093', title: 'The Matrix', image: 'https://imdb-api.com/images/original/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_Ratio0.7273_AL_.jpg'},
        {id: 'tt1028528', title: 'Death Proof', image: 'https://imdb-api.com/images/original/MV5BYTdmZmY3Y2QtNjU5NC00OGUxLTg3MWQtMmE2ODM5Mzg3MzcyL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_Ratio0.7273_AL_.jpg'},
        {id: 'tt7784604', title: 'Hereditary', image: 'https://imdb-api.com/images/original/MV5BOTU5MDg3OGItZWQ1Ny00ZGVmLTg2YTUtMzBkYzQ1YWIwZjlhXkEyXkFqcGdeQXVyNTAzMTY4MDA@._V1_Ratio0.7273_AL_.jpg'},
        {id: 'tt5109784', title: 'Mother!', image: 'https://imdb-api.com/images/original/MV5BMzc5ODExODE0MV5BMl5BanBnXkFtZTgwNDkzNDUxMzI@._V1_Ratio0.7273_AL_.jpg'},
        {id: 'tt1877830', title: 'The Batman', image: 'https://imdb-api.com/images/original/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_Ratio0.7273_AL_.jpg'},
        {id: 'tt1160419', title: 'Dune', image: 'https://imdb-api.com/images/original/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_Ratio0.7273_AL_.jpg'},
        {id: 'tt4016934', title: 'The Handmaiden', image: 'https://imdb-api.com/images/original/MV5BNDJhYTk2MTctZmVmOS00OTViLTgxNjQtMzQxOTRiMDdmNGRjXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_Ratio0.7273_AL_.jpg'},
    ];

    const [searchResults, setSearchResults] = React.useState('');

    function handleSearch(event) {
        const input = event.target;
        input.value.length >= 2 && setSearchResults(input.value);
        input.value === '' && setSearchResults(input.value);
    }

    return (
        <section id="mainApp">
            <div className="movie-library">
                <div className="wrapper-library">
                    <div className="scrollable">
                        <div className="wrapper">
                            <h1>My movie library</h1>
                            <LibrarySearch handleSearch={handleSearch}/>
                            <div className='library'>
                                {library.filter((movie) => movie.title.toLowerCase()
                                .includes(searchResults.toLowerCase()))
                                .map((movie, index) => <Link to={`/movie/${movie.id}`} key={index}><MovieTile movie={movie}/></Link>)}
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    );
}

export default MovieLibrary;