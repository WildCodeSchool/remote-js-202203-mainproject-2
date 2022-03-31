const MAX_ACTORS_KEPT = 30;
const MAX_SIMILARS_KEPT = 7;
const DEFAULT_BACKDROP = {
    link: './assets/images/notfounds/backdrop_not_found_white.png',
};

class Movie {
    constructor(fullMovie){
        this.id = fullMovie.id;
        this.title = fullMovie.title;
        this.updatedAt = fullMovie.updatedAt || new Date();
        this.year = fullMovie.year;
        this.image = fullMovie.image;
        this.runtimeStr = fullMovie.runtimeStr;
        this.releaseDate = fullMovie.releaseDate;
        this.year = fullMovie.year;
        this.plot = fullMovie.plot;
        this.imDbRating = fullMovie.imDbRating;
        this.actorList = fullMovie.actorList?.slice(0, MAX_ACTORS_KEPT) || [];
        this.directors = fullMovie.directors;
        this.genreList = fullMovie.genreList || [];
        this.similars = fullMovie.similars?.slice(0, MAX_SIMILARS_KEPT) || [];
        this.stars = fullMovie.stars;
        this.backdrop = (fullMovie.posters?.backdrops?.find(backdrop => backdrop.aspectRatio >= 1)) || DEFAULT_BACKDROP;
    }
}

export default Movie;