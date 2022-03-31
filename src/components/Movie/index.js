import '../../assets/styles/movie.css';
import GenreList from './GenreList';
import ActorList from './ActorList';
import MightLike from './MightLike';
import Rating from './Rating';
import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router';
import { getMovieById } from '../../indexedDb/indexedDbController';
import NavBar from '../NavBar';

/* Dummy data of a movie from the API : doesn't work with github linter ?!? */
// const movie = require('./../../oneFullMovie.json');
// import movie from './oneFullMovie';


function Movie() {
    const [movie, setMovie] = useState(null);
    
    const params = useParams();
    const movieId = params.id;
    useEffect(async () => {
        let m = await getMovieById(movieId);
        setMovie(m);
    }, []);

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
            <NavBar />
        </section>
    );
}

export default Movie;
