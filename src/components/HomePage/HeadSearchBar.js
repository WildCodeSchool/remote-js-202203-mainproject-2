import React from 'react';
import '../../assets/styles/HeadSearchBar.css';
import { Link } from 'react-router-dom';
import getImDbUrl from '../../utils/getImDbUrl';

function HeadSearchBar(){

    const [searchValue, setSearchValue] = React.useState('');
    const [advanceSearchActive, btnAdvanceSearch] = React.useState();
    const [MovieList, setMovieList] = React.useState([]);
    const [typeOption, setTypeOption] = React.useState([]);
    const [classificationOption, setClassificationOption] = React.useState([]);
    let userRateOption = [];
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

    function btnAdvanceSearchInput(){
        btnAdvanceSearch(!advanceSearchActive);
        setMovieList([]);
    }

    function btnSearch(){
        rateOptionParam();
        releaseDateOptionParam();

        let urlMovie = (advanceSearchActive)
            ? getImDbUrl('AdvancedSearch') + `?title=${searchValue}&title_type=${typeOption}&user_rating=${userRateOption}&release_date=${releaseDateOption}&certificates=${classificationOption}&sort=${triOption}`
            : getImDbUrl('SearchAll') + `${searchValue}`;
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

        {advanceSearchActive ?



        <div id="searchBar">
            <div id='inputSearch'>
                <input className='searchBarInput' placeholder='Search...' type='text' onChange={(event) => setSearchValue(event.target.value)} value={searchValue}></input>
                <button className='searchBarInputValidate' onClick={() => btnSearch()}>Search</button>
                <button onClick={() => btnAdvanceSearchInput()}>Advanced Search</button>
            
            <div className='searchList'>
                <ul id='movieListSearch'>
                    {
                    MovieList.map((film) => (
                        <li key={film.id}><Link to={`/movie/${film.id}`}>{film.title}</Link></li>
                    ))
                    }
                </ul>
            </div>

            <h3>Advance Settings</h3>
            <div id='searchBarWapper'>
                    <fieldset>    
                        
                        <div className='searchRow'>
                            <h3>Type:</h3>
                            <div id="searchRowType">
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
                        </div>

                        <div className='searchRow'>
                            <h3>Release date :</h3>
                            <div id="searchRowDate">
                                <input placeholder='Date minimum' type="text" maxLength="10" onChange={(event) => setReleaseDateMin(event.target.value)}/>
                                <span> to </span>
                                <input placeholder='Date maximum' type="text" maxLength="10" onChange={(event) => setReleaseDateMax(event.target.value)}/>
                            </div>

                            <h3>User Rate:</h3>
                            <div id="searchRowUserRate">
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

                        </div>

                        
                        <div className='searchRow'>
                            <h3>Classification:</h3>
                                <div id="searchRowClassification">
                                    <label><span>G</span><input type="checkbox" value='us:G' onChange={(event) => classificationOptionParam(event.target.value)} /></label>
                                    <label><span>PG</span><input type="checkbox" value='us:PG' onChange={(event) => classificationOptionParam(event.target.value)} /></label>
                                    <label><span>PC-13</span><input type="checkbox" value='us:PG-13' onChange={(event) => classificationOptionParam(event.target.value)} /></label>
                                    <label><span>R</span><input type="checkbox" value='us:R' onChange={(event) => classificationOptionParam(event.target.value)} /></label>
                                    <label><span>NC-17</span><input type="checkbox" value='us:NC-17' onChange={(event) => classificationOptionParam(event.target.value)} /></label>
                                </div>

                            <h3>Sort results by:</h3>
                            <div id="searchRowSortBy"> 
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
                            </div>
                        </div>
                    </fieldset> 
                </div>
            </div>
        </div>






        :   
            <div id='inputSearch'>
                <input className='searchBarInput' placeholder='Search...' type='text' onChange={(event) => setSearchValue(event.target.value)} value={searchValue}></input>
                <button className='searchBarInputValidate' onClick={() => btnSearch()}>Search</button>
                <button onClick={() => btnAdvanceSearchInput()}>Advanced Search</button>
            
                <div className='searchList'>
                    <ul id='movieListSearch'>
                    {
                    MovieList.filter((film) => film.resultType.includes('Title'))
                    .map((film) => (
                        <li key={film.id}><Link to={`/movie/${film.id}`}>{film.title}</Link></li>
                    ))
                    }
                    </ul>
                </div>
            </div>    
        }





        </div>
    );
}

export default HeadSearchBar;
