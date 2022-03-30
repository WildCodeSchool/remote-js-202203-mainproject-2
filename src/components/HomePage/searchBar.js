import React from 'react';

function SearchBar(){

    const [searchValue, setSearchValue] = React.useState('');
    const [advanceSearchActive, btnAdvanceSearch] = React.useState();
    const [MovieList, setMovieList] = React.useState([]);
    const [typeOption, setTypeOption] = React.useState([]);
    const [classificationOption, setClassificationOption] = React.useState([]);
    let userRateOption =[];
    const [lowUserRate, setLowUserRate] = React.useState('');
    const [highUserRate, setHighUserRate] = React.useState('');
    let releaseDateOption = [];
    const [releaseDateMax, setReleaseDateMax] = React.useState('');
    const [releaseDateMin, setReleaseDateMin] = React.useState('');
    const [triOption, setTriOption] = React.useState('');


    function rateOption(){
        let tab = [];
        for (let i=1;i < 10;i+=0.1){
            tab.push(i.toFixed(1));
        }
        return tab;
    }


    function btnSearch(){
        let urlMovie;
        rateOptionParam();
        releaseDateOptionParam();

        if(advanceSearchActive){
            urlMovie = `https://imdb-api.com/API/AdvancedSearch/k_xxgrvftl?title=${searchValue}&title_type=${typeOption}&user_rating=${userRateOption}&release_date=${releaseDateOption}&certificates=${classificationOption}&sort=${triOption}`;
        }else{
            urlMovie = `https://imdb-api.com/en/API/SearchAll/k_xxgrvftl/${searchValue}`;
        }
        fetch(urlMovie)
        .then(res => res.json())
        .then(
          (result) => {
            setMovieList(result.results);
          });
    }


    function typeOptionParam(value){
        if(typeOption.includes(value)){
         setTypeOption(typeOption.filter(option => !option.includes(value)));
        }else{
            setTypeOption(typeOption => [...typeOption, value]);
        }
    }


    function classificationOptionParam(value){
        if(classificationOption.includes(value)){
            setClassificationOption(classificationOption.filter(option => !option.includes(value)));
        }else{
            setClassificationOption(classificationOption => [...classificationOption, value]);
        }
    }


    function rateOptionParam(){
        highUserRate && lowUserRate  ? userRateOption = [lowUserRate,highUserRate] : null;
        !highUserRate && lowUserRate ? userRateOption = [lowUserRate] : null;
        !lowUserRate && highUserRate ? userRateOption = [highUserRate] : null;
    }
    

    function releaseDateOptionParam(){
        releaseDateMax && releaseDateMin  ? releaseDateOption = [releaseDateMin,releaseDateMax] : null;
        !releaseDateMax && releaseDateMin ? releaseDateOption = [releaseDateMin] : null;
        !releaseDateMin && releaseDateMax ? releaseDateOption = [releaseDateMax] : null;
    }




    return (
        <div>
        <input type='text' onChange={(event) => setSearchValue(event.target.value)}></input>
        <button onClick={() => btnAdvanceSearch(!advanceSearchActive)}>Advanced Search</button>
        <button onClick={() => btnSearch()}>Chercher</button>
        
        {advanceSearchActive ?
        <div>
            <h3>Advance Settings</h3>
            <div>
                <fieldset>    
                    
                    <legend>What do you want ?</legend>

                    <div>
                        <h3>Type:</h3>
                        <label>Feature Film <input type="checkbox" value='feature' onChange={(event) => typeOptionParam(event.target.value)} /></label>
                        <label>TV Movie <input type="checkbox" value='tv_movie' onChange={(event) => typeOptionParam(event.target.value)} /></label>
                        <label>TV Série <input type="checkbox" value='tv_series' onChange={(event) => typeOptionParam(event.target.value)} /></label>
                        <label>TV Épisode <input type="checkbox" value='tv_episode' onChange={(event) => typeOptionParam(event.target.value)} /></label>
                        <label>TV special <input type="checkbox" value='tv_special' onChange={(event) => typeOptionParam(event.target.value)} /></label>
                        <label>Mini-Séries <input type="checkbox" value='tv_miniseries' onChange={(event) => typeOptionParam(event.target.value)} /></label>
                        <label>Docummentary <input type="checkbox" value='documentary' onChange={(event) => typeOptionParam(event.target.value)} /></label>
                        <label>Short Film <input type="checkbox" value='short' onChange={(event) => typeOptionParam(event.target.value)} /></label>
                        <label>Vidéo <input type="checkbox" value='video' onChange={(event) => typeOptionParam(event.target.value)} /></label>
                        <label>TV Short<input type="checkbox" value='tv_short' onChange={(event) => typeOptionParam(event.target.value)} /></label>
                    </div>

                    <div>
                        <label>
                        <h3>Release date :</h3>
                        <input type="text" maxLength="10" onChange={(event) => setReleaseDateMin(event.target.value)} />
                        <span> to </span>
                        <input type="text" maxLength="10" onChange={(event) => setReleaseDateMax(event.target.value)}/>
                        </label>
                    </div>

                    <div>
                            <h3>User Rate:</h3>
                            <select onChange={(event) => setLowUserRate(event.target.value)}>
                                <option hidden default value=""></option> 
                                {rateOption().map((rate,index) => <option key={index} value={rate}>{rate}</option>)}                          
                            </select>

                            <span> to </span>

                            <select onChange={(event) => setHighUserRate(event.target.value)}>
                                <option hidden default value=""></option> 
                                {rateOption().map((rate,index) => <option key={index} value={rate}>{rate}</option>)}                          
                            </select>
                    </div>

                    <div>
                        <h3>Classification:</h3>
                        <label>G<input type="checkbox" value='us:G' onChange={(event) => classificationOptionParam(event.target.value)} /></label>
                        <label>PG<input type="checkbox" value='us:PG' onChange={(event) => classificationOptionParam(event.target.value)} /></label>
                        <label>PC-13<input type="checkbox" value='us:PG-13' onChange={(event) => classificationOptionParam(event.target.value)} /></label>
                        <label>R<input type="checkbox" value='us:R' onChange={(event) => classificationOptionParam(event.target.value)} /></label>
                        <label>NC-17<input type="checkbox" value='us:NC-17' onChange={(event) => classificationOptionParam(event.target.value)} /></label>
                    </div>

                    <div>
                        <label>
                        <h3>Sort results by:</h3> 
                            <select onChange={(event) => setTriOption(event.target.value)}>
                                <option hidden default value=""></option> 
                                <option value='moviemeter,asc'>Popularity Ascending</option>   
                                <option value='moviemeter,desc'>Popularity Descending</option> 
                                <option value='user_rating,asc'>User Rating Ascending</option> 
                                <option value='user_rating,desc'>User Rating Descending</option>
                                <option value='alpha,asc'>A-Z Ascending</option> 
                                <option value='alpha,desc'>A-Z Descending</option> 
                                <option value='release_date,asc'>Release Date Ascending</option>  
                                <option value='release_date,desc'>Release Date Descending</option>                         
                            </select>
                        </label>
                    </div>

                </fieldset>  

            </div>

            {
            MovieList.filter((film) => film)
            .map((film) => (
              <p key={film.id}>{film.title}</p>
            ))
            }

        </div>






        :   MovieList.filter((film) => film.resultType.includes('Title'))
            .map((film) => (
              <p key={film.id}>{film.title}</p>
            )) 
        }





        </div>
    );
}

export default SearchBar;