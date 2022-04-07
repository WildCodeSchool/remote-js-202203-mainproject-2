import Dexie from 'dexie';

const db = new Dexie('movietheque');

db.version(0.3).stores({
    movies: 'id, genres, title, isWatched, isLiked, isOwned'
});

export default db;