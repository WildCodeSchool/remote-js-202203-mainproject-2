<<<<<<< HEAD
function HomePage(){
    return (
        <h1>HomePage</h1>
=======
import { setOfFilms } from './homePageDataSet';
 //* 👆 Pour le dev seulement --> sinon à passer en props ou autre

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

    const movies = setOfFilms.slice(0, 7);
    const inTheater = setOfFilms.slice(0, 4);
    
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
                                    <MovieSlide movies={(movies)} slideTitle={'Trending now'} slideId={'trending-now'} />
                                    <MovieSlide movies={(inTheater)} slideTitle={'In Theaters'} slideId={'new-release'} areTilesLandscape={true} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
>>>>>>> 088f9c780df877419276f2585eeea0ed60959411
    );
}

export default HomePage;