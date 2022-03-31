import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import MovieTile from './MovieTile';

function MovieSlide({ movies, areTilesLandscape, slideId, slideTitle }) {
    const loadingDotsArray = [ '...', '·..', '··.', '···', '.··', '..·', ];
    const [ loadingDotsIndex, setLoadingDotsIndex] = useState(0);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setLoadingDotsIndex((i) => (i >= loadingDotsArray.length -1) ? 0 : i+1);
        }, 100);
        return () => clearInterval(interval);
    }, []);

    return(
        <div id={(slideId?.length) && slideId} className={`${(areTilesLandscape) ? 'landscape' : 'movie'}-push`}>
            <h4>{(slideTitle?.length) ? slideTitle : 'New section'}</h4>
            <div className="wrapper">
                {
                    (movies?.length) 
                    ? <div className={`${(areTilesLandscape) ? 'landscape' : 'movie'}-list`}>
                        {
                            movies.map((movie, index) => <MovieTile key={index} movie={movie} isLandScape={areTilesLandscape} showStats={true}/>)
                        }
                    </div>
                    : <p className='loading-movies'>Loading Movies {loadingDotsArray[loadingDotsIndex]}</p>
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
            fullTitle: PropTypes.string.isRequired,
            image: PropTypes.string,
            imDbRating: PropTypes.string,
        })
    ),
    areTilesLandscape: PropTypes.bool,
    slideId: PropTypes.string, 
    slideTitle: PropTypes.string.isRequired
};

export default MovieSlide;