import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { backdrops } from './homePageDataSet';

function MovieTile({movie, isLandScape}){

    let image = (!isLandScape) ? movie.image : ((backdrops.find((m) => m.id === movie.id))?.image || 'https://picsum.photos/200/300');
    function getTileSpan(){
        
        const rank = movie?.rankUpDown;
        const isUp = (rank?.includes('+')) ? true : false;
        const value = Number(rank?.replace('+', '').replace('-', ''));

        return (
            <small>
                { (movie.imDbRating) && <span><i className="fa-solid fa-star"></i>&nbsp;{ movie.imDbRating }</span> }
                { (movie.imDbRating && value!=0) && ' | ' }
                { (rank && value != 0 ) && <span className={(isUp) ? 'stonks' : 'no-stonks'}><i className={`fa-solid fa-arrow-trend-${(isUp) ? 'up' : 'down'}`}></i> {value}</span> }
            </small>
        );
    }

    return(
        <Link to={`/movie/${movie.id}`} >
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
        </Link>

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