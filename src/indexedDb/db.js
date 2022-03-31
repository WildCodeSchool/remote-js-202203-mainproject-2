import Dexie from 'dexie';

const db = new Dexie('movietheque');

db.version(0.1).stores({
    movies: 'id, genres, title'
});

export default db;