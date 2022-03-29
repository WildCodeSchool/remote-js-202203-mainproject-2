import React from 'react';
import Actor from './Actor';
import PropTypes from 'prop-types';

function ActorList({ listTitle, actorList }) {
    return (
        <div className="movie-actor">
            <h3>{listTitle}</h3>
            <div className="wrapper">
                <div className="actor-list">
                    {actorList.map((actor) => <Actor key={actor.id} actor={actor} />)}
                </div>
            </div>
        </div>
    );
}

ActorList.propTypes = {
    listTitle: PropTypes.string.isRequired,
    actorList: PropTypes.arrayOf(
        PropTypes.object.isRequired
    )
};

export default ActorList;