import React from 'react';
import PropTypes from 'prop-types';
import MightLikeCard from './MightLikeCard';

function MightLike({similars}) {

    return (
        <div className="movie-alike">
            <h3>{similars.title}</h3>
            <div className="wrapper">
                <div className="alike-list">
                    {similars.movies.map((similar) => <MightLikeCard key={similar.id} movie={similar}/>)}
                </div>
            </div>
        </div>
    );
}

MightLike.propTypes = {
    props: PropTypes.arrayOf(
        PropTypes.object.isRequired
    ),
    similars: PropTypes.arrayOf(
        PropTypes.object.isRequired
    ),
    title: PropTypes.arrayOf(
        PropTypes.object.isRequired
    )
};

export default MightLike;