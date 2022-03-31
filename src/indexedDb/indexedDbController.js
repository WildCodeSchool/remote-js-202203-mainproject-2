import Movie from '../class/Movie';
import getImDbUrl from '../utils/getImDbUrl';
import db from './db';

export async function getMovieById(movieId){
    let getAMovie = await db.movies.get(movieId);
    if(getAMovie && !isLastUpdateMoreThanXDays(getAMovie.updatedAt, 7)) return getAMovie;
    
    let m = await getFilmFromImDb(movieId);
    return m;
}

async function getFilmFromImDb(movieId) {
    const options = '/FullActor,FullCast,Posters,Ratings,Genres';
    const urlAPI = getImDbUrl('Title') + movieId + options;
    const controller = new AbortController();
    const signal = controller.signal;
    const res = await fetch(urlAPI, { signal });
    
    if(res.ok){
        const rawMovie = await res.json();
        await db.movies.add(new Movie(rawMovie));
        let getAddedMovie = await db.movies.get(rawMovie.id);
        return (new Movie(getAddedMovie));
    }else {
        const msg = `An error has occured: ${res.status}`;
        throw new Error(msg);
    }
}

function isLastUpdateMoreThanXDays(movieDate, days = 1){
    const now = (new Date()).getTime();
    const movieTime = movieDate.getTime();
    let diff = Math.round((now - movieTime) / (60 * 60 * 60 * 24));
    return (diff > days);
}