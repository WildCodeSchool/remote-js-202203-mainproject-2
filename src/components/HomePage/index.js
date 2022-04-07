import { useEffect, useState } from 'react';

import GenreFilterBar from './GenresFilterBar';
import MovieSlide from './MovieSlide';
import HeadSearchBar from './HeadSearchBar';

import '../../assets/styles/homePage.css';
import NavBar from '../NavBar';
import getImDbUrl from '../../utils/getImDbUrl';
import { getAllMovies } from '../../indexedDb/indexedDbController';

const MAX_MOVIES_PER_SLIDE = 20; 

function HomePage(){

    const [genreFilterSelected, setGenreFilterSelected] = useState('*');
    const [ fullMovies, setFullMovies ] = useState([]);
    
    //* 👇 Pour le dev seulement --> sinon à passer en props ou autre
    const user = {
        image: 'https://www.marc-grondin.com/wcs-mymovies/public/assets/images/avatars/patrick-chirac.jpg',
        firstName: 'Patrick',
        lastName: 'Chirac',
        get fullName() {
            return `${this.firstName} ${this.lastName}`;
        } 
    };
    
    const popularMoviesUrl = getImDbUrl('MostPopularMovies');
    const [popularMovies, setPopularMovies] = useState([]);
    const [popularMoviesFiltered, setPopularMoviesFiltered] = useState([]);
    const getPopularMovies = () => getMoviesFiltered(setPopularMoviesFiltered, popularMovies);

    const popularSeriesUrl = getImDbUrl('MostPopularTVs');
    const [popularSeries, setPopularSeries] = useState(null);
    const [popularSeriesFiltered, setPopularSeriesFiltered] = useState([]);
    const getPopularSeries = () => getMoviesFiltered(setPopularSeriesFiltered, popularSeries);
    
    const comingSoonUrl = getImDbUrl('ComingSoon');
    const [comingSoon, setComingSoon] = useState(null);
    const [comingSoonFiltered, setComingSoonFiltered] = useState([]);
    const getComingSoon = () => getMoviesFiltered(setComingSoonFiltered, comingSoon);
    
    const inTheatersUrl = getImDbUrl('InTheaters');
    const [inTheaters, setInTheaters] = useState(null);
    const [inTheatersFiltered, setInTheatersFiltered] = useState([]);
    const getInTheaters = () => getMoviesFiltered(setInTheatersFiltered, inTheaters);
    
    const controller = new AbortController();
    const signal = controller.signal;
    
    useEffect(async () => {
        fetchMovies(popularMoviesUrl, signal, setPopularMovies, setPopularMoviesFiltered);
        fetchMovies(popularSeriesUrl, signal, setPopularSeries, setPopularSeriesFiltered);
        fetchMovies(comingSoonUrl, signal, setComingSoon, setComingSoonFiltered);
        fetchMovies(inTheatersUrl, signal, setInTheaters, setInTheatersFiltered);
        setFullMovies(await getAllMovies());
        return () => controller.abort();
     }, []);

    useEffect(() => {
        getPopularMovies();
        getPopularSeries();
        getComingSoon();
        getInTheaters();
    }, [genreFilterSelected]);
 

    function getMoviesFiltered(setMovieFilteredState, moviesNotFiltered) {
        if(genreFilterSelected === '*')  return setMovieFilteredState(moviesNotFiltered);
        const filteredMovies = [];
        moviesNotFiltered.forEach((movie) => {
            const fullMovie = fullMovies.find((fullMovie) => fullMovie.id === movie.id);
            if (fullMovie) { filteredMovies.push(fullMovie); } 
        });
        const filteredMoviesByGenre = filteredMovies.filter(movie => movie.genreList?.find(genre => genre.key === genreFilterSelected));
        setMovieFilteredState(filteredMoviesByGenre);
    }

    function fetchMovies(url, signal, setMovies, setMoviesFiltered){
        fetch(url, {signal}).then(res => res.json()).then((data) => {
            const movies = data.items.slice(0, MAX_MOVIES_PER_SLIDE);
            setMovies(movies);
            setMoviesFiltered(movies);
        });
    }
    
    return (
        <section id="mainApp">
            <header>
                <div id="mainUser">
                    <figure>
                        <img src={user.image} alt={user.fullName} title={user.fullName} />
                        <figcaption>
                            <h2>Hello <span>{ user.firstName }</span></h2>
                            <h3>Let&apos;s find your favorite movie</h3>
                        </figcaption>
                    </figure>
                </div>
            </header>

            <div id="home">
                <div className="wrapper-home">
                    
                    <HeadSearchBar />

                    <GenreFilterBar changeGenreFilter={(genreValue) => setGenreFilterSelected(genreValue)} />

                    <div id="moviesReturned">
                        <div className="scrollable">
                            <div className="wrapper">
                                <div id="searchResults">
                                   <h4>Search results</h4>
                                </div>
                                <div id="moreMovies">
                                    {/* 
                                    //* 👇 Pour le dev uniquement
                                    <MovieSlide movies={(popularMovies)} slideTitle={'Popular Movies'} slideId={'trending-now'} />
                                    <MovieSlide movies={(inTheaters)} slideTitle={'In Theaters'} slideId={'new-release'} areTilesLandscape={true} />
                                     */}
                                                                
                                    {/* 
                                    //* 👇 Pour la prod
                                    */}
                                    <MovieSlide movies={popularMoviesFiltered} slideTitle={'Popular Movies'} slideId={'trending-now'} />
                                    <MovieSlide movies={popularSeriesFiltered} slideTitle={'Popular Series'} slideId={'popular-series'} />
                                    <MovieSlide movies={comingSoonFiltered} slideTitle={'Coming soon'} slideId={'coming-soon'} />
                                    <MovieSlide movies={inTheatersFiltered} slideTitle={'In Theaters'} slideId={'new-release'} areTilesLandscape={true} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <NavBar />

        </section>
    );
}

export default HomePage;
