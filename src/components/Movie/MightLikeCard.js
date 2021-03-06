import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';
import { Link } from 'react-router-dom';

function MightLikeCard({ movie }) {
    return (
        <Link to={`/movie/${movie.id}`} >
            <div className="movie-card" id={movie.id}>
                <figure>
                    <img src="./../assets/images/template/blank-poster.png" alt={movie.title} title={movie.title} style={{backgroundImage: `url(${movie.image})`}} />
                    <figcaption>
                        <strong>{movie.title}</strong>
                        <Rating rating={movie.imDbRating} />
                    </figcaption>
                </figure>
            </div>
        </Link>
    );
}

MightLikeCard.propTypes = {
    movie: PropTypes.shape({
        id: PropTypes.string.isRequired,
        image: PropTypes.string,
        title: PropTypes.string.isRequired,
        imDbRating: PropTypes.string
    })
};

export default MightLikeCard;