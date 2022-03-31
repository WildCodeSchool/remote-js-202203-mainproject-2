const API_KEY = 'k_73gpxcq4';

const getImDbUrl = (routeName) => `https://imdb-api.com/en/API/${routeName}/${API_KEY}/`; 

export default getImDbUrl;