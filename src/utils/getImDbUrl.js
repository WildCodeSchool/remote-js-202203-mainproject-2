const API_KEY = 'k_6nmzyjvm';

const getImDbUrl = (routeName) => `https://imdb-api.com/en/API/${routeName}/${API_KEY}/`; 

export default getImDbUrl;
