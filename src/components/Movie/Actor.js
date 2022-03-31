import React from 'react';
import PropTypes from 'prop-types';

function Actor({ actor }) {
    return (
        <div className="movie-star" id={actor.id}>
            <figure>
                <img src="./../assets/images/template/blank-actor.png" alt={actor.name} title={actor.name} style={{backgroundImage: `url('${actor.image}')`}}/>
                <figcaption>{actor.name}</figcaption>
            </figure>
        </div>
    );
}

Actor.propTypes = {
    actor: PropTypes.shape({
        id: PropTypes.string.isRequired,
        image: PropTypes.string,
        name: PropTypes.string.isRequired,
        asCharacter: PropTypes.string
    })
};

export default Actor;