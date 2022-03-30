// import React from 'react';
import '../../assets/styles/movie.css';
import GenreList from './GenreList';
import ActorList from './ActorList';
import MightLike from './MightLike';
import Rating from './Rating';
import React from 'react';
// import { useParams } from 'react-router-dom';


/* Dummy data of a movie from the API : doesn't work with github linter ?!? */
// const movie = require('./../../oneFullMovie.json');
import movie from './oneFullMovie';


function Movie() {

    //! 👇 For production only 
    // const params = useParams();
    // const movieId = params.id;
    // const options = '/FullActor,FullCast,Posters,Ratings,Genres';
    // const urlAPI = 'https://imdb-api.com/en/API/Title/k_1673c6m2/' + movieId + options;
    // const [callAPI] = React.useState(0);
    // const [movie, setMovie] = React.useState(null);

    // const controller = new AbortController();
    // const signal = controller.signal;

    /*React.useEffect(() => {
        fetch(urlAPI, { signal })
        .then((response) => response.json())
        .then((data) => {
            setMovie(data);
        });
        return () => controller.abort();
    }, [callAPI]);*/

    return (
        <section id="mainApp">
            {movie &&
            <div id="movie">
                <div className="movie-poster" style={{backgroundImage: `url(${movie.image})`}}></div>
                <div className="wrapper-movie">
                    <div className="scrollable">
                        <div className="wrapper">
                            <div className="movie-infos">
                                <div className="movie-datas">
                                    <h2>{movie.title}</h2>
                                    <Rating rating={movie.imDbRating}/>
                                    <div className="basic-infos">
                                        <span>Runtime : {movie.runtimeStr}</span>
                                        <span>Year : {movie.year}</span>
                                    </div>
                                </div>

                                <div className="movie-plot">
                                    <p>{movie.plot}</p>
                                </div>

                                <div className="more-infos">
                                    <GenreList genres={movie.genreList} />
                                    <span>Director : {movie.directors}</span>
                                    <span>Stars : {movie.stars}</span>
                                </div>
                            </div>
                            <ActorList listTitle={'Cast List'} actorList={movie.actorList} />
                            <MightLike similars={movie.similars} />
                        </div>
                    </div>
                </div>
            </div>}
        </section>
    );
}

export default Movie;
