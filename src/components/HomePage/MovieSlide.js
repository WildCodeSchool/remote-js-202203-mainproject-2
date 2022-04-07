import PropTypes from 'prop-types';

import MovieTile from './MovieTile';

function MovieSlide({ movies, areTilesLandscape, slideId, slideTitle }) {

    return(
        <div id={(slideId?.length) && slideId} className={`${(areTilesLandscape) ? 'landscape' : 'movie'}-push`}>
            <h4>{(slideTitle?.length) ? slideTitle : 'New section'}</h4>
            <div className="wrapper">
                {
                    (movies?.length) 
                    ? <div className={`${(areTilesLandscape) ? 'landscape' : 'movie'}-list`}>
                        { movies.map((movie, index) => <MovieTile key={index} movie={movie} isLandScape={areTilesLandscape} showStats={true}/>) }
                    </div>
                    : <div className='loading-movies'><h5>No movies found</h5></div>
                }
            </div>

        </div>
    );
}

MovieSlide.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            rank: PropTypes.string,
            rankUpDown: PropTypes.string,
            title: PropTypes.string.isRequired,
            fullTitle: PropTypes.string,
            image: PropTypes.string,
            imDbRating: PropTypes.string,
        })
    ),
    areTilesLandscape: PropTypes.bool,
    slideId: PropTypes.string, 
    slideTitle: PropTypes.string.isRequired
};

export default MovieSlide;