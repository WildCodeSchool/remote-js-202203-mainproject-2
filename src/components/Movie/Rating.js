import React from 'react';
import PropTypes from 'prop-types';

function Rating({ rating }) {
    return <span className="score"><i className="fa-solid fa-star"></i> {rating}</span>;
}

Rating.propTypes = {
    rating: PropTypes.string
};

export default Rating;