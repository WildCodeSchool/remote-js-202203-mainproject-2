import GenreButton from './GenreButton';
import PropTypes from 'prop-types';

import { genres as  genresList } from './homePageDataSet';
import { useState } from 'react';
//* 👆 Pour le dev seulement --> sinon à passer en props ou autre


function GenreFilterBar({changeGenreFilter}){
    const [genres, setGenres] = useState(() => {
        let genres = genresList.map((genre) => {
            genre.isSelected = false;
            return genre;
        });
        genres.unshift({ label: 'All', value: '*', isSelected: true});
        return genres;
    });

    function genreFilterChanged(genreValue){
        setGenres(() => {
            const copyGenres = [...genres];
            copyGenres.map(genre => {
                genre.isSelected = (genre.value === genreValue);
                return genre;
            });
            setGenres(copyGenres);
        });
        changeGenreFilter(genreValue);
    }

    function getGenreButton(){
        let buttons = [];
        genres.forEach((genre, index) => {
            buttons.push(<GenreButton key={index} genre={genre} changeGenreFilter={genreFilterChanged} />);
        }); 

        return buttons;
    }

    return (
        <div id="genreFilters">
            <div className="wrapper">
                <div className="genres-list">
                    {
                        getGenreButton().map((btn) => btn)
                    }
                </div>
            </div>
        </div>
    );
}

GenreFilterBar.propTypes = {
    changeGenreFilter: PropTypes.func,
};

export default GenreFilterBar;