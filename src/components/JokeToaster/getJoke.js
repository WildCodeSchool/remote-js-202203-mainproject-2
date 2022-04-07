
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

function getJokeUrl(){
    const jokeAPIBaseURL = 'https://v2.jokeapi.dev/joke/';
    let jokeAPIURL = `${jokeAPIBaseURL}${(jokeCategories.length > 0) ? jokeCategories.join(',') : 'Any'}`;
    
    if(blacklistFlags.length) jokeAPIURL += `?blacklistFlags=${blacklistFlags.join(',')}`;

    return jokeAPIURL;
}

async function getJoke() {
    const controller = new AbortController();
    const signal = controller.signal;

    let joke = await fetch(getJokeUrl(), { signal }).then(r => r.json()).then(data =>  data);
    controller.abort();
    return joke; 
}

async function getSafeJoke() {
    let joke = null;
    do { joke = await getJoke(); } while (!joke.safe);
    return joke;
}

export  {getJoke, getSafeJoke};