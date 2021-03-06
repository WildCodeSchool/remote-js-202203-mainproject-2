import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getMovieById } from '../../indexedDb/indexedDbController';
// import { backdrops } from './homePageDataSet';

function MovieTile({ movie: propsMovie , isLandScape, showStats = false}){
    const loadingDotsArray = [ '...', '·..', '··.', '···', '.··', '..·', ];
    const [ loadingDotsIndex, setLoadingDotsIndex] = useState(0);
    
    const [ movie, setMovie ] = useState(null);
    useEffect(async () => {
        await setMovieState();
        const interval = setInterval(() => {
            setLoadingDotsIndex((i) => (i >= loadingDotsArray.length -1) ? 0 : i+1);
        }, 100);
        return () => clearInterval(interval);
    }, []);

    
    async function setMovieState (){
        if(isLandScape){
            const m = await getMovieById(propsMovie.id);
            setMovie(m);
        }else setMovie(propsMovie);
    }
        
    useEffect(async () => {
        await setMovieState();
    }, [propsMovie]);


    function getImageUrl(){
        return (!isLandScape) ? movie.image : movie.backdrop.link;
    }

    function getTileSpan(){
        
        const rank = movie?.rankUpDown;
        const isUp = (rank?.includes('+')) ? true : false;
        const value = Number(rank?.replace('+', '').replace('-', ''));

        return (
            <small>
                { (movie.imDbRating) && <span><i className="fa-solid fa-star"></i>&nbsp;{ movie.imDbRating }</span> }
                { (rank && movie.imDbRating) && ' | ' }
                { (rank && value != 0 ) && <span className={(isUp) ? 'stonks' : 'no-stonks'}><i className={`fa-solid fa-arrow-trend-${(isUp) ? 'up' : 'down'}`}></i> {value}</span> }
            </small>
        );
    }

    return(
        <>
        {
            (movie) ?
            <Link to={`/movie/${movie.id}`} >
                <div className={`${(isLandScape) ? 'landscape' : 'movie'}-card`}>
                <figure>
                    <img 
                        src={`./assets/images/template/blank-${(isLandScape) ? 'release' : 'poster'}.png`}
                        style={ { backgroundImage: `url(${getImageUrl()})` } }
                        alt={movie.fullTitle ?? movie.title}
                        title={movie.fullTitle ?? movie.title}
                    />
                    <figcaption>
                        <strong className={(showStats) ? 'no-span' : ''}>{movie.title}</strong>
                        {  showStats && getTileSpan() }
                    </figcaption>
                </figure>
                </div>
            </Link>
            :
            <p className='loading-movie'>Loading Movie {loadingDotsArray[loadingDotsIndex]}</p>
        }
        </>
    );
}

MovieTile.propTypes = {
    movie: PropTypes.shape({
        id: PropTypes.string.isRequired,
        rank: PropTypes.string,
        rankUpDown: PropTypes.string,
        title: PropTypes.string.isRequired,
        fullTitle: PropTypes.string,
        image: PropTypes.string,
        imDbRating: PropTypes.string,
    }),
    isLandScape: PropTypes.bool,
    showStats: PropTypes.bool
};

export default MovieTile;
