import GenreButton from './GenreButton';
import { genres } from './homePageDataSet';
//* 👆 Pour le dev seulement --> sinon à passer en props ou autre


function GenreFilterBar(){
    
    function getGenreButton(){
        let buttons = [
            <GenreButton key='0' genre={ { label: 'All', value: 'all'} } />
        ];
        genres.forEach((genre, index) => {
            buttons.push(<GenreButton key={index+1} genre={genre} />);
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

export default GenreFilterBar;