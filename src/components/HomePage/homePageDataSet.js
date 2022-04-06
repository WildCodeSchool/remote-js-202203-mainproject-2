const setOfFilms = [
    {
        id: 'tt1877830',
        rank: '1',
        rankUpDown: '0',
        title: 'The Batman',
        fullTitle: 'The Batman (2022)',
        year: '2022',
        image: 'https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_UX128_CR0,3,128,176_AL_.jpg',
        crew: 'Matt Reeves (dir.), Robert Pattinson, Zoë Kravitz',
        imDbRating: '8.4',
        imDbRatingCount: '271825'
    },
    {
        id: 'tt2463208',
        rank: '2',
        rankUpDown: '0',
        title: 'The Adam Project',
        fullTitle: 'The Adam Project (2022)',
        year: '2022',
        image: 'https://m.media-amazon.com/images/M/MV5BOWM0YWMwMDQtMjE5NS00ZTIwLWE1NWEtODViMWZjMWI2OTU3XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UX128_CR0,3,128,176_AL_.jpg',
        crew: 'Shawn Levy (dir.), Ryan Reynolds, Walker Scobell',
        imDbRating: '6.8',
        imDbRatingCount: '89699'
    },
    {
        id: 'tt8097030',
        rank: '3',
        rankUpDown: '+2',
        title: 'Turning Red',
        fullTitle: 'Turning Red (2022)',
        year: '2022',
        image: 'https://m.media-amazon.com/images/M/MV5BNjY0MGEzZmQtZWMxNi00MWVhLWI4NWEtYjQ0MDkyYTJhMDU0XkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_UX128_CR0,3,128,176_AL_.jpg',
        crew: 'Domee Shi (dir.), Rosalie Chiang, Sandra Oh',
        imDbRating: '7.1',
        imDbRatingCount: '48556'
    },
    {
        id: 'tt10811166',
        rank: '4',
        rankUpDown: '+34',
        title: 'The Kashmir Files',
        fullTitle: 'The Kashmir Files (2022)',
        year: '2022',
        image: 'https://m.media-amazon.com/images/M/MV5BZjI0YmMzNDctZGFkZi00NmIyLTk5NWEtMTU1MGRmMDQwNWU2XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_UX128_CR0,1,128,176_AL_.jpg',
        crew: 'Vivek Agnihotri (dir.), Mithun Chakraborty, Anupam Kher',
        imDbRating: '8.3',
        imDbRatingCount: '528230'
    },
    {
        id: 'tt10872600',
        rank: '5',
        rankUpDown: '+1',
        title: 'Spider-Man: No Way Home',
        fullTitle: 'Spider-Man: No Way Home (2021)',
        year: '2021',
        image: 'https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_UX128_CR0,3,128,176_AL_.jpg',
        crew: 'Jon Watts (dir.), Tom Holland, Zendaya',
        imDbRating: '8.6',
        imDbRatingCount: '545035'
    },
    {
        id: 'tt13560574',
        rank: '6',
        rankUpDown: '+20',
        title: 'X',
        fullTitle: 'X (2022)',
        year: '2022',
        image: 'https://m.media-amazon.com/images/M/MV5BMTJiMmE5YWItOWZjYS00YTg0LWE0MTYtMzg2ZTY4YjNkNDEzXkEyXkFqcGdeQXVyMTAzMDg4NzU0._V1_UY176_CR6,0,128,176_AL_.jpg',
        crew: 'Ti West (dir.), Mia Goth, Jenna Ortega',
        imDbRating: '7.4',
        imDbRatingCount: '5050'
    },
    {
        id: 'tt2180339',
        rank: '7',
        rankUpDown: '0',
        title: 'Deep Water',
        fullTitle: 'Deep Water (2022)',
        year: '2022',
        image: 'https://m.media-amazon.com/images/M/MV5BNTE1M2NjNDgtYjQ2Ny00YTMzLWJiYWQtMTdmM2Q2YjA1MDg1XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UX128_CR0,3,128,176_AL_.jpg',
        crew: 'Adrian Lyne (dir.), Ben Affleck, Ana de Armas',
        imDbRating: '5.4',
        imDbRatingCount: '13993'
    },
    {
        id: 'tt3581652',
        rank: '8',
        rankUpDown: '-4',
        title: 'West Side Story',
        fullTitle: 'West Side Story (2021)',
        year: '2021',
        image: 'https://m.media-amazon.com/images/M/MV5BMzQ5ZDZhZDItZTNmZi00MWQ0LWJlNDUtZTE4ZWJmODNlM2Y3XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_UX128_CR0,3,128,176_AL_.jpg',
        crew: 'Steven Spielberg (dir.), Ansel Elgort, Rachel Zegler',
        imDbRating: '7.4',
        imDbRatingCount: '55960'
    },
    {
        id: 'tt10293406',
        rank: '9',
        rankUpDown: '+9',
        title: 'The Power of the Dog',
        fullTitle: 'The Power of the Dog (2021)',
        year: '2021',
        image: 'https://m.media-amazon.com/images/M/MV5BZGRhYjE2NWUtN2FkNy00NGI3LTkxYWMtMDk4Yjg5ZjI3MWI2XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UX128_CR0,3,128,176_AL_.jpg',
        crew: 'Jane Campion (dir.), Benedict Cumberbatch, Kirsten Dunst',
        imDbRating: '6.9',
        imDbRatingCount: '135591'
    },
    {
        id: 'tt13403046',
        rank: '10',
        rankUpDown: '-7',
        title: 'Fresh',
        fullTitle: 'Fresh (2022)',
        year: '2022',
        image: 'https://m.media-amazon.com/images/M/MV5BZTgxMGQ2ZDctYWY4Yy00YTI4LWIxMmYtOWViMGI5ZDIwMmFiXkEyXkFqcGdeQXVyMTAyMjQ3NzQ1._V1_UX128_CR0,3,128,176_AL_.jpg',
        crew: 'Mimi Cave (dir.), Daisy Edgar-Jones, Sebastian Stan',
        imDbRating: '6.7',
        imDbRatingCount: '18949'
    },
    {
        id: 'tt1160419',
        rank: '11',
        rankUpDown: '+9',
        title: 'Dune',
        fullTitle: 'Dune (2021)',
        year: '2021',
        image: 'https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX128_CR0,3,128,176_AL_.jpg',
        crew: 'Denis Villeneuve (dir.), Timothée Chalamet, Rebecca Ferguson',
        imDbRating: '8.1',
        imDbRatingCount: '519695'
    },
    {
        id: 'tt7740496',
        rank: '12',
        rankUpDown: '+7',
        title: 'Nightmare Alley',
        fullTitle: 'Nightmare Alley (2021)',
        year: '2021',
        image: 'https://m.media-amazon.com/images/M/MV5BOTI4NDhhNGEtZjQxZC00ZTRmLThmZTctOGJmY2ZlOTc0ZGY0XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX128_CR0,3,128,176_AL_.jpg',
        crew: 'Guillermo del Toro (dir.), Bradley Cooper, Cate Blanchett',
        imDbRating: '7.1',
        imDbRatingCount: '90792'
    },
    {
        id: 'tt11252248',
        rank: '13',
        rankUpDown: '+10',
        title: 'Dog',
        fullTitle: 'Dog (2022)',
        year: '2022',
        image: 'https://m.media-amazon.com/images/M/MV5BYjA2MDM2YjctYzNhNC00NGEzLWFmYWEtODExODFkNmUyOGE2XkEyXkFqcGdeQXVyODk2NDQ3MTA@._V1_UX128_CR0,3,128,176_AL_.jpg',
        crew: 'Reid Carolin (dir.), Channing Tatum, Ryder McLaughlin',
        imDbRating: '6.5',
        imDbRatingCount: '10369'
    },
    {
        id: 'tt11245972',
        rank: '14',
        rankUpDown: '-2',
        title: 'Scream',
        fullTitle: 'Scream (2022)',
        year: '2022',
        image: 'https://m.media-amazon.com/images/M/MV5BYjExYTcwYmYtMWY2Zi00MGJlLTk3YjUtZTU1Zjg4MDc0Y2FjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_UX128_CR0,3,128,176_AL_.jpg',
        crew: 'Matt Bettinelli-Olpin (dir.), Neve Campbell, Courteney Cox',
        imDbRating: '6.5',
        imDbRatingCount: '73299'
    },
    {
        id: 'tt11271038',
        rank: '15',
        rankUpDown: '+1',
        title: 'Licorice Pizza',
        fullTitle: 'Licorice Pizza (2021)',
        year: '2021',
        image: 'https://m.media-amazon.com/images/M/MV5BYjkwMzIxYzMtOTVkMS00NDQxLThkMjItNzgxN2RiNjdlNTliXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_UX128_CR0,3,128,176_AL_.jpg',
        crew: 'Paul Thomas Anderson (dir.), Alana Haim, Cooper Hoffman',
        imDbRating: '7.4',
        imDbRatingCount: '61484'
    },
    {
        id: 'tt1464335',
        rank: '16',
        rankUpDown: '-3',
        title: 'Uncharted',
        fullTitle: 'Uncharted (2022)',
        year: '2022',
        image: 'https://m.media-amazon.com/images/M/MV5BMWEwNjhkYzYtNjgzYy00YTY2LThjYWYtYzViMGJkZTI4Y2MyXkEyXkFqcGdeQXVyNTM0OTY1OQ@@._V1_UX128_CR0,3,128,176_AL_.jpg',
        crew: 'Ruben Fleischer (dir.), Tom Holland, Mark Wahlberg',
        imDbRating: '6.7',
        imDbRatingCount: '55721'
    },
    {
        id: 'tt2953050',
        rank: '17',
        rankUpDown: '-2',
        title: 'Encanto',
        fullTitle: 'Encanto (2021)',
        year: '2021',
        image: 'https://m.media-amazon.com/images/M/MV5BNjE5NzA4ZDctOTJkZi00NzM0LTkwOTYtMDI4MmNkMzIxODhkXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_UX128_CR0,3,128,176_AL_.jpg',
        crew: 'Jared Bush (dir.), Stephanie Beatriz, María Cecilia Botero',
        imDbRating: '7.3',
        imDbRatingCount: '170099'
    },
    {
        id: 'tt6856242',
        rank: '18',
        rankUpDown: '-9',
        title: 'The King\'s Man',
        fullTitle: 'The King\'s Man (2021)',
        year: '2021',
        image: 'https://m.media-amazon.com/images/M/MV5BMDEzZDY2ZDktNTlmOS00NThjLThkNTEtMjE5MzI5NWEwZmRjXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_UX128_CR0,3,128,176_AL_.jpg',
        crew: 'Matthew Vaughn (dir.), Ralph Fiennes, Gemma Arterton',
        imDbRating: '6.3',
        imDbRatingCount: '100072'
    },
    {
        id: 'tt6264654',
        rank: '19',
        rankUpDown: '-5',
        title: 'Free Guy',
        fullTitle: 'Free Guy (2021)',
        year: '2021',
        image: 'https://m.media-amazon.com/images/M/MV5BOTY2NzFjODctOWUzMC00MGZhLTlhNjMtM2Y2ODBiNGY1ZWRiXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX128_CR0,3,128,176_AL_.jpg',
        crew: 'Shawn Levy (dir.), Ryan Reynolds, Jodie Comer',
        imDbRating: '7.2',
        imDbRatingCount: '313916'
    },
    {
        id: 'tt0468569',
        rank: '20',
        rankUpDown: '-9',
        title: 'The Dark Knight',
        fullTitle: 'The Dark Knight (2008)',
        year: '2008',
        image: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX128_CR0,3,128,176_AL_.jpg',
        crew: 'Christopher Nolan (dir.), Christian Bale, Heath Ledger',
        imDbRating: '9.1',
        imDbRatingCount: '2526208'
    },
    {
        id: 'tt13320622',
        rank: '21',
        rankUpDown: '+28',
        title: 'The Lost City',
        fullTitle: 'The Lost City (2022)',
        year: '2022',
        image: 'https://m.media-amazon.com/images/M/MV5BMmIwYzFhODAtY2I1YS00ZDdmLTkyYWQtZjI5NDIwMDc2MjEyXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UX128_CR0,3,128,176_AL_.jpg',
        crew: 'Aaron Nee (dir.), Sandra Bullock, Channing Tatum',
        imDbRating: '7.1',
        imDbRatingCount: '128'
    },
    {
        id: 'tt12789558',
        rank: '22',
        rankUpDown: '+3',
        title: 'Belfast',
        fullTitle: 'Belfast (2021)',
        year: '2021',
        image: 'https://m.media-amazon.com/images/M/MV5BODMwYTYyY2ItOWQ5Yi00OTI1LTllYTQtYTdlNWM4YzJhYTM0XkEyXkFqcGdeQXVyMTA2MDU0NjM5._V1_UX128_CR0,3,128,176_AL_.jpg',
        crew: 'Kenneth Branagh (dir.), Jude Hill, Lewis McAskie',
        imDbRating: '7.3',
        imDbRatingCount: '45613'
    },
    {
        id: 'tt10366460',
        rank: '23',
        rankUpDown: '+11',
        title: 'CODA',
        fullTitle: 'CODA (2021)',
        year: '2021',
        image: 'https://m.media-amazon.com/images/M/MV5BYzkyNzNiMDItMGU1Yy00NmEyLWE4N2ItMjkzMDZmMmVhNDU4XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX128_CR0,3,128,176_AL_.jpg',
        crew: 'Sian Heder (dir.), Emilia Jones, Marlee Matlin',
        imDbRating: '8.0',
        imDbRatingCount: '66311'
    },
    {
        id: 'tt6708668',
        rank: '24',
        rankUpDown: '1,249',
        title: 'Black Crab',
        fullTitle: 'Black Crab (2022)',
        year: '2022',
        image: 'https://m.media-amazon.com/images/M/MV5BZjMzZmIyNjUtNWE3Zi00NjIyLWIyZTUtYzhmY2NlNWU3NTU3XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX128_CR0,3,128,176_AL_.jpg',
        crew: 'Adam Berg (dir.), Noomi Rapace, Aliette Opheim',
        imDbRating: '5.7',
        imDbRatingCount: '7053'
    },
    {
        id: 'tt12412888',
        rank: '25',
        rankUpDown: '+98',
        title: 'Sonic the Hedgehog 2',
        fullTitle: 'Sonic the Hedgehog 2 (2022)',
        year: '2022',
        image: 'https://m.media-amazon.com/images/M/MV5BNTBjZTBlN2YtOWQzZC00YTAzLWFiOWUtYzRiZWRmNjA5YWFmXkEyXkFqcGdeQXVyMTA0NTIyOTQ@._V1_UX128_CR0,3,128,176_AL_.jpg',
        crew: 'Jeff Fowler (dir.), Ben Schwartz, Idris Elba',
        imDbRating: '',
        imDbRatingCount: '0',
    }
];

