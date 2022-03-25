import PropTypes from 'prop-types';

function GenreButton({ genre }) {
    
    function genreBtnClicked(btnValue){
        console.log(btnValue);
    }

    return <button onClick={() => genreBtnClicked(genre.value)}>{genre.label}</button>;
}

GenreButton.propTypes = {
    genre: PropTypes.exact({
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
    }),
};

export default GenreButton;