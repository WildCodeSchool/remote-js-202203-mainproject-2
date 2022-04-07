import Movie from '../class/Movie';
import getImDbUrl from '../utils/getImDbUrl';
import db from './db';

export async function getMovieById(movieId){
    let getAMovie = await db.movies.get(movieId);
    if(getAMovie && !isLastUpdateMoreThanXDays(getAMovie.updatedAt, 7)) return getAMovie;
        
    let m = await getMovieFromImDb(movieId);
    return m;
}

async function getMovieFromImDb(movieId) {
    const options = '/FullActor,FullCast,Posters,Ratings,Genres';
    const urlAPI = getImDbUrl('Title') + movieId + options;
    const controller = new AbortController();
    const signal = controller.signal;
    const res = await fetch(urlAPI, { signal });
    
    if(res.ok){
        const rawMovie = await res.json();
        const movieExist = !!(await db.movies.get(movieId));
        (movieExist) ? await db.movies.put(new Movie(rawMovie), movieId)
                     : await db.movies.add(new Movie(rawMovie));
        const getAddedMovie = await db.movies.get(rawMovie.id);
        return (new Movie(getAddedMovie));
    }else {
        const msg = `An error has occured: ${res.status}`;
        throw new Error(msg);
    }
}

export async function getAllMovies() {
    const movies = await db.movies.toArray();
    return movies;
}

export async function getLovedMovies() {
    const library = await db.movies.where('isLiked').equals(1).toArray();
    return library;
}

function isLastUpdateMoreThanXDays(movieDate, days = 1){
    const now = (new Date()).getTime();
    const movieTime = movieDate.getTime();
    let diff = Math.round((now - movieTime) / (60 * 60 * 60 * 24));
    return (diff > days);
}

export async function getLibrary() {
    const library = await db.movies
        .where('isWatched').equals(1)
        .or('isLiked').equals(1)
        .or('isLiked').equals(2)
        .or('isOwned').equals(1)
        .toArray();
    return library;
}

export function setIsWatched(movieId, watchedNumber) {
    db.movies.update(movieId, { isWatched: watchedNumber });
}

export function setIsLiked(movieId, likedNumber) {
    db.movies.update(movieId, { isLiked: likedNumber});
}

export function setIsOwned(movieId, ownedNumber) {
    db.movies.update(movieId, { isOwned: ownedNumber });
}