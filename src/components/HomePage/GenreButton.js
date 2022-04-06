import PropTypes from 'prop-types';

function GenreButton({ genre, changeGenreFilter }) {
    
    function genreBtnClicked(btnValue){
        changeGenreFilter(btnValue);
    }

    return <button className={`${genre.isSelected ? 'active' : ''}`} onClick={() => genreBtnClicked(genre.value)}>{genre.label}</button>;
}

GenreButton.propTypes = {
    genre: PropTypes.exact({
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        isSelected: PropTypes.bool.isRequired,
    }),
    changeGenreFilter: PropTypes.func,
};

export default GenreButton;