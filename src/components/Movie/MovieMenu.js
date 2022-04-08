import React from 'react';
import PropTypes from 'prop-types';
import { setIsWatched, setIsLiked, setIsOwned } from './../../indexedDb/indexedDbController';

function MovieMenu({ movieId, isWatched, isLiked, isOwned }) {
    const [elementClassName, setElementClassName] = React.useState('');
    const [watched, setWatched] = React.useState(isWatched === 0 ? false : true);
    const [liked, setLiked] = React.useState(isLiked ?? 0);
    const [owned, setOwned] = React.useState(isOwned === 0 ? false : true);

    function handleWatch() {
        const value = watched === true ? 0 : 1;
        setWatched(!watched);
        setIsWatched(movieId, value);
    }

    function handleLike() {
        setLiked(liked + 1);
        setIsLiked(movieId, liked + 1);

        if (liked === 2) {
            setLiked(0);
            setIsLiked(movieId, 0);
        }
    }

    function handleOwn() {
        const value = owned === true ? 0 : 1;
        setOwned(!owned);
        setIsOwned(movieId, value);
    }

    function handleMenu() {
        switch (elementClassName) {
            case '':
                setElementClassName('opened-menu');
                break;
            case 'opened-menu':
                setElementClassName('closed-menu');
                break;
            case 'closed-menu':
                setElementClassName('opened-menu');
                break;
            default:
                setElementClassName('closed-menu');
                break;
        }
    }

    return (
        <div className="fixed-menu">
            <div className="wrapper">
                <div className={`pop-elem ${elementClassName}`}>
                    <button onClick={handleWatch}><i className={`fa-solid fa-eye${watched ? ' watched' : '-slash'}`}></i></button>
                </div>
                <div className={`pop-elem ${elementClassName}`}>
                    <button onClick={handleLike}><i className={`fa-solid fa-heart${liked === 1 ? ' liked' : ''}${liked === 2 ? '-crack' : ''}`}></i></button>
                </div>
                <div className={`pop-elem ${elementClassName}`}>
                    <button onClick={handleOwn}><i className={`fa-solid fa-square${owned ? '-check owned' : ''}`}></i></button>
                </div>
                <button id="triggerMenu" onClick={handleMenu}><i className="fa-solid fa-ellipsis"></i></button>
            </div>
        </div>
    );
}

MovieMenu.propTypes = {
    movieId: PropTypes.string.isRequired,
    isWatched: PropTypes.number,
    isLiked: PropTypes.number,
    isOwned: PropTypes.number
};

export default MovieMenu;