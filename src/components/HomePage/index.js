//* 👇 Pour le dev uniquement
import { setOfFilms } from './homePageDataSet';

//* 👇 Pour la prod
// import { useEffect, useState } from 'react';

import GenreFilterBar from './GenresFilterBar';
import MovieSlide from './MovieSlide';
import SearchBar from './SearchBar';

import '../../assets/styles/homePage.css';

function HomePage(){
    
    //* 👇 Pour le dev seulement --> sinon à passer en props ou autre
    const user = {
        image: 'https://www.marc-grondin.com/wcs-mymovies/public/assets/images/avatars/patrick-chirac.jpg',
        firstName: 'Patrick',
        lastName: 'Chirac',
        get fullName() {
            return `${this.firstName} ${this.lastName}`;
        } 
    };

    //* 👇 Pour le dev uniquement
    const popularMovies = setOfFilms.slice(0, 7);
    const inTheaters = setOfFilms.slice(0, 4);

    //* 👇 Pour la prod
    // const popularMoviesUrl = 'https://imdb-api.com/en/API/MostPopularMovies/k_xxgrvftl';
    // const [popularMovies, setPopularMovies] = useState(null);
    
    // const popularSeriesUrl = 'https://imdb-api.com/en/API/MostPopularTVs/k_xxgrvftl';
    // const [popularSeries, setPopularSeries] = useState(null);
    
    // const comingSoonUrl = 'https://imdb-api.com/en/API/ComingSoon/k_xxgrvftl';
    // const [comingSoon, setComingSoon] = useState(null);

    // const inTheatersUrl = 'https://imdb-api.com/en/API/InTheaters/k_xxgrvftl';
    // const [inTheaters, setInTheaters] = useState(null);

    // const controller = new AbortController();
    // const signal = controller.signal;

    // useEffect(() => {
    //     fetch(popularMoviesUrl, { signal }).then((response) => response.json()).then((data) => setPopularMovies(data.items));
    //     fetch(popularSeriesUrl, { signal }).then((response) => response.json()).then((data) => setPopularSeries(data.items));
    //     fetch(comingSoonUrl, { signal }).then((response) => response.json()).then((data) => setComingSoon(data.items));
    //     fetch(inTheatersUrl, { signal }).then((response) => response.json()).then((data) => setInTheaters(data.items));
    //     return () => controller.abort();
    // }, []);

    
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
                    
                    <SearchBar />

                    <GenreFilterBar />

                    <div id="moviesReturned">
                        <div className="scrollable">
                            <div className="wrapper">
                                <div id="searchResults">
                                   <h4>Search results</h4>
                                </div>
                                <div id="moreMovies">
                                    {/* 
                                    //* 👇 Pour le dev uniquement
                                     */}
                                    <MovieSlide movies={(popularMovies)} slideTitle={'Popular Movies'} slideId={'trending-now'} />
                                    <MovieSlide movies={(inTheaters)} slideTitle={'In Theaters'} slideId={'new-release'} areTilesLandscape={true} />
                                    {/* 
                                    //* 👇 Pour la prod
                                    <MovieSlide movies={(popularMovies)} slideTitle={'Popular Movies'} slideId={'trending-now'} />
                                    <MovieSlide movies={(popularSeries)} slideTitle={'Popular Series'} slideId={'popular-series'} />
                                    <MovieSlide movies={(comingSoon)} slideTitle={'Coming soon'} slideId={'coming-soon'} />
                                    <MovieSlide movies={(inTheaters)} slideTitle={'In Theaters'} slideId={'new-release'} areTilesLandscape={true} />
                                    */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomePage;