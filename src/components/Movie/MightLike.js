import React from 'react';
import PropTypes from 'prop-types';
import MightLikeCard from './MightLikeCard';

function MightLike({ similars }) {
    return (
        <div className="movie-alike">
            <h3>You Might Also Like</h3>
            <div className="wrapper">
                <div className="alike-list">
                    {similars.map((similar) => <MightLikeCard key={similar.id} movie={similar}/>)}
                </div>
            </div>
        </div>
    );
}

MightLike.propTypes = {
    similars: PropTypes.arrayOf(
        PropTypes.object.isRequired
    )
};

export default MightLike;