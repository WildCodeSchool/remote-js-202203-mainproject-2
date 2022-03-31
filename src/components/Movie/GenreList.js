import React from 'react';
import PropTypes from 'prop-types';

function GenreList({ genres }) {
    return (
        <span>
            Genres : {genres.map((genre) => <button key={genre.key}>{genre.value}</button>)}
        </span>
    );
}

GenreList.propTypes = {
    genres: PropTypes.arrayOf(
        PropTypes.shape({
            key: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired
        })
    )
};

export default GenreList;