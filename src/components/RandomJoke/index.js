import { useState, useEffect } from 'react';
import './randomJoke.css';

function RandomJoke() {
    const [ joke, setJoke ] = useState('');
         
    // TODO obtenir les préférences de l'utilisateur
    const blacklistFlags = [
        'nsfw',
        'religious',
        'political',
        'racist',
        'sexist',
        'explicit'
    ];
    const jokeCategories = [
        'Programming',
        'Miscellaneous',
        'Dark','Pun'
    ];
    
    const controller = new AbortController();
    const signal = controller.signal;
    
    useEffect(() => {
        getJokeFromAPI();
    }, []);
    
    function getJokeFromAPI() {
        fetch(getJokeAPIURL(), { signal }).then(r => r.json()).then(data =>  setJoke(data));
        return () => controller.abort();
    }
    
    function getJokeAPIURL(){
        const jokeAPIBaseURL = 'https://v2.jokeapi.dev/joke/';
        let jokeAPIURL = `${jokeAPIBaseURL}${(jokeCategories.length > 0) ? jokeCategories.join(',') : 'Any'}`;
        
        if(blacklistFlags.length) jokeAPIURL += `?blacklistFlags=${blacklistFlags.join(',')}`;

        return jokeAPIURL;
    }

    function parseLineBreak(string){
        return string.split('\n').map((p, i) => <p key={i} className='joke-part'>{p}</p>);
    }

    function showJoke(){
        if(joke.type === 'single') return(<blockquote className='single-joke'>{parseLineBreak(joke.joke)}</blockquote>);

        if(joke.type === 'twopart'){
            return(
                <>
                    <blockquote className='twopart-joke-setup'>{parseLineBreak(joke.setup)}</blockquote>
                    <br />
                    <blockquote className='twopart-joke-delivery'>{parseLineBreak(joke.delivery)}</blockquote>
                </>
            );
        }

    }

    return ( 
        <section>
            { joke ? showJoke() : 'Charging Joke ...' }

        </section>
     );
}

export default RandomJoke;