const genres = [
    {
        label: 'Action',
        value: 'Action'
    },
    {
        label: 'Comedy',
        value: 'Comedy'
    },
    {
        label: 'Fantasy',
        value: 'Fantasy'
    },
    {
        label: 'Mystery',
        value: 'Mystery'
    },
    {
        label: 'Horror',
        value: 'Horror'
    },
    {
        label: 'Romance',
        value: 'Romance'
    },
    {
        label: 'Sci-fi',
        value: 'Sci-fi'
    },
    {
        label: 'Thriller',
        value: 'Thriller'
    },
    {
        label: 'Crime',
        value: 'Crime'
    },
    {
        label: 'Drama',
        value: 'Drama'
    },
    {
        label: 'Musical',
        value: 'Musical'
    },
];

const backdrops = [
    {
        id:'tt1877830',
        image: 'https://image.tmdb.org/t/p/original/hCJRkP21Mnp6JLzsVWb96bNWbZ1.jpg'
    },
    {
        id:'tt2463208',
        image: 'https://image.tmdb.org/t/p/original/ewUqXnwiRLhgmGhuksOdLgh49Ch.jpg'
    },
    {
        id:'tt8097030',
        image: 'https://image.tmdb.org/t/p/original/iPhDToxFzREctUA0ZQiYZamXsMy.jpg'
    },
    {
        id:'tt10811166',
        image: 'https://image.tmdb.org/t/p/original/6W7AofzHCdlx8KQLZRwGGx69mzp.jpg'
    },
];

export { setOfFilms, genres, backdrops };