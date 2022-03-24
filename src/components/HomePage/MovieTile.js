import PropTypes from 'prop-types';
import { backdrops } from './homePageDataSet';

function MovieTile({movie, isLandScape}){

    let image = (isLandScape) ? backdrops.find((m) => m.id === movie.id)?.image : movie.image;

    function getTileSpan(){
        
        const isUp = (movie?.rankUpDown?.includes('+')) ? true : false;
        const value = Number(movie?.rankUpDown?.replace('+', '').replace('-', ''));

        return (
            <span>
                { (movie.imDbRating) && <><i className="fa-solid fa-star"></i>&nbsp;{ movie.imDbRating }</> }
                { (movie.imDbRating && value!=0) && ' | ' }
                { (value != 0) && <span className={(isUp) ? 'stonks' : 'no-stonks'}><i className={`fa-solid fa-arrow-trend-${(isUp) ? 'up' : 'down'}`}></i> {value}</span> }
            </span>
        );
    }

    return(
        <div className={`${(isLandScape) ? 'landscape' : 'movie'}-card`}>
            <figure>
                <img 
                    src={`./assets/images/template/blank-${(isLandScape) ? 'release' : 'poster'}.png`}
                    style={ { backgroundImage: `url(${image})` } }
                    alt={movie.fullTitle}
                    title={movie.fullTitle}
                />
                <figcaption>
                    <strong>{movie.title}</strong>
                    {  getTileSpan() }
                </figcaption>
            </figure>
        </div>
    );
}

MovieTile.propTypes = {
    movie: PropTypes.shape({
        id: PropTypes.string.isRequired,
        rank: PropTypes.string,
        rankUpDown: PropTypes.string,
        title: PropTypes.string.isRequired,
        fullTitle: PropTypes.string.isRequired,
        image: PropTypes.string,
        imDbRating: PropTypes.string,
    }),
    isLandScape: PropTypes.bool
};

export default MovieTile;