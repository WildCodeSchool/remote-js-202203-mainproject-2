import React from 'react';

function MovieMenu() {
    // TODO : Initialiser les états avec les données récupérées dans l'indexedDb.
    const [elementClassName, setElementClassName] = React.useState('');
    const [watched, setWatched] = React.useState(false);
    const [liked, setLiked] = React.useState(0);
    const [owned, setOwned] = React.useState(false);

    // TODO : Changer les données enregistrées dans l'indexedDb à chaque changement d'état.
    function handleWatch() {
        setWatched(!watched);
    }

    function handleLike() {
        setLiked(liked + 1);
        liked === 2 && setLiked(0);
    }

    function handleOwn() {
        setOwned(!owned);
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

export default MovieMenu;